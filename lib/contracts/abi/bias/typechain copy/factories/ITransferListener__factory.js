"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITransferListener__factory = void 0;
const ethers_1 = require("ethers");
class ITransferListener__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITransferListener__factory = ITransferListener__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=ITransferListener__factory.js.map