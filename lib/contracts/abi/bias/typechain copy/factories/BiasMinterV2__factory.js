"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiasMinterV2__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class BiasMinterV2__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_bias, _feeTo, overrides) {
        return super.deploy(_bias, _feeTo, overrides || {});
    }
    getDeployTransaction(_bias, _feeTo, overrides) {
        return super.getDeployTransaction(_bias, _feeTo, overrides || {});
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
exports.BiasMinterV2__factory = BiasMinterV2__factory;
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "feeTo",
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
        name: "bias",
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
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "setAmount",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "addDiscountList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "limit",
                type: "uint256",
            },
        ],
        name: "setLimitPerTransaction",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
        constant: true,
        inputs: [],
        name: "discountPrice",
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
                name: "_price",
                type: "uint256",
            },
        ],
        name: "setDiscountPrice",
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
        constant: false,
        inputs: [
            {
                name: "_price",
                type: "uint256",
            },
        ],
        name: "setPrice",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_currentId",
                type: "uint256",
            },
        ],
        name: "setCurrentId",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "price",
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
                name: "count",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "amount",
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
        name: "limitPerTransaction",
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
                type: "address",
            },
        ],
        name: "discountList",
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
        name: "currentId",
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
        name: "step",
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
        constant: false,
        inputs: [
            {
                name: "_feeTo",
                type: "address",
            },
        ],
        name: "setFeeTo",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_step",
                type: "uint256",
            },
        ],
        name: "setStep",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                name: "_bias",
                type: "address",
            },
            {
                name: "_feeTo",
                type: "address",
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
];
const _bytecode = "0x6080604052600a600355611f846004556808f1d5c1cae3740000600555680a076407d3f744000060065561078c600855600060095534801561004057600080fd5b506040516040806116328339810180604052604081101561006057600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a381600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611468806101ca6000396000f3fe6080604052600436106101355760003560e01c80639b37aecb116100ab578063dc0b2ff41161006f578063dc0b2ff41461050c578063e00dd16114610575578063e25fe175146105a0578063f2fde38b146105cb578063f46901ed1461061c578063f8dcbddb1461066d57610135565b80639b37aecb14610422578063a035b1fe1461045d578063a0712d6814610488578063aa8c217c146104b6578063d8ca0fae146104e157610135565b8063715018a6116100fd578063715018a6146102e457806384ad8e8f146102fb5780638b78c116146103265780638da5cb5b146103615780638f32d59b146103b857806391b7f5ed146103e757610135565b8063017e7e581461013a578063054816cc14610191578063271f88b4146101e857806360a5f6f0146102235780636b107c53146102a9575b600080fd5b34801561014657600080fd5b5061014f6106a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019d57600080fd5b506101a66106ce565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101f457600080fd5b506102216004803603602081101561020b57600080fd5b81019080803590602001909291905050506106f4565b005b34801561022f57600080fd5b506102a76004803603602081101561024657600080fd5b810190808035906020019064010000000081111561026357600080fd5b82018360208201111561027557600080fd5b8035906020019184602083028401116401000000008311171561029757600080fd5b9091929391929390505050610778565b005b3480156102b557600080fd5b506102e2600480360360208110156102cc57600080fd5b8101908080359060200190929190505050610899565b005b3480156102f057600080fd5b506102f961091d565b005b34801561030757600080fd5b50610310610a56565b6040518082815260200191505060405180910390f35b34801561033257600080fd5b5061035f6004803603602081101561034957600080fd5b8101908080359060200190929190505050610a5c565b005b34801561036d57600080fd5b50610376610ae0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103c457600080fd5b506103cd610b09565b604051808215151515815260200191505060405180910390f35b3480156103f357600080fd5b506104206004803603602081101561040a57600080fd5b8101908080359060200190929190505050610b60565b005b34801561042e57600080fd5b5061045b6004803603602081101561044557600080fd5b8101908080359060200190929190505050610be4565b005b34801561046957600080fd5b50610472610c68565b6040518082815260200191505060405180910390f35b6104b46004803603602081101561049e57600080fd5b8101908080359060200190929190505050610c6e565b005b3480156104c257600080fd5b506104cb610e99565b6040518082815260200191505060405180910390f35b3480156104ed57600080fd5b506104f6610e9f565b6040518082815260200191505060405180910390f35b34801561051857600080fd5b5061055b6004803603602081101561052f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ea5565b604051808215151515815260200191505060405180910390f35b34801561058157600080fd5b5061058a610ec5565b6040518082815260200191505060405180910390f35b3480156105ac57600080fd5b506105b5610ecb565b6040518082815260200191505060405180910390f35b3480156105d757600080fd5b5061061a600480360360208110156105ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ed1565b005b34801561062857600080fd5b5061066b6004803603602081101561063f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f57565b005b34801561067957600080fd5b506106a66004803603602081101561069057600080fd5b8101908080359060200190929190505050611015565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6106fc610b09565b61076e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060048190555050565b610780610b09565b6107f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600082829050905060008090505b818110156108935760016007600086868581811061081a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600181019050610800565b50505050565b6108a1610b09565b610913576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060038190555050565b610925610b09565b610997576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60055481565b610a64610b09565b610ad6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060058190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610b68610b09565b610bda576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060068190555050565b610bec610b09565b610c5e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060088190555050565b60065481565b600160095414610c7d57600080fd5b60011515600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415610cfb57610ceb8160055461109990919063ffffffff16565b3414610cf657600080fd5b610d1c565b610d108160065461109990919063ffffffff16565b3414610d1b57600080fd5b5b610d318160045461111f90919063ffffffff16565b600481905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632e81aaea33600854846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050600060405180830381600087803b158015610dea57600080fd5b505af1158015610dfe573d6000803e3d6000fd5b50505050610e178160085461116990919063ffffffff16565b600881905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610e85573d6000803e3d6000fd5b5061271060085410610e9657600080fd5b50565b60045481565b60035481565b60076020528060005260406000206000915054906101000a900460ff1681565b60085481565b60095481565b610ed9610b09565b610f4b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610f54816111f1565b50565b610f5f610b09565b610fd1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61101d610b09565b61108f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060098190555050565b6000808314156110ac5760009050611119565b60008284029050828482816110bd57fe5b0414611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061141c6021913960400191505060405180910390fd5b809150505b92915050565b600061116183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611335565b905092915050565b6000808284019050838110156111e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611277576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806113f66026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008383111582906113e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113a757808201518184015260208101905061138c565b50505050905090810190601f1680156113d45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a7230582075fcedd0b641d5765b7bcdedfedc22c2c36f2399829b5370d1747cb8b557474d0029";
//# sourceMappingURL=BiasMinterV2__factory.js.map