"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP37Mintable__factory = void 0;
const ethers_1 = require("ethers");
class KIP37Mintable__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.KIP37Mintable__factory = KIP37Mintable__factory;
const _abi = [
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
        ],
        name: "balanceOf",
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
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "uri",
        outputs: [
            {
                name: "",
                type: "string",
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
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "amounts",
                type: "uint256[]",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_id",
                type: "uint256",
            },
            {
                name: "_initialSupply",
                type: "uint256",
            },
            {
                name: "_uri",
                type: "string",
            },
        ],
        name: "create",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "accounts",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                name: "",
                type: "uint256[]",
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
                name: "_id",
                type: "uint256",
            },
            {
                name: "_to",
                type: "address",
            },
            {
                name: "_value",
                type: "uint256",
            },
        ],
        name: "mint",
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
        name: "addMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceMinter",
        outputs: [],
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
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
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
        constant: true,
        inputs: [
            {
                name: "_tokenId",
                type: "uint256",
            },
        ],
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
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "creators",
        outputs: [
            {
                name: "",
                type: "address",
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
                name: "_id",
                type: "uint256",
            },
            {
                name: "_toList",
                type: "address[]",
            },
            {
                name: "_values",
                type: "uint256[]",
            },
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address",
            },
            {
                name: "_ids",
                type: "uint256[]",
            },
            {
                name: "_values",
                type: "uint256[]",
            },
        ],
        name: "mintBatch",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
            {
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
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
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "id",
                type: "uint256",
            },
            {
                name: "amount",
                type: "uint256",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
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
        name: "MinterAdded",
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
        name: "MinterRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "operator",
                type: "address",
            },
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "operator",
                type: "address",
            },
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "ids",
                type: "uint256[]",
            },
            {
                indexed: false,
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "TransferBatch",
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
            {
                indexed: true,
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "value",
                type: "string",
            },
            {
                indexed: true,
                name: "id",
                type: "uint256",
            },
        ],
        name: "URI",
        type: "event",
    },
];
//# sourceMappingURL=KIP37Mintable__factory.js.map