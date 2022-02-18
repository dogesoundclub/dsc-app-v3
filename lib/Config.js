"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TESTNET = false;
exports.default = {
    isTestnet: TESTNET,
    chainId: TESTNET ? 1001 : 8217,
    contracts: TESTNET ? {
        Attributes: "0x2666D38bcBBB50EC5717ef6B96fb55aA6a2334Cf",
        DogeSoundContest: "0x5BE7BFee608b2aa0c022D11EFDCCC0bD3477C6Cf",
        DogeSoundContestV2: "0x676289E02e8c0264417e4bEc9413d6007a686Be3",
        Vote: "0x2EA83A978747d2F732b5E4D3BeeB12a7c4eDD743",
        Image: "0x670CE33477dfaEd14e0c1b8C66e1687B10469b8E",
    } : {
        Attributes: "0xB16cA0035f398EA513c063a2F61C7631413bCD7d",
        DogeSoundContest: "0x90B1a227A69b3A907167fFE7956dc965117CBF20",
        DogeSoundContestV2: "0x43f3b52C1cb0801efA4EFa6a6b1908746E2a3210",
        Vote: "0x7f87e061068B04b62a2e119Cef3b44c2d1a177CD",
        Image: "0x059308948cf1F550E15869f9C3E02dCEb8814F0A",
    },
};
//# sourceMappingURL=Config.js.map