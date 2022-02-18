"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class FollowMe {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_BUTTON");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".holder-view", (0, skynode_1.el)("section", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("h1", (0, msg_js_1.default)("HOLDER_TITLE1")), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", (0, msg_js_1.default)("YES_BUTTON")), (0, skynode_1.el)("a", (0, msg_js_1.default)("NO_BUTTON"))))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = FollowMe;
//# sourceMappingURL=Holder.js.map