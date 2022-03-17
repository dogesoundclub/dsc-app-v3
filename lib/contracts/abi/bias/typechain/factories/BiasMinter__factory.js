"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiasMinter__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class BiasMinter__factory extends contracts_1.ContractFactory {
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
exports.BiasMinter__factory = BiasMinter__factory;
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "presalePrice",
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
        constant: true,
        inputs: [],
        name: "ticketPrice",
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
        name: "presaleLimitPerTransaction",
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
        name: "public1Price",
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
        name: "public2Price",
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
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "ticketWhitelist",
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
        name: "public1Count",
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
        name: "public2Count",
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
        name: "presaleCount",
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
        name: "ticketCount",
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
                name: "whitelist",
                type: "address[]",
            },
        ],
        name: "addTicketWhitelist",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "presaleWhitelist",
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
                name: "whitelist",
                type: "address[]",
            },
        ],
        name: "addPresaleWhitelist",
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
        constant: true,
        inputs: [],
        name: "publicLimitPerTransaction",
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
const _bytecode = "0x60806040526005600355600a600455610fa060055561014a600655610a0a60075561015e600855610a2860095561017c600a5560e6600b5561014a600c55610258600f55600060105534801561005457600080fd5b5060405160408061186d8339810180604052604081101561007457600080fd5b810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a381600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061168f806101de6000396000f3fe6080604052600436106101805760003560e01c8063af799b07116100d1578063e25fe1751161008a578063f2fde38b11610064578063f2fde38b146106f0578063f46901ed14610741578063f4b843a214610792578063f8dcbddb146107bd57610180565b8063e25fe175146105d6578063eb8835ab14610601578063ef08082f1461066a57610180565b8063af799b0714610479578063c4e80008146104a4578063cde27a35146104cf578063cfbd900f146104fa578063de0143f914610525578063e00dd161146105ab57610180565b8063715018a61161013e5780639177408d116101185780639177408d1461037c5780639b37aecb146103a7578063a0712d68146103e2578063abdfb3dd1461041057610180565b8063715018a6146102df5780638da5cb5b146102f65780638f32d59b1461034d57610180565b80620e7fa814610185578063017e7e58146101b0578063054816cc146102075780631209b1f61461025e578063383f1ea91461028957806351cdb73c146102b4575b600080fd5b34801561019157600080fd5b5061019a6107f8565b6040518082815260200191505060405180910390f35b3480156101bc57600080fd5b506101c56107fe565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021357600080fd5b5061021c610824565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026a57600080fd5b5061027361084a565b6040518082815260200191505060405180910390f35b34801561029557600080fd5b5061029e610850565b6040518082815260200191505060405180910390f35b3480156102c057600080fd5b506102c9610856565b6040518082815260200191505060405180910390f35b3480156102eb57600080fd5b506102f461085c565b005b34801561030257600080fd5b5061030b610995565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561035957600080fd5b506103626109be565b604051808215151515815260200191505060405180910390f35b34801561038857600080fd5b50610391610a15565b6040518082815260200191505060405180910390f35b3480156103b357600080fd5b506103e0600480360360208110156103ca57600080fd5b8101908080359060200190929190505050610a1b565b005b61040e600480360360208110156103f857600080fd5b8101908080359060200190929190505050610a9f565b005b34801561041c57600080fd5b5061045f6004803603602081101561043357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e4c565b604051808215151515815260200191505060405180910390f35b34801561048557600080fd5b5061048e610e6c565b6040518082815260200191505060405180910390f35b3480156104b057600080fd5b506104b9610e72565b6040518082815260200191505060405180910390f35b3480156104db57600080fd5b506104e4610e78565b6040518082815260200191505060405180910390f35b34801561050657600080fd5b5061050f610e7e565b6040518082815260200191505060405180910390f35b34801561053157600080fd5b506105a96004803603602081101561054857600080fd5b810190808035906020019064010000000081111561056557600080fd5b82018360208201111561057757600080fd5b8035906020019184602083028401116401000000008311171561059957600080fd5b9091929391929390505050610e84565b005b3480156105b757600080fd5b506105c0610fa5565b6040518082815260200191505060405180910390f35b3480156105e257600080fd5b506105eb610fab565b6040518082815260200191505060405180910390f35b34801561060d57600080fd5b506106506004803603602081101561062457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fb1565b604051808215151515815260200191505060405180910390f35b34801561067657600080fd5b506106ee6004803603602081101561068d57600080fd5b81019080803590602001906401000000008111156106aa57600080fd5b8201836020820111156106bc57600080fd5b803590602001918460208302840111640100000000831117156106de57600080fd5b9091929391929390505050610fd1565b005b3480156106fc57600080fd5b5061073f6004803603602081101561071357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110f2565b005b34801561074d57600080fd5b506107906004803603602081101561076457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611178565b005b34801561079e57600080fd5b506107a7611236565b6040518082815260200191505060405180910390f35b3480156107c957600080fd5b506107f6600480360360208110156107e057600080fd5b810190808035906020019092919050505061123c565b005b60065481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c5481565b60035481565b60085481565b6108646109be565b6108d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b600a5481565b610a236109be565b610a95576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600f8190555050565b60016010541415610b4f57600354811115610ab957600080fd5b610ace816006546112c090919063ffffffff16565b3414610ad957600080fd5b600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610b2f57600080fd5b610b448160055461134690919063ffffffff16565b600581905550610cfa565b60026010541415610ba957600454811115610b6957600080fd5b610b7e816008546112c090919063ffffffff16565b3414610b8957600080fd5b610b9e8160075461134690919063ffffffff16565b600781905550610cf9565b60036010541415610c0357600454811115610bc357600080fd5b610bd881600a546112c090919063ffffffff16565b3414610be357600080fd5b610bf88160095461134690919063ffffffff16565b600981905550610cf8565b600460105414610c1257600080fd5b60018114610c1f57600080fd5b600c543414610c2d57600080fd5b600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610c8357600080fd5b6000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610cf16001600b5461134690919063ffffffff16565b600b819055505b5b5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632e81aaea33600f54846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050600060405180830381600087803b158015610dad57600080fd5b505af1158015610dc1573d6000803e3d6000fd5b50505050610dda81600f5461139090919063ffffffff16565b600f81905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610e48573d6000803e3d6000fd5b5050565b600e6020528060005260406000206000915054906101000a900460ff1681565b60075481565b60095481565b60055481565b600b5481565b610e8c6109be565b610efe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600082829050905060008090505b81811015610f9f576001600e6000868685818110610f2657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600181019050610f0c565b50505050565b600f5481565b60105481565b600d6020528060005260406000206000915054906101000a900460ff1681565b610fd96109be565b61104b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600082829050905060008090505b818110156110ec576001600d600086868581811061107357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600181019050611059565b50505050565b6110fa6109be565b61116c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61117581611418565b50565b6111806109be565b6111f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60045481565b6112446109be565b6112b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060108190555050565b6000808314156112d35760009050611340565b60008284029050828482816112e457fe5b041461133b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806116436021913960400191505060405180910390fd5b809150505b92915050565b600061138883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061155c565b905092915050565b60008082840190508381101561140e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561149e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061161d6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000838311158290611609576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156115ce5780820151818401526020810190506115b3565b50505050905090810190601f1680156115fb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a7230582045e04c1599fdfbef13c91a72be0568df3caca7a8fc24303dbbdb98d17042adad0029";
//# sourceMappingURL=BiasMinter__factory.js.map