"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEngine__factory = void 0;
const ethers_1 = require("ethers");
class IEngine__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IEngine__factory = IEngine__factory;
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=IEngine__factory.js.map