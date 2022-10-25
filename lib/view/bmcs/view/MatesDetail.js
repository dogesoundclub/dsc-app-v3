"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const msg_js_1 = __importDefault(require("msg.js"));
const CommonUtil_1 = __importDefault(require("../../../CommonUtil"));
const BiasPoolContract_1 = __importDefault(require("../../../contracts/BiasPoolContract"));
const BiasMetadataLoader_1 = __importDefault(require("../component/BiasMetadataLoader"));
const Layout_1 = __importDefault(require("./Layout"));
class BmcsMatesDetail {
    constructor(params) {
        this.id = parseInt(params.id, 10);
        Layout_1.default.current.title = (0, msg_js_1.default)("MATES_DETAIL_TITLE").replace(/{id}/, String(this.id));
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".bmcs-mates-detail-view", (0, skynode_1.el)("header", this.nameDisplay = (0, skynode_1.el)("h1"), this.imageDisplay = (0, skynode_1.el)("img.mate"), (0, skynode_1.el)("p", "Bias에 쌓여있는 MIX :", this.mixDisplay = (0, skynode_1.el)("span")), (0, skynode_1.el)("a", "오픈씨 확인하기", { href: `https://opensea.io/assets/klaytn/0xdedd727ab86bce5d416f9163b2448860bbde86d4/${this.id}`, target: "_blank" })), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.lockable-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("LOCKABLE_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("LOCKABLE_DESC1")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".lock-container", this.lockableMateDisplay = (0, skynode_1.el)(".lock-wrap", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" })), (0, skynode_1.el)("p", (0, msg_js_1.default)("LOCKABLE_TITLE1"))), (0, skynode_1.el)(".lock-container", (0, skynode_1.el)(".lock-wrap", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" })), (0, skynode_1.el)("p", (0, msg_js_1.default)("LOCKABLE_TITLE2"))), (0, skynode_1.el)(".lock-container", (0, skynode_1.el)(".lock-wrap", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" })), (0, skynode_1.el)("p", (0, msg_js_1.default)("LOCKABLE_TITLE3"))))))));
        this.load();
    }
    async load() {
        const claimable = await BiasPoolContract_1.default.claimableOf(this.id);
        this.mixDisplay.empty().appendText(CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimable)));
        const metadata = await (await fetch(`https://api.dogesound.club/bmcs/${this.id}`)).json();
        this.imageDisplay.domElement.src = metadata.image;
        this.nameDisplay.empty().appendText(metadata.name);
        const type = BiasMetadataLoader_1.default.findType(this.id, metadata.name);
        console.log(type);
        this.lockableMateDisplay.empty();
        const mates = (0, skynode_1.el)(".mates").appendTo(this.lockableMateDisplay);
        const l = 27;
        const t = 5;
        const w = 22;
        const h = 32;
        mates.style({
            backgroundImage: type === "bmcs" ? `url(https://storage.googleapis.com/dsc-bias/character/ayias_pixel-${this.id}.png)` : `url(https://storage.googleapis.com/dsc-bias/character/${type}/ayias_pixel-${this.id}.png)`,
            width: w,
            height: h,
        });
        const frames = [
            [l, t, w, h], [l + w, t, w, h], [l + w * 2, t, w, h],
            [l, t + h, w, h], [l + w, t + h, w, h], [l + w * 2, t + h, w, h],
            [l, t + h * 2, w, h], [l + w, t + h * 2, w, h], [l + w * 2, t + h * 2, w, h],
        ];
        const sprite = new window.Sprite(mates.domElement, frames);
        sprite.play({ fps: 3 });
    }
    changeParams(params, uri) {
        Layout_1.default.current.title = (0, msg_js_1.default)("MATES_DETAIL_TITLE").replace(/{id}/, params.id);
    }
    close() {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}
exports.default = BmcsMatesDetail;
//# sourceMappingURL=MatesDetail.js.map