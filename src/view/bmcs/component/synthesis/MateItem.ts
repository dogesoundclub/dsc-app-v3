import { DomNode, el } from "@hanul/skynode";

export default class MateItem extends DomNode {

    private checkbox: DomNode<HTMLInputElement>;

    constructor(public id: number) {
        super(".bmcs-synthesis-mate-item");
        this.append(
            el("img", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${id}.png`, alt: "mate-mock" }),
            el(".checkbox-container",
                this.checkbox = el("input", { type: "checkbox", id: `mate${id}` }, {
                    change: () => {
                        this.fireEvent(this.checkbox.domElement.checked === true ? "selected" : "deselected");
                    },
                }),
                el("label", { for: `mate${id}` }),
                el("p", `#${id}`),
            ),
        );
    }

    public deselect() {
        this.checkbox.domElement.checked = false;
    }
}
