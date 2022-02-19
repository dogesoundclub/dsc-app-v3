"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class MessageContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Message, require("./MessageContractABI.json"));
    }
    async set(mateId, message) {
        await this.runWalletMethod("set", mateId, message);
    }
    async recordCount(mateId) {
        return ethers_1.BigNumber.from(await this.runMethod("recordCount", mateId));
    }
    async record(mateId, index) {
        const result = await this.runMethod("record", mateId, index);
        return {
            owner: result[0],
            name: result[1],
            message: result[2],
            blockNumber: result[3],
        };
    }
    async remainBlocks(mateId) {
        return ethers_1.BigNumber.from(await this.runMethod("remainBlocks", mateId));
    }
    async lastMessage(mateId) {
        return await this.runMethod("lastMessage", mateId);
    }
}
exports.default = new MessageContract();
//# sourceMappingURL=MessageContract.js.map