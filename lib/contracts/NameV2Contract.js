"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class NameV2Contract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.NameV2, require("./NameV2ContractABI.json"));
    }
    async getMIXForChanging() {
        return ethers_1.BigNumber.from(await this.runMethod("mixForChanging"));
    }
    async getMIXForDeleting() {
        return ethers_1.BigNumber.from(await this.runMethod("mixForDeleting"));
    }
    async set(nft, mateId, name) {
        await this.runWalletMethod("set", nft, mateId, name);
    }
    async remove(nft, mateId) {
        await this.runWalletMethod("remove", nft, mateId);
    }
    async exists(name) {
        return await this.runMethod("exists", name);
    }
    async names(nft, mateId) {
        return await this.runMethod("names", nft, mateId);
    }
    async named(nft, mateId) {
        return await this.runMethod("named", nft, mateId);
    }
}
exports.default = new NameV2Contract();
//# sourceMappingURL=NameV2Contract.js.map