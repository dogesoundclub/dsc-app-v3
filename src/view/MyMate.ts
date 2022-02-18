import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class MyMate implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("MY_MATE_TITLE");
        Layout.current.content.append(this.container = el(".my-mate-view",
            el("header",
                el("h1", msg("MY_MATE_TITLE")),
                el("h2", msg("MY_MATE_WALLET_ADDRESS")),
                el("p", "0x5768218dae8c5658d0B1e466c07199393B089078"),
            ),
            el("section",
                el("article",
                    el("img", { src: "/images/shared/img/mate-mock.png" }),
                ),
                el("hr"),
                el(".certification-container",
                    el("h2", msg("HOLDER_DISCORD_CERTIFICATION_TITLE")),
                    el("p", msg("HOLDER_DISCORD_CERTIFICATION_DESC")),
                    el("button", msg("HOLDER_DISCORD_CERTIFICATION_BUTTON")),
                ),
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}