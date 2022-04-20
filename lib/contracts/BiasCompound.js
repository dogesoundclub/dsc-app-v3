"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BiasCompound_json_1 = __importDefault(require("./abi/bias/artifacts/contracts/BiasCompound.sol/BiasCompound.json"));
const Contract_1 = __importDefault(require("./Contract"));
class BiasContract extends Contract_1.default {
    constructor() {
        super("0xfC330bf846bBb5e3BB9Dbb01354bB735c12775Ad", BiasCompound_json_1.default.abi);
    }
}
exports.default = new BiasContract();
//# sourceMappingURL=BiasCompound.js.map