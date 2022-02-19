"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class CreateGovernance {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("GOVERNANCE_TITLE1");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-governance-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("GOVERNANCE_TITLE1")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("GOVERNANCE_DESC1"))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE1")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC1") })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE2")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC2") })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Summary"), (0, skynode_1.el)("textarea.summary", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE3"), type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Text"), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE4")), (0, skynode_1.el)("textarea.text", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC3"), type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC7")), (0, skynode_1.el)("textarea")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".proposer-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("GOVERNANCE_CREATE_TITLE1")), (0, skynode_1.el)(".address", "0x5768218dae8c5658d0B1e466c07199393B089078"), (0, skynode_1.el)("p", (0, msg_js_1.default)("GOVERNANCE_CREATE_DESC8"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE2")), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE3")))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_CHECKBOX_DESC"))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", (0, msg_js_1.default)("REGISTER_BUTTON"))))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = CreateGovernance;
//# sourceMappingURL=CreateGovernance.js.map