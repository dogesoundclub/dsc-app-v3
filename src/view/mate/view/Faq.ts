import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import CollapsibleItem from "../component//CollapsibleItem";
import Layout from "./Layout";

export default class Faq implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("FAQ_TITLE");
        Layout.current.content.append(this.container = el(".faq-view",
            el("header",
                el("h1", msg("FAQ_TITLE")),
            ),
            new CollapsibleItem(msg("FAQ_TITLE1"), msg("FAQ_DESC1")),
            new CollapsibleItem(msg("FAQ_TITLE2"), msg("FAQ_DESC2")),
            new CollapsibleItem(msg("FAQ_TITLE3"), msg("FAQ_DESC3")),
            new CollapsibleItem(msg("FAQ_TITLE4"), msg("FAQ_DESC4")),
            new CollapsibleItem(msg("FAQ_TITLE5"), msg("FAQ_DESC5")),
            new CollapsibleItem(msg("FAQ_TITLE6"), msg("FAQ_DESC6")),
            new CollapsibleItem(msg("FAQ_TITLE7"), msg("FAQ_DESC7")),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}
