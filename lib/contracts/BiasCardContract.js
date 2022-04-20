"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BiasCards_json_1 = __importDefault(require("./abi/bias-card/artifacts/contracts/BiasCards.sol/BiasCards.json"));
const Contract_1 = __importDefault(require("./Contract"));
class BiasCardsContract extends Contract_1.default {
    constructor() {
        super("0x542e98A99B5A0aAa0D4Ddfd9Ae582a1b05008Ac8", BiasCards_json_1.default.abi);
    }
}
exports.default = new BiasCardsContract();
//# sourceMappingURL=BiasCardContract.js.map