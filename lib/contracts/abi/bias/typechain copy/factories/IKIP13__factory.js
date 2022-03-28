"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IKIP13__factory = void 0;
const ethers_1 = require("ethers");
class IKIP13__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IKIP13__factory = IKIP13__factory;
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=IKIP13__factory.js.map