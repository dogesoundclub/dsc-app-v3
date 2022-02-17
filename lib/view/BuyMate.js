"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class BuyMate {
    constructor() {
        Layout_1.default.current.title = "메이트 구매";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".buy-mate-view", (0, skynode_1.el)("section", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("h1", "Join the Club"), (0, skynode_1.el)("p", "This is only open to DSC members. \nTo get your Mate, check out on OpenSea."), (0, skynode_1.el)("button", "Buy a Mate on Opensea", {
            click: () => {
                window.open("https://opensea.io/collection/dogesoundclub-mates");
            }
        }))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = BuyMate;
//# sourceMappingURL=BuyMate.js.map