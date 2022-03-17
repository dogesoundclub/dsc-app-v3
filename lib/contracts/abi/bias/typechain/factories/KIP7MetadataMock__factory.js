"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7MetadataMock__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class KIP7MetadataMock__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(name, symbol, decimals, overrides) {
        return super.deploy(name, symbol, decimals, overrides || {});
    }
    getDeployTransaction(name, symbol, decimals, overrides) {
        return super.getDeployTransaction(name, symbol, decimals, overrides || {});
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
exports.KIP7MetadataMock__factory = KIP7MetadataMock__factory;
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
        constant: true,
        inputs: [],
        name: "name",
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
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint8",
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
        constant: true,
        inputs: [],
        name: "symbol",
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
        inputs: [
            {
                name: "name",
                type: "string",
            },
            {
                name: "symbol",
                type: "string",
            },
            {
                name: "decimals",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
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
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200186238038062001862833981018060405260608110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b505092919060200180519060200190929190505050828282620001076301ffc9a760e01b6200019060201b60201c565b6200011f636578737160e01b6200019060201b60201c565b82600490805190602001906200013792919062000299565b5081600590805190602001906200015092919062000299565b5080600660006101000a81548160ff021916908360ff1602179055506200018463a219a02560e01b6200019060201b60201c565b50505050505062000348565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200022d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002dc57805160ff19168380011785556200030d565b828001600101855582156200030d579182015b828111156200030c578251825591602001919060010190620002ef565b5b5090506200031c919062000320565b5090565b6200034591905b808211156200034157600081600090555060010162000327565b5090565b90565b61150a80620003586000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806342842e0e1161008c578063a9059cbb11610066578063a9059cbb1461049c578063b88d4fde14610502578063dd62ed3e14610607578063eb7955491461067f576100ea565b806342842e0e1461035357806370a08231146103c157806395d89b4114610419576100ea565b806318160ddd116100c857806318160ddd1461023d57806323b872dd1461025b578063313ce567146102e1578063423f6cef14610305576100ea565b806301ffc9a7146100ef57806306fdde0314610154578063095ea7b3146101d7575b600080fd5b61013a6004803603602081101561010557600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610764565b604051808215151515815260200191505060405180910390f35b61015c6107cb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561019c578082015181840152602081019050610181565b50505050905090810190601f1680156101c95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610223600480360360408110156101ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061086d565b604051808215151515815260200191505060405180910390f35b610245610884565b6040518082815260200191505060405180910390f35b6102c76004803603606081101561027157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061088e565b604051808215151515815260200191505060405180910390f35b6102e961093f565b604051808260ff1660ff16815260200191505060405180910390f35b6103516004803603604081101561031b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610956565b005b6103bf6004803603606081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610974565b005b610403600480360360208110156103d757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610994565b6040518082815260200191505060405180910390f35b6104216109dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610461578082015181840152602081019050610446565b50505050905090810190601f16801561048e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104e8600480360360408110156104b257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a7f565b604051808215151515815260200191505060405180910390f35b6106056004803603608081101561051857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561057f57600080fd5b82018360208201111561059157600080fd5b803590602001918460018302840111640100000000831117156105b357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610a96565b005b6106696004803603604081101561061d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b09565b6040518082815260200191505060405180910390f35b6107626004803603606081101561069557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106dc57600080fd5b8201836020820111156106ee57600080fd5b8035906020019184600183028401116401000000008311171561071057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b90565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108635780601f1061083857610100808354040283529160200191610863565b820191906000526020600020905b81548152906001019060200180831161084657829003601f168201915b5050505050905090565b600061087a338484610c01565b6001905092915050565b6000600354905090565b600061089b848484610df8565b610934843361092f85600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461109890919063ffffffff16565b610c01565b600190509392505050565b6000600660009054906101000a900460ff16905090565b610970828260405180602001604052806000815250610b90565b5050565b61098f83838360405180602001604052806000815250610a96565b505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a755780601f10610a4a57610100808354040283529160200191610a75565b820191906000526020600020905b815481529060010190602001808311610a5857829003601f168201915b5050505050905090565b6000610a8c338484610df8565b6001905092915050565b610aa184848461088e565b50610aae848484846110e2565b610b03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611448602e913960400191505060405180910390fd5b50505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610b9a8383610a7f565b50610ba7338484846110e2565b610bfc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611448602e913960400191505060405180910390fd5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c87576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806114bc6023913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806114276021913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e7e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806114986024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806114766022913960400191505060405180910390fd5b610f5681600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461109890919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610feb81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546112cb90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60006110da83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611353565b905092915050565b60006111038473ffffffffffffffffffffffffffffffffffffffff16611413565b61111057600190506112c3565b60008473ffffffffffffffffffffffffffffffffffffffff16639d188c22338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111eb5780820151818401526020810190506111d0565b50505050905090810190601f1680156112185780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561123a57600080fd5b505af115801561124e573d6000803e3d6000fd5b505050506040513d602081101561126457600080fd5b81019080805190602001909291905050509050639d188c2260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600080828401905083811015611349576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290611400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113c55780820151818401526020810190506113aa565b50505050905090810190601f1680156113f25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080823b90506000811191505091905056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e7465724b4950373a207472616e7366657220746f20746865207a65726f20616464726573734b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a72305820fc5878b6b58623a732be70cb4063a54814a373059b405afd7b3b0551d56536e50029";
//# sourceMappingURL=KIP7MetadataMock__factory.js.map