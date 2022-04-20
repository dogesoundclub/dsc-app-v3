"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauserRole__factory = void 0;
const ethers_1 = require("ethers");
class PauserRole__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PauserRole__factory = PauserRole__factory;
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isPauser",
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
        inputs: [],
        name: "renouncePauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addPauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserRemoved",
        type: "event",
    },
];
//# sourceMappingURL=PauserRole__factory.js.map