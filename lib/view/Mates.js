"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Mates {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("MATE_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".mates-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("MATE_TITLE")), (0, skynode_1.el)("img.mate", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("MATES_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("MATES_DESC1"))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("MATES_TITLE2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("MATES_DESC2"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("MATES_TITLE3")), (0, skynode_1.el)("p", (0, msg_js_1.default)("MATES_DESC3"))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", (0, msg_js_1.default)("MATES_BUTTON"), { click: () => ViewUtil_1.default.go("/gallery") })))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Mates;
//# sourceMappingURL=Mates.js.map