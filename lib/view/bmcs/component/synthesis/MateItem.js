"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class MateItem extends skynode_1.DomNode {
    constructor(id) {
        super(".bmcs-synthesis-mate-item");
        this.id = id;
        this.append((0, skynode_1.el)("img", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${id}.png`, alt: "mate-mock" }), (0, skynode_1.el)(".checkbox-container", this.checkbox = (0, skynode_1.el)("input", { type: "checkbox", id: `mate${id}` }, {
            change: () => {
                this.fireEvent(this.checkbox.domElement.checked === true ? "selected" : "deselected");
            },
        }), (0, skynode_1.el)("label", { for: `mate${id}` }), (0, skynode_1.el)("p", `#${id}`)));
    }
    deselect() {
        this.checkbox.domElement.checked = false;
    }
}
exports.default = MateItem;
//# sourceMappingURL=MateItem.js.map