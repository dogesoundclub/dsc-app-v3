"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TESTNET = false;
exports.default = {
    isTestnet: TESTNET,
    chainId: TESTNET ? 1001 : 8217,
    contracts: TESTNET ? {} : {},
};
//# sourceMappingURL=Config.js.map