"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class DscFamily {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("DSC_FAMILY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".dsc-family-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("DSC_FAMILY_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("DSC_FAMILY_DESC")), (0, skynode_1.el)("button", (0, msg_js_1.default)("REGISTER_BUTTON"), {
            click: () => ViewUtil_1.default.go("/dscFamily/create"),
        })), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("header", (0, skynode_1.el)("button", "My Channel"), (0, skynode_1.el)("h2", "Ohlollydayofficial"), (0, skynode_1.el)("a", "Edit")), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".icon-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_kakaotalk_color.svg", alt: "kakaotalk" }), (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_twitter_color.svg", alt: "twitter" }), (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_instagram_color.svg", alt: "instagram" }), (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_discord_color.svg", alt: "discord" }), (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_telegram_color.svg", alt: "telegram" })), (0, skynode_1.el)("p", "This is DSC_JOKER. I am continuing my space trip to the meme project Mint Chocolate Club with two writers, Artist JoyJo and Sujincho. I think there will be much more people who don't know what our Mint Chocolate Squad is or where it originated yet. Through this article, I would like to introduce a little bit and share my thoughts on what we want to do in the future."))))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = DscFamily;
//# sourceMappingURL=DscFamily.js.map