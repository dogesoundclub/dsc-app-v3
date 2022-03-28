"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class EmateCollapsibleItem extends skynode_1.DomNode {
    constructor(title, desc) {
        super(".emate-collapsible-item");
        this.append((0, skynode_1.el)("section", (0, skynode_1.el)("button.collapsible", title, {
            click: () => {
                if (this.content.domElement.style.display === "block") {
                    this.content.style({
                        display: "none",
                    });
                }
                else {
                    this.content.style({
                        display: "block",
                    });
                }
            }
        }), this.content = (0, skynode_1.el)(".content", (0, skynode_1.el)("p", desc))));
    }
}
exports.default = EmateCollapsibleItem;
//# sourceMappingURL=EmateCollapsibleItem.js.map