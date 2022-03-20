"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("../../../ViewUtil"));
const menu_json_1 = __importDefault(require("./menu.json"));
const MenuTreeBuilder_1 = __importDefault(require("./MenuTreeBuilder"));
class MobileMenu extends skynode_1.ClosableFloatingDomNode {
    constructor(position) {
        super(position, ".mobile-menu");
        menu_json_1.default.menu[1].click = () => {
            ViewUtil_1.default.go("/");
            window.scrollTo(0, document.getElementsByClassName("team")[0].getClientRects()[0].top - 100);
        };
        this.append(MenuTreeBuilder_1.default.build(menu_json_1.default.menu));
        this.onDom("click", () => this.delete());
    }
}
exports.default = MobileMenu;
//# sourceMappingURL=MobileMenu.js.map