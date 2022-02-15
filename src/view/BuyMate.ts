import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class BuyMate implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "메이트 구매";
        Layout.current.content.append(this.container = el(".buy-mate-view",
            el("section",
                el("img", { src: "/images/shared/img/mate-mock.png" }),
                el("h1", "Join the Club"),
                el("p", "This is only open to DSC members. \nTo get your Mate, check out on OpenSea."),
                el("button", "Buy a Mate on Opensea", {
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
        this.container.delete();
    }
}