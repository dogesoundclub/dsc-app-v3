import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Terms implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("TERMS_TITLE");
        Layout.current.content.append(this.container = el(".terms-view",
            el("header",
                el("h1", msg("TERMS_TITLE")),
            ),
            el("article",
                el("p", msg("TERMS_DESC")),
                el("h2", msg("TERMS_TITLE1")),
                el("p", msg("TERMS_DESC1")),
                el("h2", msg("TERMS_TITLE2")),
                el("p", msg("TERMS_DESC2")),
                el("h2", msg("TERMS_TITLE3")),
                el("p", msg("TERMS_DESC3")),
                el("h2", msg("TERMS_TITLE4")),
                el("p", msg("TERMS_DESC4")),
                el("h2", msg("TERMS_TITLE5")),
                el("p", msg("TERMS_DESC5")),
                el("h2", msg("TERMS_TITLE6")),
                el("p", msg("TERMS_DESC6")),
                el("h2", msg("TERMS_TITLE7")),
                el("p", msg("TERMS_DESC7")),
                el("h2", msg("TERMS_TITLE8")),
                el("p", msg("TERMS_DESC8")),
                el("h2", msg("TERMS_TITLE9")),
                el("p", msg("TERMS_DESC9")),
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