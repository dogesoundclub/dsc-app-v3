"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC1155Receiver__factory = void 0;
const ethers_1 = require("ethers");
class IERC1155Receiver__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERC1155Receiver__factory = IERC1155Receiver__factory;
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
    {
        constant: false,
        inputs: [
            {
                name: "operator",
                type: "address",
            },
            {
                name: "from",
                type: "address",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "values",
                type: "uint256[]",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "operator",
                type: "address",
            },
            {
                name: "from",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "value",
                type: "uint256",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=IERC1155Receiver__factory.js.map