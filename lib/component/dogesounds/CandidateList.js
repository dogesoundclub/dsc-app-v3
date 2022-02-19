"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const DogeSoundContestV2Contract_1 = __importDefault(require("../../contracts/DogeSoundContestV2Contract"));
const Candidate_1 = __importDefault(require("./Candidate"));
class CandidateList extends skynode_1.DomNode {
    constructor(round, votable) {
        super("ul.candidate-list");
        this.round = round;
        this.votable = votable;
        this.selected = 0;
        this.load();
    }
    async load() {
        const candidateCount = (await DogeSoundContestV2Contract_1.default.getCandidateCount(this.round)).toNumber();
        let candidates = [];
        const promises = [];
        for (let i = 0; i < candidateCount; i += 1) {
            const promise = async (index) => {
                let dogeSound = "";
                try {
                    dogeSound = await DogeSoundContestV2Contract_1.default.getCandidate(this.round, index);
                }
                catch (e) { }
                const votes = (await DogeSoundContestV2Contract_1.default.getVotes(this.round, index)).toNumber();
                candidates.push({ index, dogeSound, votes });
            };
            promises.push(promise(i));
        }
        await Promise.all(promises);
        candidates = candidates.sort((a, b) => {
            return b.votes - a.votes;
        });
        for (const [index, candidate] of candidates.entries()) {
            this.append(new Candidate_1.default(this, candidate.index, this.votable === true, candidate.dogeSound, candidate.votes, index === 0));
        }
    }
}
exports.default = CandidateList;
//# sourceMappingURL=CandidateList.js.map