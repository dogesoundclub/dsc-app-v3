"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const DogeSoundContestV2Contract_1 = __importDefault(require("../../contracts/DogeSoundContestV2Contract"));
class RankV2 extends skynode_1.DomNode {
    constructor(round) {
        super("tr");
        this.round = round;
        this.load();
    }
    async load() {
        const elected = (await DogeSoundContestV2Contract_1.default.getElected(this.round)).toNumber();
        let dogesound = "";
        try {
            dogesound = await DogeSoundContestV2Contract_1.default.getCandidate(this.round, elected);
        }
        catch (e) { }
        const votes = (await DogeSoundContestV2Contract_1.default.getVotes(this.round, elected)).toNumber();
        this.append((0, skynode_1.el)("td", String(this.round + 1)), (0, skynode_1.el)("td", String(votes)), (0, skynode_1.el)("td", dogesound));
    }
}
exports.default = RankV2;
//# sourceMappingURL=RankV2.js.map