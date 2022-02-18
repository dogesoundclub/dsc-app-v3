"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const PCMenu_1 = __importDefault(require("../ui/menu/PCMenu"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Layout {
    constructor() {
        Layout.current = this;
        skynode_1.BodyNode.append(this.container = (0, skynode_1.el)(".layout", (0, skynode_1.el)("header", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/logo.svg", alt: "logo" })), new PCMenu_1.default()), (0, skynode_1.el)("main", this.content = (0, skynode_1.el)(".content")), (0, skynode_1.el)("footer", (0, skynode_1.el)(".sidebar", (0, skynode_1.el)(".content", (0, skynode_1.el)(".term"), (0, skynode_1.el)(".social", (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "images/view/layout/discord.svg" }), {
            href: "https://discord.com/invite/79CqdTdu8w",
            target: "_blank",
        }), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "images/view/layout/twitter.svg" }), {
            href: "https://twitter.com/dogesoundclub",
            target: "_blank",
        })))), (0, skynode_1.el)(".provider", (0, skynode_1.el)("img", { src: "images/view/layout/logo.svg" }), (0, skynode_1.el)("p", (0, msg_js_1.default)("FOOTER_DESC")), (0, skynode_1.el)("p", "Copyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED.")))));
    }
    set title(title) {
        document.title = `Doge Sound Club - ${title}`;
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map