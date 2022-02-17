"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const GalleryMateItem_1 = __importDefault(require("../component/mate/GalleryMateItem"));
const Layout_1 = __importDefault(require("./Layout"));
class Gallery {
    constructor() {
        Layout_1.default.current.title = "갤러리";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".gallery-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "GALLERY 🖼🖌")), (0, skynode_1.el)("section", (0, skynode_1.el)("aside", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("input", { placeholder: "ID/이름 검색" }), (0, skynode_1.el)("button", "검색")), (0, skynode_1.el)("select", (0, skynode_1.el)("option", "FACE")), (0, skynode_1.el)("button", "RESET FILTERR SETTING")), (0, skynode_1.el)("article", new GalleryMateItem_1.default(1, "/images/shared/img/mate-mock.png")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map