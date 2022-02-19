"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class FollowMeContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.FollowMe, require("./FollowMeContractABI.json"));
    }
    async set(mates, mateId, index, link) {
        await this.runWalletMethod("set", mates, mateId, index, link);
    }
    async followMe(mates, mateId, index) {
        return await this.runMethod("followMe", mates, mateId, index);
    }
}
exports.default = new FollowMeContract();
//# sourceMappingURL=FollowMeContract.js.map