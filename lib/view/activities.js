"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Activities {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("ACTIVITIES_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".activities-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("ACTIVITIES_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_DESC"))), (0, skynode_1.el)("section", (0, skynode_1.el)(".certification-container", (0, skynode_1.el)("h2", "HOLDER CERTIFICATION WITH DISCORD"), (0, skynode_1.el)("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."), (0, skynode_1.el)("button", "CERTIFICATION")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC1")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/dscFamily") })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC2")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/myMate") })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE3")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC3")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/contest") })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE4")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC4")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/governance") })))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Activities;
//# sourceMappingURL=Activities.js.map