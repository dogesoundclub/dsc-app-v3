import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BiasCardsContract from "../../../../contracts/BiasCardsContract";
import BiasContract from "../../../../contracts/BiasContract";
import MateContract from "../../../../contracts/MateContract";
import Wallet from "../../../../klaytn/Wallet";
import ViewUtil from "../../../ViewUtil";
import VideCardItem from "../../component/synthesis/CardItem";
import MateItem from "../../component/synthesis/MateItem";
import BmcsLayout from "../Layout";

export default class Preparation implements View {

    private container: DomNode;
    private mateList: DomNode;
    private cardList: DomNode;

    private selectedMateItem: MateItem | undefined;
    private selectedCardItem: VideCardItem | undefined;

    constructor() {
        BmcsLayout.current.title = "메이트 선택";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-preparation-view",
                el("section",
                    el("h2", "합성가능 메이트"),
                    this.mateList = el(".mate-container"),
                    el("hr"),
                    el("h2", "보유한 카드"),
                    this.cardList = el(".card-container"),
                    el(".button-wrap",
                        el("a", "합성하기", {
                            click: () => {
                                if (this.selectedMateItem !== undefined && this.selectedCardItem !== undefined) {
                                    ViewUtil.go(`/bmcs/selected-mate/${this.selectedMateItem.id}/${this.selectedCardItem.id}`);
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

            const balance = (await MateContract.balanceOf(walletAddress)).toNumber();

            const promises: Promise<void>[] = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index: number) => {
                    const mateId = await MateContract.tokenOfOwnerByIndex(walletAddress, index);
                    const exists = await BiasContract.exists(mateId.toNumber() + 10000);
                    if (exists !== true) {
                        const mateItem = new MateItem(mateId.toNumber()).appendTo(this.mateList);
                        mateItem.on("selected", () => {
                            this.selectedMateItem?.deselect();
                            this.selectedMateItem = mateItem;
                        });
                        mateItem.on("deselected", () => {
                            if (this.selectedMateItem === mateItem) {
                                this.selectedMateItem = undefined;
                            }
                        });
                    }
                }
                promises.push(promise(i));
            }

            for (let i = 0; i < 4; i += 1) {
                const promise = async (id: number) => {
                    const balance = await BiasCardsContract.balanceOf(walletAddress, id);
                    if (balance.gt(0)) {
                        for (let j = 0; j < balance.toNumber(); j += 1) {
                            const cardItem = new VideCardItem(id, j).appendTo(this.cardList);
                            cardItem.on("selected", () => {
                                this.selectedCardItem?.deselect();
                                this.selectedCardItem = cardItem;
                            });
                            cardItem.on("deselected", () => {
                                if (this.selectedCardItem === cardItem) {
                                    this.selectedCardItem = undefined;
                                }
                            });
                        }
                    }
                };
                promises.push(promise(i));
            }

            await Promise.all(promises);
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}