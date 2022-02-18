"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class MyMate {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("MY_MATE_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".my-mate-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("MY_MATE_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("MY_MATE_WALLET_ADDRESS")), (0, skynode_1.el)("p", "0x5768218dae8c5658d0B1e466c07199393B089078")), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" })), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".certification-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_DESC")), (0, skynode_1.el)("button", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_BUTTON"))))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = MyMate;
//# sourceMappingURL=MyMate.js.map