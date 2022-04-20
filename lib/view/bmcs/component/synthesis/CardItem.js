"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class VideCardItem extends skynode_1.DomNode {
    constructor(id) {
        super(".bmcs-synthesis-card-item");
        this.id = id;
        this.append((0, skynode_1.el)("img", { src: `/images/view/bmcs/home/vibe${id}.png`, alt: "vide card" }), (0, skynode_1.el)(".checkbox-container", this.checkbox = (0, skynode_1.el)("input", { type: "checkbox", id: `card${id}` }, {
            change: () => {
                this.fireEvent(this.checkbox.domElement.checked === true ? "selected" : "deselected");
            },
        }), (0, skynode_1.el)("label", { for: `card${id}` }), (0, skynode_1.el)("p", `#${id}`)));
    }
    deselect() {
        this.checkbox.domElement.checked = false;
    }
}
exports.default = VideCardItem;
//# sourceMappingURL=CardItem.js.map