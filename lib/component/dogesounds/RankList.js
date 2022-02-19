"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const DogeSoundContestV2Contract_1 = __importDefault(require("../../contracts/DogeSoundContestV2Contract"));
const RankV1_1 = __importDefault(require("./RankV1"));
const RankV2_1 = __importDefault(require("./RankV2"));
class RankList extends skynode_1.DomNode {
    constructor() {
        super(".dogesounds-rank-list");
        this.append((0, skynode_1.el)("table", (0, skynode_1.el)("thead", (0, skynode_1.el)("tr", (0, skynode_1.el)("th", "#", { width: "10%" }), (0, skynode_1.el)("th", "VOTES", { width: "15%" }), (0, skynode_1.el)("th", "DOGESOUND", { width: "75%" }))), this.rankList = (0, skynode_1.el)("tbody")));
        this.loadMessages();
    }
    async loadMessages() {
        const currentRound = (await DogeSoundContestV2Contract_1.default.getRound()).toNumber();
        skyutil_1.default.repeat(currentRound > 100 ? 100 : currentRound, (index) => {
            const round = currentRound - index - 1;
            if (round < 2) {
                this.rankList.append(new RankV1_1.default(round));
            }
            else {
                this.rankList.append(new RankV2_1.default(round));
            }
        });
    }
}
exports.default = RankList;
//# sourceMappingURL=RankList.js.map