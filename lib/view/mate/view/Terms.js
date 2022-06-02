"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class Terms {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("TERMS_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".terms-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("TERMS_TITLE"))), (0, skynode_1.el)("article", (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC1")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC2")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE3")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC3")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE4")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC4")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE5")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC5")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE6")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC6")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE7")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC7")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE8")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC8")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("TERMS_TITLE9")), (0, skynode_1.el)("p", (0, msg_js_1.default)("TERMS_DESC9")))));
    }
    changeParams(params, uri) {
    }
    close() {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}
exports.default = Terms;
//# sourceMappingURL=Terms.js.map