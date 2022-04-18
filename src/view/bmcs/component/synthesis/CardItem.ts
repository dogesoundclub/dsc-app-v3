import { DomNode, el } from "@hanul/skynode";

export default class VideCardItem extends DomNode {

    constructor(id: number) {
        super(".bmcs-synthesis-card-item");
        this.append(
            el("img", { src: `/images/view/bmcs/home/vibe${id}.png`, alt: "vide card" }),
            el(".checkbox-container",
                el("input", { type: "checkbox", id: `card${id}` }),
                el("label", { for: `card${id}` }),
                el("p", `#${id}`),
            ),
        );
    }
}
