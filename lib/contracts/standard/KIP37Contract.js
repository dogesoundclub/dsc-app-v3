"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const KIP37_json_1 = __importDefault(require("../abi/klubs/artifacts/contracts/klaytn-contracts/token/KIP37/KIP37.sol/KIP37.json"));
const Contract_1 = __importDefault(require("../Contract"));
class KIP37Contract extends Contract_1.default {
    constructor(address, abi) {
        super(address, abi === undefined ? KIP37_json_1.default.abi : abi);
    }
    async balanceOf(owner, id) {
        return ethers_1.BigNumber.from(await this.runMethod("balanceOf", owner, id));
    }
    async isApprovedForAll(owner, operator) {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }
    async setApprovalForAll(operator, approved) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }
}
exports.default = KIP37Contract;
//# sourceMappingURL=KIP37Contract.js.map