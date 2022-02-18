import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Faq implements View {
    private container: DomNode;
    private collapsible: DomNode;

    constructor() {
        Layout.current.title = msg("FAQ_TITLE");
        Layout.current.content.append(this.container = el(".faq-view",
            el("header",
                el("h1", msg("FAQ_TITLE")),
            ),
            el("section",
                this.collapsible = el("button.collapsible", msg("FAQ_TITLE1"),
                    {
                        click: () => {
                        }
                    }),
                el(".content",
                    el("p", msg("FAQ_DESC1")),
                ),
            ),
            el("section",
                this.collapsible = el("button.collapsible", "What is the difference between Mate and Rocket Gigs?",
                    {
                        click: () => {
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
