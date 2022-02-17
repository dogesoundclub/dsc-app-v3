"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class FollowMe {
    constructor() {
        Layout_1.default.current.title = "Follow Me";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".follow-me-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "FOLLOW ME 💗😍"), (0, skynode_1.el)("h2", "If you leave a Twitter or Instagram ID for your mate, they will be registered on the list below. Change your social media profile picture to Mate, and follow the Twitter list below. They will recognize that you are part of the same community and will follow you back to help you adapt on social media.")), (0, skynode_1.el)("section", (0, skynode_1.el)("section", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("article", (0, skynode_1.el)(".content-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_twitter.svg" }), (0, skynode_1.el)("p", "@kakun1992")), (0, skynode_1.el)(".content-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_instagram.svg" }), (0, skynode_1.el)("p", "@kakun1992")))))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = FollowMe;
//# sourceMappingURL=FollowMe.js.map