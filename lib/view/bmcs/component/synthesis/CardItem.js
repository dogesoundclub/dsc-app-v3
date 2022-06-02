"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class VideCardItem extends skynode_1.DomNode {
    constructor(id, ea) {
        super(".bmcs-synthesis-card-item");
        this.id = id;
        this.ea = ea;
        this.append((0, skynode_1.el)("img", { src: `/images/view/bmcs/home/vibe${id}.png`, alt: "vide card" }), (0, skynode_1.el)(".checkbox-container", this.checkbox = (0, skynode_1.el)("input", { type: "checkbox", id: `card${id}` }, {
            change: () => {
                this.fireEvent(this.checkbox.domElement.checked === true ? "selected" : "deselected");
            },
        }), (0, skynode_1.el)("label", { for: `card${id}` }), this.label = (0, skynode_1.el)("p", `#${id} ${ea}EA`)));
        this.setName(id);
    }
    setName(id) {
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
    deselect() {
        this.checkbox.domElement.checked = false;
    }
}
exports.default = VideCardItem;
//# sourceMappingURL=CardItem.js.map