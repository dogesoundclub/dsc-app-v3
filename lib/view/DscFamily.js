"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class DscFamily {
    constructor() {
        Layout_1.default.current.title = "DSC Family";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".dsc-family-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "DSC Family 👩‍❤️‍💋‍"), (0, skynode_1.el)("h2", "Dsc, holder, or channel to build and grow their own independent community is strongly recommended and support to.Channel list of the registered holder, so far is the list below.")), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "The channel name"), (0, skynode_1.el)("input", { placeholder: "name" })), (0, skynode_1.el)(".channel-container", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Channel"), (0, skynode_1.el)("input", { placeholder: "Channel" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Channel Link"), (0, skynode_1.el)("input", { placeholder: "Link" }))), (0, skynode_1.el)(".introduction-container", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Channel introduction"), (0, skynode_1.el)("input", { placeholder: "Channel", type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Image"), (0, skynode_1.el)("input", { placeholder: "Link", type: "file" }))), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Channel Link"), (0, skynode_1.el)("input", { placeholder: "Link" })), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "REGISTER")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = DscFamily;
//# sourceMappingURL=DscFamily.js.map