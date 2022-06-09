"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const lottie_web_1 = __importDefault(require("lottie-web"));
class CraftLoading extends skynode_1.DomNode {
    constructor() {
        super(".craft-loading");
        const animation = lottie_web_1.default.loadAnimation({
            container: this.domElement,
            loop: true,
            autoplay: true,
            animationData: require("./craft-loading.json"),
        });
        animation.setSpeed(3);
        this.style({
            display: "inline-block",
            width: 100,
            height: 100,
        });
    }
}
exports.default = CraftLoading;
//# sourceMappingURL=CraftLoading.js.map