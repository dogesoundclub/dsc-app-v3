"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class MyMate {
    constructor() {
        Layout_1.default.current.title = "메이트 구매";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".my-mate-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "MY MATE 💕💰💸"), (0, skynode_1.el)("h2", "WALLET ADDRESS"), (0, skynode_1.el)("p", "0x5768218dae8c5658d0B1e466c07199393B089078")), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" })), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".certification-container", (0, skynode_1.el)("h2", "HOLDER CERTIFICATION WITH DISCORD"), (0, skynode_1.el)("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."), (0, skynode_1.el)("button", "CERTIFICATION")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = MyMate;
//# sourceMappingURL=MyMate.js.map