import { DomNode, el } from "@hanul/skynode";

export default class BMCSCollapsibleItem extends DomNode {
    private content: DomNode;
    constructor(title: string, desc: string) {
        super(".bmcs-collapsible-item");
        this.append(
            el("section",
                el("button.collapsible", title,
                    {
                        click: () => {
                            if (this.content.domElement.style.display === "block") {
                                this.content.style({
                                    display: "none",
                                })
                            } else {
                                this.content.style({
                                    display: "block",
                                })
                            }
                        }
                    }),
                this.content = el(".content",
                    el("p", desc),
                ),
            ),
        );
    }
}
