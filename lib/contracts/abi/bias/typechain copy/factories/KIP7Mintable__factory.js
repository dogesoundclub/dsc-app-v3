"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7Mintable__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class KIP7Mintable__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.KIP7Mintable__factory = KIP7Mintable__factory;
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
                name: "spender",
                type: "address",
            },
            {
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
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
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
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
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "mint",
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
        constant: false,
        inputs: [
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
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
                name: "recipient",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
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
        constant: false,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "recipient",
                type: "address",
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
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
            {
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "recipient",
                type: "address",
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
        name: "safeTransfer",
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
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506200002a6301ffc9a760e01b6200007160201b60201c565b62000042636578737160e01b6200007160201b60201c565b62000053336200017a60201b60201c565b6200006b63eab83e2060e01b6200007160201b60201c565b6200039f565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200010e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b62000195816004620001db60201b620016fe1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b620001ed8282620002bf60201b60201c565b1562000261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000348576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062001daf6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611a0080620003af6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063aa271e1a11610066578063aa271e1a14610497578063b88d4fde146104f3578063dd62ed3e146105f8578063eb79554914610670576100f5565b806370a082311461038b578063983b2d56146103e35780639865027514610427578063a9059cbb14610431576100f5565b806323b872dd116100d357806323b872dd146101e357806340c10f1914610269578063423f6cef146102cf57806342842e0e1461031d576100f5565b806301ffc9a7146100fa578063095ea7b31461015f57806318160ddd146101c5575b600080fd5b6101456004803603602081101561011057600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610755565b604051808215151515815260200191505060405180910390f35b6101ab6004803603604081101561017557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107bc565b604051808215151515815260200191505060405180910390f35b6101cd6107d3565b6040518082815260200191505060405180910390f35b61024f600480360360608110156101f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107dd565b604051808215151515815260200191505060405180910390f35b6102b56004803603604081101561027f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061088e565b604051808215151515815260200191505060405180910390f35b61031b600480360360408110156102e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610902565b005b6103896004803603606081101561033357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610920565b005b6103cd600480360360208110156103a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610940565b6040518082815260200191505060405180910390f35b610425600480360360208110156103f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610989565b005b61042f6109f3565b005b61047d6004803603604081101561044757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109fe565b604051808215151515815260200191505060405180910390f35b6104d9600480360360208110156104ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a15565b604051808215151515815260200191505060405180910390f35b6105f66004803603608081101561050957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561057057600080fd5b82018360208201111561058257600080fd5b803590602001918460018302840111640100000000831117156105a457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610a32565b005b61065a6004803603604081101561060e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aa5565b6040518082815260200191505060405180910390f35b6107536004803603606081101561068657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106cd57600080fd5b8201836020820111156106df57600080fd5b8035906020019184600183028401116401000000008311171561070157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b2c565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b60006107c9338484610b9d565b6001905092915050565b6000600354905090565b60006107ea848484610d94565b610883843361087e85600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461103490919063ffffffff16565b610b9d565b600190509392505050565b600061089933610a15565b6108ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061191b6030913960400191505060405180910390fd5b6108f8838361107e565b6001905092915050565b61091c828260405180602001604052806000815250610b2c565b5050565b61093b83838360405180602001604052806000815250610a32565b505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61099233610a15565b6109e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061191b6030913960400191505060405180910390fd5b6109f08161123b565b50565b6109fc33611295565b565b6000610a0b338484610d94565b6001905092915050565b6000610a2b8260046112ef90919063ffffffff16565b9050919050565b610a3d8484846107dd565b50610a4a848484846113cd565b610a9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806118cb602e913960400191505060405180910390fd5b50505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b3683836109fe565b50610b43338484846113cd565b610b98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806118cb602e913960400191505060405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c23576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806119b26023913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ca9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806118aa6021913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061196c6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ea0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806118f96022913960400191505060405180910390fd5b610ef281600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461103490919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f8781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115b690919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600061107683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061163e565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611121576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4b4950373a206d696e7420746f20746865207a65726f2061646472657373000081525060200191505060405180910390fd5b611136816003546115b690919063ffffffff16565b60038190555061118e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546115b690919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b61124f8160046116fe90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6112a98160046117d990919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611376576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806119906022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006113ee8473ffffffffffffffffffffffffffffffffffffffff16611896565b6113fb57600190506115ae565b60008473ffffffffffffffffffffffffffffffffffffffff16639d188c22338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156114d65780820151818401526020810190506114bb565b50505050905090810190601f1680156115035780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561152557600080fd5b505af1158015611539573d6000803e3d6000fd5b505050506040513d602081101561154f57600080fd5b81019080805190602001909291905050509050639d188c2260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600080828401905083811015611634576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008383111582906116eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116b0578082015181840152602081019050611695565b50505050905090810190601f1680156116dd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b61170882826112ef565b1561177b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6117e382826112ef565b611838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061194b6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080823b90506000811191505091905056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a7230582025b8cc02b046c0315ddf69cc2ea4cfe5d48a2298426b7fc2d82068e586bd0d620029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
//# sourceMappingURL=KIP7Mintable__factory.js.map