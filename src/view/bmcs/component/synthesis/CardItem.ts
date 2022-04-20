import { DomNode, el } from "@hanul/skynode";

export default class VideCardItem extends DomNode {

    private checkbox: DomNode<HTMLInputElement>;

    constructor(public id: number) {
        super(".bmcs-synthesis-card-item");
        this.append(
            el("img", { src: `/images/view/bmcs/home/vibe${id}.png`, alt: "vide card" }),
            el(".checkbox-container",
                this.checkbox = el("input", { type: "checkbox", id: `card${id}` }, {
                    change: () => {
                        this.fireEvent(this.checkbox.domElement.checked === true ? "selected" : "deselected");
                    },
                }),
                el("label", { for: `card${id}` }),
                el("p", `#${id}`),
            ),
        );
    }

    public deselect() {
        this.checkbox.domElement.checked = false;
    }
}
