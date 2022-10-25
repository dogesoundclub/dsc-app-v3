"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("../../../ViewUtil"));
const Layout_1 = __importDefault(require("../Layout"));
class SynthesisDone {
    constructor(params) {
        Layout_1.default.current.title = "축하합니다";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".synthesis-done-view", (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "= 축하합니다 ="), this.cong = (0, skynode_1.el)("p", "... 를\n획득하였습니다"), this.image = (0, skynode_1.el)("img", { src: "/images/view/bmcs/synthesis/progress.png" }), (0, skynode_1.el)("a.opensea", "오픈씨에서 보기", {
            click: () => open(`https://opensea.io/assets/klaytn/0xdedd727ab86bce5d416f9163b2448860bbde86d4/${params.biasId}`),
        }), (0, skynode_1.el)("a.confirm", "확인", {
            click: () => ViewUtil_1.default.go(`/bmcs/preparation`),
        }))));
        this.load(parseInt(params.biasId, 10));
    }
    async load(biasId) {
        const metadata = await (await fetch(`https://api.dogesound.club/bmcs/${biasId}`)).json();
        this.cong.empty().appendText(`${metadata.name} 를\n획득하였습니다.`);
        this.image.domElement.src = metadata.image;
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = SynthesisDone;
//# sourceMappingURL=Done.js.map