"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const GalleryMateItem_1 = __importDefault(require("./GalleryMateItem"));
class GalleryMateLine extends skynode_1.ScrollItemDomNode {
    constructor(list, ids, names, selectable, rarity) {
        super((() => {
            const dom = document.createElement("div");
            dom.className = "mate-line";
            return dom;
        })());
        this.ids = ids;
        for (const id of ids) {
            this.append(new GalleryMateItem_1.default(list, id, names[id], selectable, rarity));
        }
    }
    get nodeData() { return this.ids; }
}
exports.default = GalleryMateLine;
//# sourceMappingURL=GalleryMateLine.js.map