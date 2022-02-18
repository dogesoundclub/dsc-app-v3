import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import MateList from "../component/mate/MateList";
import MateContract from "../contracts/MateContract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";

export default class MyMate implements View {

    private container: DomNode;
    private wallet: DomNode;
    private mateList: MateList;

    constructor() {
        Layout.current.title = msg("MY_MATE_TITLE");
        Layout.current.content.append(this.container = el(".my-mate-view",
            el("header",
                el("h1", msg("MY_MATE_TITLE")),
                el("h2", msg("MY_MATE_WALLET_ADDRESS")),
                this.wallet = el("p"),
            ),
            el("section",
                this.mateList = new MateList(false, false),
                el("hr"),
                el(".certification-container",
                    el("h2", msg("HOLDER_DISCORD_CERTIFICATION_TITLE")),
                    el("p", msg("HOLDER_DISCORD_CERTIFICATION_DESC")),
                    el("button", msg("HOLDER_DISCORD_CERTIFICATION_BUTTON")),
                ),
            ),
        ));
        this.windowResizeHandler();
        this.load();
        window.addEventListener("resize", this.windowResizeHandler);
    }

    private async load() {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {

            this.wallet.append(el("a", walletAddress,
                { href: `https://opensea.io/${walletAddress}`, target: "_blank" },
            ));

            const balance = (await MateContract.balanceOf(walletAddress)).toNumber();

            const mates: number[] = [];
            const promises: Promise<void>[] = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index: number) => {
                    const mateId = await MateContract.tokenOfOwnerByIndex(walletAddress, index);
                    mates.push(mateId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);

            this.mateList.load(mates);
        }
    }

    private windowResizeHandler = () => {
        this.mateList.style({ height: window.innerHeight - 213 });
    };

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}