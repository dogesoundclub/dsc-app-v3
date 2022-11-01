import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import { View, ViewParams } from "skyrouter";
import CommonUtil from "../../../CommonUtil";
import BiasCompoundContract from "../../../contracts/BiasCompoundContract";
import BiasContract from "../../../contracts/BiasContract";
import Klaytn from "../../../klaytn/Klaytn";
import Wallet from "../../../klaytn/Wallet";
import ViewUtil from "../../ViewUtil";
import BMCSItem from "../component/synthesis/BMCSItem";
import BmcsLayout from "./Layout";

export default class Unstaking implements View {

    private container: DomNode;
    private mateList: DomNode;
    private mateBalance: DomNode;
    private mixPrice: DomNode;

    private selectedMateItem: BMCSItem | undefined;

    constructor() {
        BmcsLayout.current.title = "BMCS 선택";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-preparation-view",
                el("section",
                    el("header",
                        el(".title",
                            el("h2", "언스테이킹 가능한 BMCS"),
                            this.mateBalance = el("p"),
                        ),
                        el("a", {
                            click: () => {
                                ViewUtil.go("/bmcs");
                            }
                        },
                            el("img", { src: "/images/shared/icn/icn_close.svg" })
                        ),
                    ),
                    this.mateList = el(".mate-container"),
                    el("hr"),
                    el(".detail",
                        el("h2", "1 BMCS 당 언스테이킹 가능 믹스 수량"),
                        this.mixPrice = el(".price", "..."),
                    ),
                    el(".button-wrap",
                        el("a", "언스테이킹", {
                            click: async () => {
                                if (this.selectedMateItem !== undefined) {
                                    await BiasCompoundContract.withdrawMix(this.selectedMateItem.id);
                                    ViewUtil.waitTransactionAndRefresh();
                                }
                            },
                        }),
                    ),
                ),
            ),
        );
        this.load();
    }

    private async load() {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {

            const balance = (await BiasContract.balanceOf(walletAddress)).toNumber();
            let synthesizableBalance = 0;

            const currentBlock = await Klaytn.loadBlockNumber();
            const returnMixTime = (await BiasCompoundContract.returnMixTime()).toNumber();

            const promises: Promise<void>[] = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index: number) => {
                    const bmcsId = await BiasContract.tokenOfOwnerByIndex(walletAddress, index);
                    if (bmcsId.gte(10000)) {
                        const compoundBlocks = (await BiasCompoundContract.compoundBlocks(bmcsId.toNumber())).toNumber();
                        if (compoundBlocks != 0 && currentBlock - compoundBlocks >= returnMixTime) {
                            const mateItem = new BMCSItem(bmcsId.toNumber()).appendTo(this.mateList);
                            mateItem.on("selected", () => {
                                this.selectedMateItem?.deselect();
                                this.selectedMateItem = mateItem;
                            });
                            mateItem.on("deselected", () => {
                                if (this.selectedMateItem === mateItem) {
                                    this.selectedMateItem = undefined;
                                }
                            });
                            synthesizableBalance += 1
                        }
                    }
                }

                promises.push(promise(i));
            }

            await Promise.all(promises);
            this.mateBalance.appendText(synthesizableBalance.toString());

            const mixPrice = await BiasCompoundContract.mixPrice();
            this.mixPrice.empty().appendText(CommonUtil.numberWithCommas(utils.formatEther(mixPrice)));
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}