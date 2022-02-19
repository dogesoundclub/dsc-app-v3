"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class DSCGovernanceV3Contract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.GovernanceV3, require("./DSCGovernanceV3ABI.json"));
        this.VOTING = 0;
        this.CANCELED = 1;
        this.RESULT_SAME = 2;
        this.RESULT_FOR = 3;
        this.RESULT_AGAINST = 4;
        this.AVOID = 5;
    }
    async getMinProposePeriod() {
        return bignumber_1.BigNumber.from(await this.runMethod("minProposePeriod"));
    }
    async getMaxProposePeriod() {
        return bignumber_1.BigNumber.from(await this.runMethod("maxProposePeriod"));
    }
    async getProposeMateCount() {
        return bignumber_1.BigNumber.from(await this.runMethod("proposeMateCount"));
    }
    async propose(title, summary, content, note, votePeriod, mates, mateIds) {
        await this.runWalletMethodWithLargeGas("propose", title, summary, content, note, votePeriod, mates, mateIds);
    }
    async getProposalCount() {
        return await this.runMethod("proposalCount");
    }
    async getMateVoted(proposalId, mates, mateId) {
        return await this.runMethod("mateVoted", proposalId, mates, mateId);
    }
    async getProposal(proposalId) {
        const result = await this.runMethod("proposals", proposalId);
        return {
            proposer: result[0],
            title: result[1],
            summary: result[2],
            content: result[3],
            note: result[4],
            blockNumber: parseInt(result[5], 10),
            proposeMates: result[6],
            votePeriod: parseInt(result[7], 10),
            canceled: result[8],
            executed: result[9],
        };
    }
    async voteFor(proposalId, mates, mateIds) {
        await this.runWalletMethod("voteFor", proposalId, mates, mateIds);
    }
    async voteAgainst(proposalId, mates, mateIds) {
        await this.runWalletMethod("voteAgainst", proposalId, mates, mateIds);
    }
    async cancel(proposalId) {
        await this.runWalletMethod("cancel", proposalId);
    }
    async execute(proposalId) {
        await this.runWalletMethod("execute", proposalId);
    }
    async getBackMates(proposalId) {
        await this.runWalletMethodWithLargeGas("getBackMates", proposalId);
    }
    async matesBacked(proposalId) {
        return await this.runMethod("matesBacked", proposalId);
    }
    async getResult(proposalId) {
        return parseInt(await this.runMethod("result", proposalId), 10);
    }
    async getForVotes(proposalId) {
        return parseInt(await this.runMethod("forVotes", proposalId), 10);
    }
    async getAgainstVotes(proposalId) {
        return parseInt(await this.runMethod("againstVotes", proposalId), 10);
    }
}
exports.default = new DSCGovernanceV3Contract();
//# sourceMappingURL=DSCGovernanceV3Contract.js.map