"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class Activities {
    constructor() {
        Layout_1.default.current.title = "액티비티";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".activities-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "ACTIVITIES 📑🗂💼"), (0, skynode_1.el)("h2", "DSC provides club activities suitable for DSC identity. We are making fresh attempts using the issued NFT.")), (0, skynode_1.el)("section", (0, skynode_1.el)(".certification-container", (0, skynode_1.el)("h2", "HOLDER CERTIFICATION WITH DISCORD"), (0, skynode_1.el)("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."), (0, skynode_1.el)("button", "CERTIFICATION")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", "DSC Family"), (0, skynode_1.el)("p", "DSC actively encourages and supports holders to build and grow their own independent communities or channels. The list below is the channel list of holders registered so far."), (0, skynode_1.el)("button", "ENTER")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", "My MATES"), (0, skynode_1.el)("p", "Please give your mate a name your mate. If you don't have a name for your mate yet, you can only pay for the gas and name it."), (0, skynode_1.el)("button", "ENTER")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", "Dogesound Competition"), (0, skynode_1.el)("p", "Mate represents the voting rights of the governor's Soundcolub governance. You can make a proposal or vote as many times as you have a mate for or against a registered proposal."), (0, skynode_1.el)("button", "ENTER")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", "Governance"), (0, skynode_1.el)("p", "Mate represents the voting rights of the governor's Soundcolub governance. You can make a proposal or vote as many times as you have a mate for or against a registered proposal."), (0, skynode_1.el)("button", "ENTER")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Activities;
//# sourceMappingURL=Activities.js.map