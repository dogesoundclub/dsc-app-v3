"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BiasCompoundContract_1 = __importDefault(require("../../../../contracts/BiasCompoundContract"));
const Wallet_1 = __importDefault(require("../../../../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("../../../ViewUtil"));
const Layout_1 = __importDefault(require("../Layout"));
class SynthesisProgress {
    constructor(params) {
        Layout_1.default.current.title = "합성중";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".synthesis-progress-view", (0, skynode_1.el)("section", (0, skynode_1.el)("img", { src: "/images/view/bmcs/synthesis/progress.png" }), (0, skynode_1.el)("h2", "합성중입니다"), (0, skynode_1.el)("p", "메이트와 카드를 합성중입니다\n믹스 스테이킹과 카드 사용에 있어 몇 번의\n트랜잭션이 필요할 수 있습니다.\n잠시만 기다려주세요..."))));
        this.start(parseInt(params.mateId, 10) + 10000, parseInt(params.cardId, 10));
    }
    async start(biasId, cardId) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            const results = await (await fetch("https://api.dogesound.club/sign-compound?" + new URLSearchParams({
                owner, biasId: String(biasId), cardId: String(cardId),
            }))).json();
            await BiasCompoundContract_1.default.compound(biasId, cardId, results.uri, results.signature);
            setTimeout(() => {
                ViewUtil_1.default.go(`/bmcs/done/${biasId}`);
            }, 2000);
        }
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = SynthesisProgress;
//# sourceMappingURL=Progress.js.map