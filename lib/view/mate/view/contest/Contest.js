"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const RankList_1 = __importDefault(require("../../component/dogesounds/RankList"));
const DogeSoundContestV2Contract_1 = __importDefault(require("../../../../contracts/DogeSoundContestV2Contract"));
const Layout_1 = __importDefault(require("../Layout"));
class Contest {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("CONTEST_TITLE1");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".contest-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("CONTEST_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONTEST_DESC1")), (0, skynode_1.el)(".warning", (0, msg_js_1.default)("CONTEST_DESC2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONTEST_DESC3")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", (0, msg_js_1.default)("CONTEST_BUTTON"), {
            href: "https://opensea.io/collection/dsc-dogesound-winners",
            target: "_blank",
        }))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("h2", (0, msg_js_1.default)("CONTEST_TITLE2")), (0, skynode_1.el)("p", "개소리 투표는 이메이트 클레이튼 체인 마이그레이션 이후 다시 진행됩니다."), new RankList_1.default())));
        this.load();
    }
    async load() {
        const currentRound = (await DogeSoundContestV2Contract_1.default.getRound()).toNumber();
        const period = (await DogeSoundContestV2Contract_1.default.getPeriod()).toNumber();
        let remains = (await DogeSoundContestV2Contract_1.default.getRemains()).toNumber();
        this.form?.delete();
    }
    changeParams(params, uri) { }
    close() {
        if (this.remainsInterval !== undefined) {
            clearInterval(this.remainsInterval);
        }
        this.container.delete();
    }
}
exports.default = Contest;
//# sourceMappingURL=Contest.js.map