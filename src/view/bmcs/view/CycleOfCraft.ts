import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BiasContract from "../../../contracts/BiasContract";
import CycleContract from "../../../contracts/CycleContract";
import Klaytn from "../../../klaytn/Klaytn";
import Wallet from "../../../klaytn/Wallet";
import CycleOfCraftCard from "../component/CycleOfCraftCard";
import BmcsLayout from "./Layout";

export default class CycleOfCraft implements View {

    private container: DomNode;
    private totalClaimableCount: number = 0;
    private totalClaimableCountDisplay: DomNode;
    private list: DomNode;

    constructor() {
        BmcsLayout.current.title = "CycleOfCraft";
        BmcsLayout.current.content.append(
            this.container = el(".cycle-of-craft-view",
                el("aside",
                    el("h1", "CYCLE OF CRAFT"),
                    el(".claim-container",
                        el(".title", "Accumulated Engines"),
                        this.totalClaimableCountDisplay = el(".account", "... EA"),
                    ),
                ),
                this.list = el("article"),
            ),
        );
        this.load();
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    private async load() {

        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {

            const currentBlock = await Klaytn.loadBlockNumber();
            const balance = (await BiasContract.balanceOf(walletAddress)).toNumber();

            this.totalClaimableCount = 0;

            const promises: Promise<void>[] = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index: number) => {
                    const biasId = await BiasContract.tokenOfOwnerByIndex(walletAddress, index);
                    const startBlocks = await CycleContract.startBlocks(biasId);
                    const level = await CycleContract.levels(biasId);
                    const claimableCount = await CycleContract.claimableCount(biasId);
                    this.totalClaimableCount += claimableCount.toNumber();

                    const uri = await BiasContract.tokenURI(biasId);
                    const json = await (await fetch(uri)).json();
                    new CycleOfCraftCard(biasId.toNumber(), json, currentBlock, startBlocks.toNumber(), level.toNumber(), claimableCount.toNumber()).appendTo(this.list);
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);

            this.totalClaimableCountDisplay.empty().appendText(`${this.totalClaimableCount} EA`);
        }
    }

    public close(): void {
        this.container.delete();
    }
}