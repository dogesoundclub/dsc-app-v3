"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class Faq {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("FAQ_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".faq-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("FAQ_TITLE"))), (0, skynode_1.el)("section", this.collapsible = (0, skynode_1.el)("button.collapsible", (0, msg_js_1.default)("FAQ_TITLE1"), {
            click: () => {
            }
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)("p", (0, msg_js_1.default)("FAQ_DESC1")))), (0, skynode_1.el)("section", this.collapsible = (0, skynode_1.el)("button.collapsible", "What is the difference between Mate and Rocket Gigs?", {
            click: () => {
            }
        }))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Faq;
//# sourceMappingURL=Faq.js.map