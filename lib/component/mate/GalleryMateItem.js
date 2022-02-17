"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("../../view/ViewUtil"));
class GalleryMateItem extends skynode_1.DomNode {
    constructor(id, source) {
        super(".gallery-mate-item");
        this.append((0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go(`${id}`), }, (0, skynode_1.el)("img", { src: source }), (0, skynode_1.el)(".id", `#${id}`)));
    }
}
exports.default = GalleryMateItem;
//# sourceMappingURL=GalleryMateItem.js.map