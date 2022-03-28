"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICycle__factory = void 0;
const ethers_1 = require("ethers");
class ICycle__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ICycle__factory = ICycle__factory;
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "id",
                type: "uint256",
            },
        ],
        name: "claimableCount",
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
                name: "id",
                type: "uint256",
            },
            {
                name: "count",
                type: "uint256",
            },
        ],
        name: "claim",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "engine",
                type: "address",
            },
        ],
        name: "SetEngine",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "startEngineId",
                type: "uint256",
            },
        ],
        name: "SetStartEngineId",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "level",
                type: "uint256",
            },
            {
                indexed: false,
                name: "speed",
                type: "uint256",
            },
        ],
        name: "SetLevelToSpeed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "pointPerEngine",
                type: "uint256",
            },
        ],
        name: "SetPointPerEngine",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "engineLimit",
                type: "uint256",
            },
        ],
        name: "SetEngineLimit",
        type: "event",
    },
];
//# sourceMappingURL=ICycle__factory.js.map