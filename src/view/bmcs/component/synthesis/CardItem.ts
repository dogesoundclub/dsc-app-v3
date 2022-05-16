import { DomNode, el } from "@hanul/skynode";

export default class VideCardItem extends DomNode {

    private checkbox: DomNode<HTMLInputElement>;
    private label: DomNode;

    constructor(public id: number, public ea: number) {
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
                this.label = el("p", `#${id} ${ea}EA`),
            ),
        );
        this.setName(id);
    }

    private setName(id: number) {
        switch (id) {
            case 0:
                this.label.empty();
                this.label.appendText(`루비 ${this.ea}EA`);
                break;
            case 1:
                this.label.empty();
                this.label.appendText(`사파이어 ${this.ea}EA`);
                break;
            case 2:
                this.label.empty();
                this.label.appendText(`독약 ${this.ea}EA`);
                break;
            case 3:
                this.label.empty();
                this.label.appendText(`심해수 ${this.ea}EA`);
                break;
            default:
                break;
        }
    }

    public deselect() {
        this.checkbox.domElement.checked = false;
    }
}
