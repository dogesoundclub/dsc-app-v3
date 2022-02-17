"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class FullyOn {
    constructor() {
        Layout_1.default.current.title = "Fully On";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".fully-on-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "Fully on - Chain 🚀")), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", "DSC Family"), (0, skynode_1.el)("p", "DSC actively encourages and supports holders to build and grow their own independent communities or channels. The list below is the channel list of holders registered so far."), (0, skynode_1.el)("button", "ENTER")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("p", "Level 5, Frightened Mouth, Tiger, Silver Chain, Green hair in Purple Cap, Red Cross Earring, Cigarette")), (0, skynode_1.el)("h2", "Demo"), (0, skynode_1.el)("p", "The images and characteristics brought up below are recorded in the Clayton chain.")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = FullyOn;
//# sourceMappingURL=FullyOn.js.map