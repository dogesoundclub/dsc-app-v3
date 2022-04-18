import { DomNode, el } from "@hanul/skynode";

export default class MateItem extends DomNode {

    constructor(id: number) {
        super(".bmcs-synthesis-mate-item");
        this.append(
            el("img", { src: "/images/shared/img/img_mate-mock.png", alt: "mate-mock" }),
            el(".checkbox-container",
                el("input", { type: "checkbox", id: `mate${id}` }),
                el("label", { for: `mate${id}` }),
                el("p", `#${id}`),
            ),
        );
    }
}
