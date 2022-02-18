"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const GalleryMateItem_1 = __importDefault(require("../component/mate/GalleryMateItem"));
const Layout_1 = __importDefault(require("./Layout"));
class Gallery {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("GALLERY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".gallery-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("GALLERY_TITLE"))), (0, skynode_1.el)("section", (0, skynode_1.el)("aside", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("GALLERY_SEARCH_INPUT") }), (0, skynode_1.el)("button", (0, msg_js_1.default)("GALLERY_SEARCH_BUTTON"))), (0, skynode_1.el)("select", (0, skynode_1.el)("option", "FACE")), (0, skynode_1.el)("button", (0, msg_js_1.default)("GALLERY_FILTER_BUTTON"))), (0, skynode_1.el)("article", new GalleryMateItem_1.default(1, "/images/shared/img/mate-mock.png")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map