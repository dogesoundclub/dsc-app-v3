"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class BMCSItem extends skynode_1.DomNode {
    constructor(id) {
        super(".bmcs-synthesis-mate-item");
        this.id = id;
        this.append(this.image = (0, skynode_1.el)("img", { alt: "mate-mock" }), (0, skynode_1.el)(".checkbox-container", this.checkbox = (0, skynode_1.el)("input", { type: "checkbox", id: `mate${id}` }, {
            change: () => {
                this.fireEvent(this.checkbox.domElement.checked === true ? "selected" : "deselected");
            },
        }), (0, skynode_1.el)("label", { for: `mate${id}` }), (0, skynode_1.el)("p", `#${id}`)));
        this.load();
    }
    async load() {
        const metadata = await (await fetch(`https://api.dogesound.club/bmcs/${this.id}`)).json();
        this.image.domElement.src = metadata.image;
    }
    deselect() {
        this.checkbox.domElement.checked = false;
    }
}
exports.default = BMCSItem;
//# sourceMappingURL=BMCSItem.js.map