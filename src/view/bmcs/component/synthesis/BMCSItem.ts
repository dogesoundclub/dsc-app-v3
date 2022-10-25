import { DomNode, el } from "@hanul/skynode";

export default class BMCSItem extends DomNode {

    private image: DomNode<HTMLImageElement>;
    private checkbox: DomNode<HTMLInputElement>;

    constructor(public id: number) {
        super(".bmcs-synthesis-mate-item");
        this.append(
            this.image = el("img", { alt: "mate-mock" }),
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
        this.load();
    }

    private async load() {
        const metadata = await (
            await fetch(`https://api.dogesound.club/bmcs/${this.id}`)
        ).json();
        this.image.domElement.src = metadata.image;
    }

    public deselect() {
        this.checkbox.domElement.checked = false;
    }
}
