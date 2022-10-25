"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const menu_json_1 = __importDefault(require("./menu.json"));
const MenuTreeBuilder_1 = __importDefault(require("./MenuTreeBuilder"));
class PCMenu extends skynode_1.DomNode {
    constructor() {
        super(".pc-menu");
        this.append(MenuTreeBuilder_1.default.build(menu_json_1.default.menu));
    }
}
exports.default = PCMenu;
//# sourceMappingURL=PCMenu.js.map