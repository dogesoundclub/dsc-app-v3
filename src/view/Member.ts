import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Member implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "멤버 전용기능";
        Layout.current.content.append(this.container = el(".member-view",
            el("header",
                el("h1", "멤버 전용기능"),
            ),
            el("section",
                el("hr"),
                el("article",
                    el("p", "멤버 전용 기능은 개발중입니다."),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}