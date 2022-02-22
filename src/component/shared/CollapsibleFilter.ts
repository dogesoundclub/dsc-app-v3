import { DomNode, el } from "@hanul/skynode";

export default class CollapsibleFilter extends DomNode {
    private content: DomNode;
    constructor(title: string, values: any, onClick: any) {
        super(".collapsible-filter");
        this.append(
            el("section",
                el(".select-container",
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
                    el("img", { src: "/images/shared/icn/icn_arrow_down.svg" }),
                ),
                this.content = el(".content",
                    ...values.map((value: any) => el("option", value, onClick)),
                    title === "Face" ? undefined : el("option", "None", { value: "None" }, onClick),
                ),
            ),
        );
    }
}
