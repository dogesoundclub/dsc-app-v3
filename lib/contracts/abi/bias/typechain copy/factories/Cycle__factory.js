"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cycle__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class Cycle__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_bias, overrides) {
        return super.deploy(_bias, overrides || {});
    }
    getDeployTransaction(_bias, overrides) {
        return super.getDeployTransaction(_bias, overrides || {});
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
exports.Cycle__factory = Cycle__factory;
const _abi = [
    {
        constant: true,
        inputs: [],
        name: "pointPerEngine",
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
                name: "_engine",
                type: "address",
            },
        ],
        name: "setEngine",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "manager",
                type: "address",
            },
        ],
        name: "addManager",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "level",
                type: "uint256",
            },
            {
                name: "speed",
                type: "uint256",
            },
        ],
        name: "setLevelToSpeed",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "ids",
                type: "uint256[]",
            },
            {
                name: "_startBlocks",
                type: "uint256[]",
            },
            {
                name: "_levels",
                type: "uint256[]",
            },
        ],
        name: "setLevels",
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
        name: "engineLimit",
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
                name: "_pointPerEngine",
                type: "uint256",
            },
        ],
        name: "setPointPerEngine",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_engineLimit",
                type: "uint256",
            },
        ],
        name: "setEngineLimit",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "startEngineId",
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
        name: "startBlocks",
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
                name: "manager",
                type: "address",
            },
        ],
        name: "removeManager",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
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
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "levels",
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
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
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
        constant: false,
        inputs: [
            {
                name: "_startEngineId",
                type: "uint256",
            },
        ],
        name: "setStartEngineId",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "engine",
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
        inputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "claimedCount",
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
        name: "levelToSpeed",
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
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
        ],
        name: "managers",
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
        inputs: [
            {
                name: "_bias",
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
const _bytecode = "0x608060405262278d00600655619c4060075534801561001d57600080fd5b50604051602080611da08339810180604052602081101561003d57600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160056000600181526020019081526020016000208190555060026005600060028152602001908152602001600020819055506003600560006003815260200190815260200160002081905550600460056000600481526020019081526020016000208190555060058060006005815260200190815260200160002081905550600a60056000600681526020019081526020016000208190555050611baa806101f66000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c8063a1f79dd6116100de578063c349026311610097578063ca998a2d11610071578063ca998a2d146106f9578063eaa0f6291461073b578063f2fde38b1461077d578063fdff9b4d146107c157610173565b8063c349026314610649578063c6421e4a14610681578063c9d4623f146106af57610173565b8063a1f79dd6146104b3578063a547c6fe146104d1578063ac18de4314610513578063ae1f514d14610557578063b2596a6714610599578063beabacc8146105db57610173565b8063715018a611610130578063715018a6146103c3578063793e27f5146103cd5780638da5cb5b146103eb5780638f32d59b146104355780639a25c03a146104575780639d91f0111461048557610173565b8063023af08114610178578063054816cc146101965780630e830e49146101e05780632d06177a1461022457806337d448a11461026857806370706ba9146102a0575b600080fd5b61018061081d565b6040518082815260200191505060405180910390f35b61019e610823565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610222600480360360208110156101f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610849565b005b6102666004803603602081101561023a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061096a565b005b61029e6004803603604081101561027e57600080fd5b810190808035906020019092919080359060200190929190505050610a3f565b005b6103c1600480360360608110156102b657600080fd5b81019080803590602001906401000000008111156102d357600080fd5b8201836020820111156102e557600080fd5b8035906020019184602083028401116401000000008311171561030757600080fd5b90919293919293908035906020019064010000000081111561032857600080fd5b82018360208201111561033a57600080fd5b8035906020019184602083028401116401000000008311171561035c57600080fd5b90919293919293908035906020019064010000000081111561037d57600080fd5b82018360208201111561038f57600080fd5b803590602001918460208302840111640100000000831117156103b157600080fd5b9091929391929390505050610b14565b005b6103cb610c4e565b005b6103d5610d87565b6040518082815260200191505060405180910390f35b6103f3610d8d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61043d610db6565b604051808215151515815260200191505060405180910390f35b6104836004803603602081101561046d57600080fd5b8101908080359060200190929190505050610e0d565b005b6104b16004803603602081101561049b57600080fd5b8101908080359060200190929190505050610ec8565b005b6104bb610f83565b6040518082815260200191505060405180910390f35b6104fd600480360360208110156104e757600080fd5b8101908080359060200190929190505050610f89565b6040518082815260200191505060405180910390f35b6105556004803603602081101561052957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fa1565b005b6105836004803603602081101561056d57600080fd5b8101908080359060200190929190505050611076565b6040518082815260200191505060405180910390f35b6105c5600480360360208110156105af57600080fd5b8101908080359060200190929190505050611148565b6040518082815260200191505060405180910390f35b610647600480360360608110156105f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611160565b005b61067f6004803603604081101561065f57600080fd5b810190808035906020019092919080359060200190929190505050611224565b005b6106ad6004803603602081101561069757600080fd5b8101908080359060200190929190505050611514565b005b6106b76115cf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107256004803603602081101561070f57600080fd5b81019080803590602001909291905050506115f5565b6040518082815260200191505060405180910390f35b6107676004803603602081101561075157600080fd5b810190808035906020019092919050505061160d565b6040518082815260200191505060405180910390f35b6107bf6004803603602081101561079357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611625565b005b610803600480360360208110156107d757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116ab565b604051808215151515815260200191505060405180910390f35b60065481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610851610db6565b6108c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9540b27a7849a6776171454eba547cf7ae768209f4584efd62e6ccf23634a59e81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b610972610db6565b6109e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610a47610db6565b610ab9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060056000848152602001908152602001600020819055507fa82bdfa34a9efdffcf0963314e295a0794c8a207a511a15e1372243241b6bfb48282604051808381526020018281526020019250505060405180910390a15050565b60011515610b20610db6565b15151480610b7e575060011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b610b8757600080fd5b838390508686905014610b9957600080fd5b818190508686905014610bab57600080fd5b600082829050905060008090505b81811015610c4457858582818110610bcd57fe5b90506020020135600860008a8a85818110610be457fe5b90506020020135815260200190815260200160002081905550838382818110610c0957fe5b90506020020135600960008a8a85818110610c2057fe5b90506020020135815260200190815260200160002081905550600181019050610bb9565b5050505050505050565b610c56610db6565b610cc8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60075481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610e15610db6565b610e87576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806006819055507fb5600e1a35e5ab2e135fa80a44327920a0592da3063f8d8e6d21865960887e51816040518082815260200191505060405180910390a150565b610ed0610db6565b610f42576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806007819055507fb5c5ec8702d6f668c7b43cb19ee39626c6bb6c46e4a42fd24651e12368b6c20d816040518082815260200191505060405180910390a150565b60035481565b60086020528060005260406000206000915090505481565b610fa9610db6565b61101b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000806110d76005600060096000878152602001908152602001600020548152602001908152602001600020546110c96008600087815260200190815260200160002054436116cb90919063ffffffff16565b61171590919063ffffffff16565b90506000611103600654600a60008781526020019081526020016000205461171590919063ffffffff16565b905080821061113c5761113360065461112583856116cb90919063ffffffff16565b61179b90919063ffffffff16565b92505050611143565b6000925050505b919050565b60096020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111ba57600080fd5b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461121f574360086000838152602001908152602001600020819055506000600a6000838152602001908152602001600020819055505b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561129757600080fd5b505afa1580156112ab573d6000803e3d6000fd5b505050506040513d60208110156112c157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461130957600080fd5b600061136960056000600960008781526020019081526020016000205481526020019081526020016000205461135b6008600087815260200190815260200160002054436116cb90919063ffffffff16565b61171590919063ffffffff16565b90506000611395600654600a60008781526020019081526020016000205461171590919063ffffffff16565b9050808210156113a457600080fd5b6113ca83600a6000878152602001908152602001600020546117e590919063ffffffff16565b600a6000868152602001908152602001600020819055506007546113f9846003546117e590919063ffffffff16565b111561140457600080fd5b60008090505b838110156114f257600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933611466846003546117e590919063ffffffff16565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b1580156114cf57600080fd5b505af11580156114e3573d6000803e3d6000fd5b5050505060018101905061140a565b50611508836003546117e590919063ffffffff16565b60038190555050505050565b61151c610db6565b61158e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806003819055507f9b9408093dc71f2e4d46d5de61211987484aec76a44208eeece299293c50edca816040518082815260200191505060405180910390a150565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a6020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b61162d610db6565b61169f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6116a88161186d565b50565b60046020528060005260406000206000915054906101000a900460ff1681565b600061170d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506119b1565b905092915050565b6000808314156117285760009050611795565b600082840290508284828161173957fe5b0414611790576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611b5e6021913960400191505060405180910390fd5b809150505b92915050565b60006117dd83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611a71565b905092915050565b600080828401905083811015611863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156118f3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611b386026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000838311158290611a5e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611a23578082015181840152602081019050611a08565b50505050905090810190601f168015611a505780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290611b1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ae2578082015181840152602081019050611ac7565b50505050905090810190601f168015611b0f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611b2957fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a72305820f819b699ff6c7ddbd538de8f42fc6febb99c7cdc4273b3585ca24c87f4981a820029";
//# sourceMappingURL=Cycle__factory.js.map