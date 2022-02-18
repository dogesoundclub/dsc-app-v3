"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const PCMenu_1 = __importDefault(require("../ui/menu/PCMenu"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Layout {
    constructor() {
        Layout.current = this;
        skynode_1.BodyNode.append(this.container = (0, skynode_1.el)(".layout", (0, skynode_1.el)("header", (0, skynode_1.el)("a", { click: () => ViewUtil_1.default.go("/") }, (0, skynode_1.el)("img", { src: "/images/logo.svg", alt: "logo" })), new PCMenu_1.default()), (0, skynode_1.el)("main", this.content = (0, skynode_1.el)(".content")), (0, skynode_1.el)("footer", (0, skynode_1.el)(".sidebar", (0, skynode_1.el)(".content", (0, skynode_1.el)(".term"), (0, skynode_1.el)(".social", (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "images/view/layout/discord.svg" })), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "images/view/layout/twitter.svg" })), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "images/view/layout/kakao.svg" })), (0, skynode_1.el)("a", (0, skynode_1.el)("img", { src: "images/view/layout/gitbook.svg" }))))), (0, skynode_1.el)(".provider", (0, skynode_1.el)("img", { src: "images/view/layout/logo.svg" }), (0, skynode_1.el)("p", "주식회사 디에스씨레이블 | 대표이사 :권태홍 | 사업자번호 :838-86-02498 | 개인정보보호책임자:권태홍\n주소: 대전광역시 유성구 대학로 82, 5층 505호 | business@ayias.io"), (0, skynode_1.el)("p", "Copyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED.")))));
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