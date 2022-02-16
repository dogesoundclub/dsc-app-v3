import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Faq implements View {
    private container: DomNode;
    private collapsible: DomNode;

    constructor() {
        Layout.current.title = "FAQ";
        Layout.current.content.append(this.container = el(".faq-view",
            el("header",
                el("h1", "FAQ 👑😛😍"),
            ),
            el("section",
                this.collapsible = el("button.collapsible", "What is Doji Sound Club?",
                    {
                        click: () => {
                        }
                    }),
                el(".content",
                    el("p", "As its name suggests, Doji Sound Club is Gaesori Club. Anyone who has an admission ticket can freely come in and talk about various thoughts.\nMate and Rocket Gicks are 10, 000 Generative Art NFTs that serve as tickets for the provincial governor's sound club."),
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
