"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class DSCFamilyContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.DSCFamily, require("./DSCFamilyABI.json"));
    }
    async add(data) {
        await this.runWalletMethod("add", JSON.stringify(data));
    }
    async count() {
        return ethers_1.BigNumber.from(await this.runMethod("count"));
    }
    async get(id) {
        const info = await this.runMethod("infos", id);
        if (info[0] === ethers_1.constants.AddressZero) {
            return undefined;
        }
        const data = JSON.parse(info[1]);
        data.owner = info[0];
        return data;
    }
    async update(id, data) {
        await this.runWalletMethod("update", id, JSON.stringify(data));
    }
    async remove(id) {
        await this.runWalletMethod("remove", id);
    }
}
exports.default = new DSCFamilyContract();
//# sourceMappingURL=DSCFamilyContract.js.map