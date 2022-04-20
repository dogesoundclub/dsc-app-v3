"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KIP7TokenFull__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class KIP7TokenFull__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(name, symbol, decimals, initialSupply, overrides) {
        return super.deploy(name, symbol, decimals, initialSupply, overrides || {});
    }
    getDeployTransaction(name, symbol, decimals, initialSupply, overrides) {
        return super.getDeployTransaction(name, symbol, decimals, initialSupply, overrides || {});
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
exports.KIP7TokenFull__factory = KIP7TokenFull__factory;
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
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "value",
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
        inputs: [],
        name: "unpause",
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
        constant: false,
        inputs: [
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burn",
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
        constant: true,
        inputs: [],
        name: "paused",
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
        inputs: [],
        name: "renounceOwnership",
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
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "burnFrom",
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
        constant: false,
        inputs: [],
        name: "destroy",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
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
        constant: true,
        inputs: [],
        name: "isOwner",
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
                name: "to",
                type: "address",
            },
            {
                name: "value",
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
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
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
            {
                name: "initialSupply",
                type: "uint256",
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
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
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
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200362738038062003627833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b50509291906020018051906020019092919080519060200190929190505050838383620001116301ffc9a760e01b620002f060201b60201c565b62000129636578737160e01b620002f060201b60201c565b6200013a33620003f960201b60201c565b6200015263eab83e2060e01b620002f060201b60201c565b6200016a633b5a0bf860e01b620002f060201b60201c565b6200017b336200045a60201b60201c565b6000600660006101000a81548160ff021916908315150217905550620001ae634d5507ff60e01b620002f060201b60201c565b8260079080519060200190620001c6929190620008d4565b508160089080519060200190620001df929190620008d4565b5080600960006101000a81548160ff021916908360ff1602179055506200021363a219a02560e01b620002f060201b60201c565b50505033600960016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600960019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3620002e63382620004bb60201b60201c565b5050505062000983565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200038d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b620004148160046200068760201b620029171790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b620004758160056200068760201b620029171790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200055f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4b4950373a206d696e7420746f20746865207a65726f2061646472657373000081525060200191505060405180910390fd5b6200057b816003546200076b60201b620027d21790919060201c565b600381905550620005da81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200076b60201b620027d21790919060201c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b620006998282620007f460201b60201c565b156200070d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080828401905083811015620007ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200087d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620036056022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200091757805160ff191683800117855562000948565b8280016001018555821562000948579182015b82811115620009475782518255916020019190600101906200092a565b5b5090506200095791906200095b565b5090565b6200098091905b808211156200097c57600081600090555060010162000962565b5090565b90565b612c7280620009936000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c8063715018a61161010f578063983b2d56116100a2578063b88d4fde11610071578063b88d4fde146108e9578063dd62ed3e146109ee578063eb79554914610a66578063f2fde38b14610b4b576101e5565b8063983b2d56146107d9578063986502751461081d578063a9059cbb14610827578063aa271e1a1461088d576101e5565b80638456cb59116100de5780638456cb59146106e05780638da5cb5b146106ea5780638f32d59b1461073457806395d89b4114610756576101e5565b8063715018a61461063a57806379cc67901461064457806382dc1ec41461069257806383197ef0146106d6576101e5565b806340c10f191161018757806346fbf68e1161015657806346fbf68e1461055a5780635c975abb146105b65780636ef8d66d146105d857806370a08231146105e2576101e5565b806340c10f191461040a578063423f6cef1461047057806342842e0e146104be57806342966c681461052c576101e5565b806318160ddd116101c357806318160ddd1461033857806323b872dd14610356578063313ce567146103dc5780633f4ba83a14610400576101e5565b806301ffc9a7146101ea57806306fdde031461024f578063095ea7b3146102d2575b600080fd5b6102356004803603602081101561020057600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b8f565b604051808215151515815260200191505060405180910390f35b610257610bf6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561029757808201518184015260208101905061027c565b50505050905090810190601f1680156102c45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61031e600480360360408110156102e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c98565b604051808215151515815260200191505060405180910390f35b610340610d2f565b6040518082815260200191505060405180910390f35b6103c26004803603606081101561036c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d39565b604051808215151515815260200191505060405180910390f35b6103e4610dd2565b604051808260ff1660ff16815260200191505060405180910390f35b610408610de9565b005b6104566004803603604081101561042057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f49565b604051808215151515815260200191505060405180910390f35b6104bc6004803603604081101561048657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fbd565b005b61052a600480360360608110156104d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fdb565b005b6105586004803603602081101561054257600080fd5b8101908080359060200190929190505050610ffb565b005b61059c6004803603602081101561057057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611008565b604051808215151515815260200191505060405180910390f35b6105be611025565b604051808215151515815260200191505060405180910390f35b6105e061103c565b005b610624600480360360208110156105f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611047565b6040518082815260200191505060405180910390f35b610642611090565b005b6106906004803603604081101561065a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506111cb565b005b6106d4600480360360208110156106a857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d9565b005b6106de611243565b005b6106e86112dd565b005b6106f261143e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61073c611468565b604051808215151515815260200191505060405180910390f35b61075e6114c0565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561079e578082015181840152602081019050610783565b50505050905090810190601f1680156107cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61081b600480360360208110156107ef57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611562565b005b6108256115cc565b005b6108736004803603604081101561083d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506115d7565b604051808215151515815260200191505060405180910390f35b6108cf600480360360208110156108a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061166e565b604051808215151515815260200191505060405180910390f35b6109ec600480360360808110156108ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561096657600080fd5b82018360208201111561097857600080fd5b8035906020019184600183028401116401000000008311171561099a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061168b565b005b610a5060048036036040811015610a0457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116fe565b6040518082815260200191505060405180910390f35b610b4960048036036060811015610a7c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610ac357600080fd5b820183602082011115610ad557600080fd5b80359060200191846001830284011164010000000083111715610af757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611785565b005b610b8d60048036036020811015610b6157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117f6565b005b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c8e5780601f10610c6357610100808354040283529160200191610c8e565b820191906000526020600020905b815481529060010190602001808311610c7157829003601f168201915b5050505050905090565b6000600660009054906101000a900460ff1615610d1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610d27838361187c565b905092915050565b6000600354905090565b6000600660009054906101000a900460ff1615610dbe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610dc9848484611893565b90509392505050565b6000600960009054906101000a900460ff16905090565b610df233611008565b610e47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180612b156030913960400191505060405180910390fd5b600660009054906101000a900460ff16610ec9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600660006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000610f543361166e565b610fa9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180612b8d6030913960400191505060405180910390fd5b610fb38383611944565b6001905092915050565b610fd7828260405180602001604052806000815250611785565b5050565b610ff68383836040518060200160405280600081525061168b565b505050565b6110053382611b01565b50565b600061101e826005611cbe90919063ffffffff16565b9050919050565b6000600660009054906101000a900460ff16905090565b61104533611d9c565b565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b611098611468565b61110a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600960019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600960016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6111d58282611df6565b5050565b6111e233611008565b611237576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180612b156030913960400191505060405180910390fd5b61124081611e9d565b50565b61124b611468565b6112bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6112c561143e565b73ffffffffffffffffffffffffffffffffffffffff16ff5b6112e633611008565b61133b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180612b156030913960400191505060405180910390fd5b600660009054906101000a900460ff16156113be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600660006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000600960019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600960019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b606060088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115585780601f1061152d57610100808354040283529160200191611558565b820191906000526020600020905b81548152906001019060200180831161153b57829003601f168201915b5050505050905090565b61156b3361166e565b6115c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180612b8d6030913960400191505060405180910390fd5b6115c981611ef7565b50565b6115d533611f51565b565b6000600660009054906101000a900460ff161561165c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6116668383611fab565b905092915050565b6000611684826004611cbe90919063ffffffff16565b9050919050565b611696848484610d39565b506116a384848484611fc2565b6116f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612ae7602e913960400191505060405180910390fd5b50505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61178f83836115d7565b5061179c33848484611fc2565b6117f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612ae7602e913960400191505060405180910390fd5b505050565b6117fe611468565b611870576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b611879816121ab565b50565b60006118893384846122f1565b6001905092915050565b60006118a08484846124e8565b611939843361193485600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278890919063ffffffff16565b6122f1565b600190509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4b4950373a206d696e7420746f20746865207a65726f2061646472657373000081525060200191505060405180910390fd5b6119fc816003546127d290919063ffffffff16565b600381905550611a5481600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546127d290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ba4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4b4950373a206275726e2066726f6d20746865207a65726f206164647265737381525060200191505060405180910390fd5b611bb98160035461278890919063ffffffff16565b600381905550611c1181600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278890919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612c026022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611db081600561285a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e60405160405180910390a250565b611e008282611b01565b611e998233611e9484600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278890919063ffffffff16565b6122f1565b5050565b611eb181600561291790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b611f0b81600461291790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b611f6581600461285a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b6000611fb83384846124e8565b6001905092915050565b6000611fe38473ffffffffffffffffffffffffffffffffffffffff166129f2565b611ff057600190506121a3565b60008473ffffffffffffffffffffffffffffffffffffffff16639d188c22338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156120cb5780820151818401526020810190506120b0565b50505050905090810190601f1680156120f85780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561211a57600080fd5b505af115801561212e573d6000803e3d6000fd5b505050506040513d602081101561214457600080fd5b81019080805190602001909291905050509050639d188c2260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612231576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612b456026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600960019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600960016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612377576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612c246023913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156123fd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612ac66021913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561256e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612bde6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156125f4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b6b6022913960400191505060405180910390fd5b61264681600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461278890919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506126db81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546127d290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60006127ca83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612a05565b905092915050565b600080828401905083811015612850576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6128648282611cbe565b6128b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bbd6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6129218282611cbe565b15612994576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080823b905060008111915050919050565b6000838311158290612ab2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612a77578082015181840152602081019050612a5c565b50505050905090810190601f168015612aa45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e746572506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b4950373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a723058207fa008c8f6ab8f3723b367372b67a7ab39921ca2f489d20cd164fb6e1a5f1a0d0029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";
//# sourceMappingURL=KIP7TokenFull__factory.js.map