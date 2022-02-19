"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const KIP7Contract_1 = __importDefault(require("./standard/KIP7Contract"));
class MixContract extends KIP7Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Mix, require("./MixContractABI.json"));
    }
}
exports.default = new MixContract();
//# sourceMappingURL=MixContract.js.map