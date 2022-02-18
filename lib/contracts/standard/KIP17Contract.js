"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const KIP17Full_json_1 = __importDefault(require("../abi/klubs/artifacts/contracts/klaytn-contracts/token/KIP17/KIP17Full.sol/KIP17Full.json"));
const Contract_1 = __importDefault(require("../Contract"));
class KIP17Contract extends Contract_1.default {
    constructor(address, abi) {
        super(address, abi === undefined ? KIP17Full_json_1.default.abi : abi);
    }
    async ownerOf(mateId) {
        return await this.runMethod("ownerOf", mateId);
    }
    async balanceOf(owner) {
        return ethers_1.BigNumber.from(await this.runMethod("balanceOf", owner));
    }
    async transfer(to, id) {
        await this.runWalletMethod("transferFrom", await Wallet_1.default.loadAddress(), to, id);
    }
    async isApprovedForAll(owner, operator) {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }
    async setApprovalForAll(operator, approved) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }
    async tokenURI(id) {
        return await this.runMethod("tokenURI", id);
    }
    async tokenOfOwnerByIndex(owner, index) {
        return ethers_1.BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }
}
exports.default = KIP17Contract;
//# sourceMappingURL=KIP17Contract.js.map