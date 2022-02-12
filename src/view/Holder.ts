import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class FollowMe implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "홀더 인증";
        Layout.current.content.append(this.container = el(".holder-view",
            el("section",
                el("img", { src: "/images/shared/img/mate-mock.png" }),
                el("h1", "LOGIN WITH METAMASK?"),
                el(".button-container",
                    el("a", "YES"),
                    el("a", "NO"),
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