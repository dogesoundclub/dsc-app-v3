"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("../../view/ViewUtil"));
class MenuTreeBuilder {
    build(menus, parent) {
        const lis = parent === undefined ? [] : [(0, skynode_1.el)("li.parent", (0, skynode_1.el)(`a${location.pathname === `/${parent.uri}` ? ".on" : ""}`, parent.name, { click: () => ViewUtil_1.default.go(`/${parent.uri}`) }))];
        for (const menuItem of menus) {
            const li = (0, skynode_1.el)("li", (0, skynode_1.el)(`a${location.pathname === `/${menuItem.uri}` ? ".on" : ""}`, menuItem.name, { click: () => ViewUtil_1.default.go(`/${menuItem.uri}`) }));
            if (menuItem.children !== undefined) {
                li.append(this.build(menuItem.children, menuItem));
            }
            lis.push(li);
        }
        return (0, skynode_1.el)("ul", ...lis);
    }
}
exports.default = new MenuTreeBuilder();
//# sourceMappingURL=MenuTreeBuilder.js.map