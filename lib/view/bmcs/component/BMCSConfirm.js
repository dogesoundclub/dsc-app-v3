"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class BMCSConfirm extends skynode_1.Popup {
    constructor(message, confirmTitle, confirm) {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".dialogue.bmcs-confirm", (0, skynode_1.el)(".close-container", { click: () => this.delete(), }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_close.svg", alt: "close" })), (0, skynode_1.el)(".content", (0, skynode_1.el)("p", message)), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button.cancel", "Cancel", {
            click: () => {
                this.delete();
            },
        }), (0, skynode_1.el)("button.ok", confirmTitle === undefined ? "OK" : confirmTitle, {
            click: () => {
                if (confirm !== undefined) {
                    confirm();
                }
                this.delete();
            },
        }))));
    }
}
exports.default = BMCSConfirm;
//# sourceMappingURL=BMCSConfirm.js.map