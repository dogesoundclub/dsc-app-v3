"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class Member {
    constructor() {
        Layout_1.default.current.title = "멤버 전용기능";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".member-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "멤버 전용기능")), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("p", "멤버 전용 기능은 개발중입니다.")))));
    }
    changeParams(params, uri) {
    }
    close() {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}
exports.default = Member;
//# sourceMappingURL=Member.js.map