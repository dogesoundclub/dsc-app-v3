"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class FollowMe {
    constructor() {
        Layout_1.default.current.title = "홀더 인증";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".holder-view", (0, skynode_1.el)("section", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("h1", "LOGIN WITH METAMASK?"), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", "YES"), (0, skynode_1.el)("a", "NO")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = FollowMe;
//# sourceMappingURL=Holder.js.map