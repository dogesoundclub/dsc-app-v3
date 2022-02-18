"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class DogeSoundContestContractV2 extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.DogeSoundContestV2, require("./DogeSoundContestV2ABI.json"));
        this.HOLIDAY_PERIOD = 0;
        this.REGISTER_CANDIDATE_PERIOD = 1;
        this.VOTE_PERIOD = 2;
    }
    async getCheckpoint() {
        return ethers_1.BigNumber.from(await this.runMethod("checkpoint"));
    }
    async getHolidayInterval() {
        return ethers_1.BigNumber.from(await this.runMethod("holidayInterval"));
    }
    async getRound() {
        return ethers_1.BigNumber.from(await this.runMethod("round"));
    }
    async getRoundBlock(round) {
        return ethers_1.BigNumber.from(await this.runMethod("roundBlock", round));
    }
    async getPeriod() {
        return ethers_1.BigNumber.from(await this.runMethod("period"));
    }
    async getRemains() {
        return ethers_1.BigNumber.from(await this.runMethod("remains"));
    }
    async getCandidateMateCount() {
        return ethers_1.BigNumber.from(await this.runMethod("candidateMateCount"));
    }
    async getUserVotes(round, user) {
        return ethers_1.BigNumber.from(await this.runMethod("userVotes", round, user));
    }
    async getCandidateCount(round) {
        return ethers_1.BigNumber.from(await this.runMethod("candidateCount", round));
    }
    async getCandidate(round, index) {
        return await this.runMethod("candidate", round, index);
    }
    async getCandidateRegister(round, index) {
        return await this.runMethod("candidateRegister", round, index);
    }
    async getVotes(round, candidate) {
        return ethers_1.BigNumber.from(await this.runMethod("votes", round, candidate));
    }
    async getMateVoted(round, mates, mateId) {
        return await this.runMethod("mateVoted", round, mates, mateId);
    }
    async registerCandidate(dogeSound, mates, mateIds) {
        await this.runWalletMethod("registerCandidate", dogeSound, mates, mateIds);
    }
    async vote(candidate, mates, mateIds) {
        await this.runWalletMethod("vote", candidate, mates, mateIds);
    }
    async getElected(round) {
        return ethers_1.BigNumber.from(await this.runMethod("elected", round));
    }
    async mintWinnerNFT(round) {
        await this.runWalletMethod("mintWinnerNFT", round);
    }
}
exports.default = new DogeSoundContestContractV2();
//# sourceMappingURL=DogeSoundContestV2Contract.js.map