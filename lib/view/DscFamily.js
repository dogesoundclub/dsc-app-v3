"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class DscFamily {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("DSC_FAMILY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".dsc-family-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("DSC_FAMILY_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("DSC_FAMILY_DESC"))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE1")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE1") })), (0, skynode_1.el)(".channel-container", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE1")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE1") })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_INPUT2")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_INPUT2") }))), (0, skynode_1.el)(".introduction-container", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE3")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE2"), type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Image"), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE4"), type: "file" }))), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_INPUT2")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_INPUT2") })), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", (0, msg_js_1.default)("REGISTER_BUTTON"))))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = DscFamily;
//# sourceMappingURL=DscFamily.js.map