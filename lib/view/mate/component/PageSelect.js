"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("../../ViewUtil"));
class PageSelect extends skynode_1.DomNode {
    constructor(current) {
        super(".select");
        this.append((0, skynode_1.el)(".selected", {
            click: () => {
                if (this.ul.domElement.style.display === "block") {
                    this.ul.style({
                        display: "none",
                    });
                }
                else {
                    this.ul.style({
                        display: "block",
                    });
                }
            }
        }, this.selectedValue = (0, skynode_1.el)(".selected-value", current), (0, skynode_1.el)(".arrow")), this.ul = (0, skynode_1.el)("ul", (0, skynode_1.el)("li.option", "CH1 : 도지사운드클럽", {
            click: () => {
                this.selectedValue.empty().appendText("CH1 : 도지사운드클럽");
                this.ul.style({
                    display: "none",
                });
                ViewUtil_1.default.go("/");
            }
        }), (0, skynode_1.el)("li.option", "CH2 : 생존한 메이트들, BMCS", {
            click: () => {
                this.selectedValue.empty().appendText("CH2 : 생존한 메이트들, BMCS");
                this.ul.style({
                    display: "none",
                });
                ViewUtil_1.default.go("/bmcs");
            }
        }), (0, skynode_1.el)("li.disabled", "CH3 : 이계에서 온 친구들 eMATE", {}), (0, skynode_1.el)("li.disabled", "CH4 : 아이야스 엔진", {})));
    }
}
exports.default = PageSelect;
//# sourceMappingURL=PageSelect.js.map