"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class CraftOfDrill {
    constructor() {
        Layout_1.default.current.title = "CraftOfDrill";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".craft-of-drill-view", (0, skynode_1.el)("aside", (0, skynode_1.el)("h1", "CYCLE OF CRAFT"), (0, skynode_1.el)(".block-container", (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Current Cycle"), (0, skynode_1.el)("p", "2,592,000 Block")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Remain Next Half-Life"), (0, skynode_1.el)("p", "7,776,000 Block"))), (0, skynode_1.el)(".claim-container", (0, skynode_1.el)(".title", "Accumulated Drill"), (0, skynode_1.el)(".account", "6 EA"), (0, skynode_1.el)("a", "모든 드릴 수령하기"))), (0, skynode_1.el)("article", (0, skynode_1.el)(".card", (0, skynode_1.el)(".info-container", (0, skynode_1.el)("img", { src: "/images/view/bmcs/cycle-of-craft/bmcs-mock.png", alt: "bmcs" }), (0, skynode_1.el)(".title", "#12 Andrew John"), (0, skynode_1.el)("a", "드릴 받기")), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)("img", { src: "/images/view/bmcs/cycle-of-craft/loading.png", alt: "loading" }), (0, skynode_1.el)(".progress", (0, skynode_1.el)(".bar")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "휙득까지 남은 Block"), (0, skynode_1.el)("p", "1,296,000")))), (0, skynode_1.el)(".card", (0, skynode_1.el)(".info-container", (0, skynode_1.el)("img", { src: "/images/view/bmcs/cycle-of-craft/bmcs-mock.png", alt: "bmcs" }), (0, skynode_1.el)(".title", "#12 Andrew John"), (0, skynode_1.el)("a", "드릴 받기")), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)("img", { src: "/images/view/bmcs/cycle-of-craft/loading.png", alt: "loading" }), (0, skynode_1.el)(".progress", (0, skynode_1.el)(".bar")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "휙득까지 남은 Block"), (0, skynode_1.el)("p", "1,296,000")))))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = CraftOfDrill;
//# sourceMappingURL=CraftOfDrill.js.map