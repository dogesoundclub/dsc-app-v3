import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import MateContract from "../../../contracts/MateContract";
import Wallet from "../../../klaytn/Wallet";
import Layout from "./Layout";
import ViewUtil from "../../ViewUtil";

export default class Holder implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("HOLDER_DISCORD_CERTIFICATION_BUTTON");
        Layout.current.content.append(this.container = el(".holder-view",
            el("section",
                el("img", { src: "/images/shared/img/img_mate-mock.png" }),
                el("h1", msg("HOLDER_TITLE1")),
                el(".button-container",
                    el("a", msg("YES_BUTTON"), { click: () => Wallet.connect() }),
                    el("a", msg("NO_BUTTON"), { click: () => ViewUtil.go("/") }),
                ),
            ),
        ));

        this.load();
        Wallet.on("connect", this.connectHandler);
    }

    private connectHandler = () => {
        this.load();
    };

    private async load() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const balance = await MateContract.balanceOf(owner);
            if (balance.toNumber() === 0) {
                ViewUtil.go("/buyMate");
            } else {
                ViewUtil.go("/activities");
            }
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}