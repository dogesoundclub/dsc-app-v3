"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class CollapsibleFilter extends skynode_1.DomNode {
    constructor(title, values, onClick) {
        super(".collapsible-filter");
        this.append((0, skynode_1.el)("section", (0, skynode_1.el)(".select-container", (0, skynode_1.el)("button.collapsible", title, {
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
            },
        }), (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_arrow_down.svg" })), (this.content = (0, skynode_1.el)(".content", ...values.map((value) => (0, skynode_1.el)("button", value, { value }, onClick)), title === "Face"
            ? undefined
            : (0, skynode_1.el)("button", "None", { value: "None" }, onClick)))));
    }
}
exports.default = CollapsibleFilter;
//# sourceMappingURL=CollapsibleFilter.js.map