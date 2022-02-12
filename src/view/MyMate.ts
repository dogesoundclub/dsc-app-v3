import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class MyMate implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "메이트 구매";
        Layout.current.content.append(this.container = el(".my-mate-view",
            el("header",
                el("h1", "MY MATE 💕💰💸"),
                el("h2", "WALLET ADDRESS"),
                el("p", "0x5768218dae8c5658d0B1e466c07199393B089078"),
            ),
            el("section",
                el("article",
                    el("img", { src: "/images/shared/img/mate-mock.png" }),
                ),
                el("hr"),
                el(".certification-container",
                    el("h2", "HOLDER CERTIFICATION WITH DISCORD"),
                    el("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."),
                    el("button", "CERTIFICATION"),
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