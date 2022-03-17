"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1155ReceiverMock__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class ERC1155ReceiverMock__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(recRetval, recReverts, batRetval, batReverts, overrides) {
        return super.deploy(recRetval, recReverts, batRetval, batReverts, overrides || {});
    }
    getDeployTransaction(recRetval, recReverts, batRetval, batReverts, overrides) {
        return super.getDeployTransaction(recRetval, recReverts, batRetval, batReverts, overrides || {});
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
exports.ERC1155ReceiverMock__factory = ERC1155ReceiverMock__factory;
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
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "registerInterface",
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
    {
        inputs: [
            {
                name: "recRetval",
                type: "bytes4",
            },
            {
                name: "recReverts",
                type: "bool",
            },
            {
                name: "batRetval",
                type: "bytes4",
            },
            {
                name: "batReverts",
                type: "bool",
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
                indexed: false,
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                name: "from",
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
            {
                indexed: false,
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                name: "gas",
                type: "uint256",
            },
        ],
        name: "Received",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                name: "from",
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
            {
                indexed: false,
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                name: "gas",
                type: "uint256",
            },
        ],
        name: "BatchReceived",
        type: "event",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051608080610b098339810180604052608081101561003057600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291905050506100756301ffc9a760e01b6100ee60201b60201c565b83600160006101000a81548163ffffffff021916908360e01c021790555082600160046101000a81548160ff02191690831515021790555081600160056101000a81548163ffffffff021916908360e01c021790555080600160096101000a81548160ff021916908315150217905550505050506101f6565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141561018a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610904806102056000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a714610051578063214cdb80146100b6578063bc197c8114610103578063f23a6e61146102b8575b600080fd5b61009c6004803603602081101561006757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506103d7565b604051808215151515815260200191505060405180910390f35b610101600480360360208110156100cc57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061043e565b005b610264600480360360a081101561011957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561017657600080fd5b82018360208201111561018857600080fd5b803590602001918460208302840111640100000000831117156101aa57600080fd5b9091929391929390803590602001906401000000008111156101cb57600080fd5b8201836020820111156101dd57600080fd5b803590602001918460208302840111640100000000831117156101ff57600080fd5b90919293919293908035906020019064010000000081111561022057600080fd5b82018360208201111561023257600080fd5b8035906020019184600183028401116401000000008311171561025457600080fd5b909192939192939050505061044a565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b610383600480360360a08110156102ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561033f57600080fd5b82018360208201111561035157600080fd5b8035906020019184600183028401116401000000008311171561037357600080fd5b9091929391929390505050610611565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b61044781610778565b50565b6000600160099054906101000a900460ff16156104b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806108aa602f913960400191505060405180910390fd5b7f0bcad9224ba33b574e9c85298de2f44b4c80015a21aa5df474896444909863d889898989898989895a604051808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018060200185815260200184810384528b8b82818152602001925060200280828437600081840152601f19601f8201169050808301925050508481038352898982818152602001925060200280828437600081840152601f19601f8201169050808301925050508481038252878782818152602001925080828437600081840152601f19601f8201169050808301925050509c5050505050505050505050505060405180910390a1600160059054906101000a900460e01b905098975050505050505050565b6000600160049054906101000a900460ff1615610679576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806108816029913960400191505060405180910390fd5b7f20dfa9f79060c8c4d7fe892c97c71bcf6e3b63d1dcf66fea7aefc0211628cf298787878787875a604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001806020018381526020018281038252858582818152602001925080828437600081840152601f19601f8201169050808301925050509850505050505050505060405180910390a1600160009054906101000a900460e01b90509695505050505050565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610814576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff0219169083151502179055505056fe4552433131353552656365697665724d6f636b3a20726576657274696e67206f6e20726563656976654552433131353552656365697665724d6f636b3a20726576657274696e67206f6e2062617463682072656365697665a165627a7a723058201e2fc1b5ec3ae7900042c943032036bc3d0b42a46dfb168df8d751a8e68334cc0029";
//# sourceMappingURL=ERC1155ReceiverMock__factory.js.map