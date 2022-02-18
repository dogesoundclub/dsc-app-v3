"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class DogeSoundContestContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.DogeSoundContest, require("./DogeSoundContestABI.json"));
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
    async registerCandidate(dogeSound, count) {
        await this.runWalletMethod("registerCandidate", dogeSound, count);
    }
    async vote(candidate, count) {
        await this.runWalletMethod("vote", candidate, count);
    }
    async getElected(round) {
        return ethers_1.BigNumber.from(await this.runMethod("elected", round));
    }
}
exports.default = new DogeSoundContestContract();
//# sourceMappingURL=DogeSoundContestContract.js.map