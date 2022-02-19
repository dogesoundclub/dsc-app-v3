"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class DSCFamilyContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.DSCFamily, require("./DSCFamilyABI.json"));
    }
    async add(data) {
        await this.runWalletMethod("add", JSON.stringify(data));
    }
    async get(id) {
        return JSON.parse((await this.runMethod("infos", id))[1]);
    }
    async update(id, data) {
        await this.runWalletMethod("update", id, data);
    }
    async remove(id) {
        await this.runWalletMethod("remove", id);
    }
}
exports.default = new DSCFamilyContract();
//# sourceMappingURL=DSCFamilyContract.js.map