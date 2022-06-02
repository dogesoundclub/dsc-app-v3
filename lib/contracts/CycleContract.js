"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Cycle_json_1 = __importDefault(require("./abi/bias/artifacts/contracts/Cycle.sol/Cycle.json"));
const Contract_1 = __importDefault(require("./Contract"));
class CycleContract extends Contract_1.default {
    constructor() {
        super("0xd1e7e2fF9570A7CEAfF4FD3907c561576816cD28", Cycle_json_1.default.abi);
    }
    async startBlocks(id) {
        return ethers_1.BigNumber.from(await this.runMethod("startBlocks", id));
    }
    async levels(id) {
        return ethers_1.BigNumber.from(await this.runMethod("levels", id));
    }
    async claimableCount(id) {
        return ethers_1.BigNumber.from(await this.runMethod("claimableCount", id));
    }
    async claim(id, count) {
        await this.runWalletMethod("claim", id, count);
    }
    async setLevel(id, startBlock, level, signature) {
        await this.runWalletMethod("setLevel", id, startBlock, level, signature);
    }
}
exports.default = new CycleContract();
//# sourceMappingURL=CycleContract.js.map