import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "../Layout";

export default class BuyMate implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("JOIN_CLUB_TITLE");
        Layout.current.content.append(this.container = el(".buy-mate-view",
            el("section",
                el("img", { src: "/images/shared/img/img_dog.png" }),
                el("h1", msg("JOIN_CLUB_TITLE")),
                el("p", msg("JOIN_CLUB_DESC")),
                el("button", msg("JOIN_CLUB_BUTTON"), {
                    click: () => {
                        window.open("https://opensea.io/collection/dogesoundclub-mates")
                    }
                }),
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}