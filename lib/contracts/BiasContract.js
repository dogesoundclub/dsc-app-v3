"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Bias_json_1 = __importDefault(require("./abi/bias/artifacts/contracts/Bias.sol/Bias.json"));
const Contract_1 = __importDefault(require("./Contract"));
class BiasContract extends Contract_1.default {
    constructor() {
        super("0xDeDd727ab86bce5D416F9163B2448860BbDE86d4", Bias_json_1.default.abi);
    }
    async ownerOf(mateId) {
        return await this.runMethod("ownerOf", mateId);
    }
    async balanceOf(owner) {
        return ethers_1.BigNumber.from(await this.runMethod("balanceOf", owner));
    }
    async tokenOfOwnerByIndex(owner, index) {
        return ethers_1.BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }
    async transfer(to, mateId) {
        await this.runWalletMethod("transferFrom", await Wallet_1.default.loadAddress(), to, mateId);
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
    async exists(id) {
        return await this.runMethod("exists", id);
    }
}
exports.default = new BiasContract();
//# sourceMappingURL=BiasContract.js.map