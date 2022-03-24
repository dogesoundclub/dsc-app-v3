import { DomNode, el } from "@hanul/skynode";

export default class EmateollapsibleFilter extends DomNode {
    private content: DomNode;
    constructor(title: string, values: any, onClick: any) {
        super(".emate-collapsible-filter");
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
                    el("img", { src: "/images/shared/icn/icn_arrow_down_green.svg" }),
                ),
                this.content = el(".content",
                    ...values.map((value: string) => el("button", value, { value }, onClick)),
                    title === "Face" ? undefined : el("button", "None", { value: "None" }, onClick),
                ),
            ),
        );
    }
}
