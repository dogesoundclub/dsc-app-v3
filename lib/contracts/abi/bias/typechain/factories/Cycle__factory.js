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
                name: "_transferListener",
                type: "address",
            },
        ],
        name: "setTransferListener",
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
        constant: true,
        inputs: [],
        name: "transferListener",
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
                name: "id",
                type: "uint256",
            },
        ],
        name: "clear",
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
                name: "transferListener",
                type: "address",
            },
        ],
        name: "SetTransferListener",
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
const _bytecode = "0x608060405262278d00600755619c4060085534801561001d57600080fd5b50604051602080611f368339810180604052602081101561003d57600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016006600060018152602001908152602001600020819055506002600660006002815260200190815260200160002081905550600360066000600381526020019081526020016000208190555060046006600060048152602001908152602001600020819055506005600660006005815260200190815260200160002081905550600a60066000600681526020019081526020016000208190555050611d3f806101f76000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80639d91f011116100f9578063c349026311610097578063ca998a2d11610071578063ca998a2d1461077d578063eaa0f629146107bf578063f2fde38b14610801578063fdff9b4d14610845576101a9565b8063c3490263146106cd578063c6421e4a14610705578063c9d4623f14610733576101a9565b8063ac18de43116100d3578063ac18de43146105d7578063ae1f514d1461061b578063b2596a671461065d578063c0fe1af81461069f576101a9565b80639d91f01114610549578063a1f79dd614610577578063a547c6fe14610595576101a9565b8063538ee00711610166578063793e27f511610140578063793e27f5146104915780638da5cb5b146104af5780638f32d59b146104f95780639a25c03a1461051b576101a9565b8063538ee0071461031a57806370706ba914610364578063715018a614610487576101a9565b8063023af081146101ae578063054816cc146101cc5780630e830e49146102165780632376bf3f1461025a5780632d06177a1461029e57806337d448a1146102e2575b600080fd5b6101b66108a1565b6040518082815260200191505060405180910390f35b6101d46108a7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102586004803603602081101561022c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108cd565b005b61029c6004803603602081101561027057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109ee565b005b6102e0600480360360208110156102b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b0f565b005b610318600480360360408110156102f857600080fd5b810190808035906020019092919080359060200190929190505050610be4565b005b610322610cb9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104856004803603606081101561037a57600080fd5b810190808035906020019064010000000081111561039757600080fd5b8201836020820111156103a957600080fd5b803590602001918460208302840111640100000000831117156103cb57600080fd5b9091929391929390803590602001906401000000008111156103ec57600080fd5b8201836020820111156103fe57600080fd5b8035906020019184602083028401116401000000008311171561042057600080fd5b90919293919293908035906020019064010000000081111561044157600080fd5b82018360208201111561045357600080fd5b8035906020019184602083028401116401000000008311171561047557600080fd5b9091929391929390505050610cdf565b005b61048f610e19565b005b610499610f52565b6040518082815260200191505060405180910390f35b6104b7610f58565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610501610f81565b604051808215151515815260200191505060405180910390f35b6105476004803603602081101561053157600080fd5b8101908080359060200190929190505050610fd8565b005b6105756004803603602081101561055f57600080fd5b8101908080359060200190929190505050611093565b005b61057f61114e565b6040518082815260200191505060405180910390f35b6105c1600480360360208110156105ab57600080fd5b8101908080359060200190929190505050611154565b6040518082815260200191505060405180910390f35b610619600480360360208110156105ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061116c565b005b6106476004803603602081101561063157600080fd5b8101908080359060200190929190505050611241565b6040518082815260200191505060405180910390f35b6106896004803603602081101561067357600080fd5b8101908080359060200190929190505050611313565b6040518082815260200191505060405180910390f35b6106cb600480360360208110156106b557600080fd5b810190808035906020019092919050505061132b565b005b610703600480360360408110156106e357600080fd5b8101908080359060200190929190803590602001909291905050506113b9565b005b6107316004803603602081101561071b57600080fd5b81019080803590602001909291905050506116a9565b005b61073b611764565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107a96004803603602081101561079357600080fd5b810190808035906020019092919050505061178a565b6040518082815260200191505060405180910390f35b6107eb600480360360208110156107d557600080fd5b81019080803590602001909291905050506117a2565b6040518082815260200191505060405180910390f35b6108436004803603602081101561081757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117ba565b005b6108876004803603602081101561085b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611840565b604051808215151515815260200191505060405180910390f35b60075481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6108d5610f81565b610947576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9540b27a7849a6776171454eba547cf7ae768209f4584efd62e6ccf23634a59e81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6109f6610f81565b610a68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa237096100edd6f07bf704028d12450ee445396df93b454a9b03e30529c21f2d81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b610b17610f81565b610b89576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b610bec610f81565b610c5e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8060066000848152602001908152602001600020819055507fa82bdfa34a9efdffcf0963314e295a0794c8a207a511a15e1372243241b6bfb48282604051808381526020018281526020019250505060405180910390a15050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60011515610ceb610f81565b15151480610d49575060011515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b610d5257600080fd5b838390508686905014610d6457600080fd5b818190508686905014610d7657600080fd5b600082829050905060008090505b81811015610e0f57858582818110610d9857fe5b90506020020135600960008a8a85818110610daf57fe5b90506020020135815260200190815260200160002081905550838382818110610dd457fe5b90506020020135600a60008a8a85818110610deb57fe5b90506020020135815260200190815260200160002081905550600181019050610d84565b5050505050505050565b610e21610f81565b610e93576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60085481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b610fe0610f81565b611052576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806007819055507fb5600e1a35e5ab2e135fa80a44327920a0592da3063f8d8e6d21865960887e51816040518082815260200191505060405180910390a150565b61109b610f81565b61110d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806008819055507fb5c5ec8702d6f668c7b43cb19ee39626c6bb6c46e4a42fd24651e12368b6c20d816040518082815260200191505060405180910390a150565b60035481565b60096020528060005260406000206000915090505481565b611174610f81565b6111e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6000806112a260066000600a60008781526020019081526020016000205481526020019081526020016000205461129460096000878152602001908152602001600020544361186090919063ffffffff16565b6118aa90919063ffffffff16565b905060006112ce600754600b6000878152602001908152602001600020546118aa90919063ffffffff16565b9050808210611307576112fe6007546112f0838561186090919063ffffffff16565b61193090919063ffffffff16565b9250505061130e565b6000925050505b919050565b600a6020528060005260406000206000915090505481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461138557600080fd5b4360096000838152602001908152602001600020819055506000600b60008381526020019081526020016000208190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561142c57600080fd5b505afa158015611440573d6000803e3d6000fd5b505050506040513d602081101561145657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461149e57600080fd5b60006114fe60066000600a6000878152602001908152602001600020548152602001908152602001600020546114f060096000878152602001908152602001600020544361186090919063ffffffff16565b6118aa90919063ffffffff16565b9050600061152a600754600b6000878152602001908152602001600020546118aa90919063ffffffff16565b90508082101561153957600080fd5b61155f83600b60008781526020019081526020016000205461197a90919063ffffffff16565b600b60008681526020019081526020016000208190555060085461158e8460035461197a90919063ffffffff16565b111561159957600080fd5b60008090505b8381101561168757600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f19336115fb8460035461197a90919063ffffffff16565b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b15801561166457600080fd5b505af1158015611678573d6000803e3d6000fd5b5050505060018101905061159f565b5061169d8360035461197a90919063ffffffff16565b60038190555050505050565b6116b1610f81565b611723576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806003819055507f9b9408093dc71f2e4d46d5de61211987484aec76a44208eeece299293c50edca816040518082815260200191505060405180910390a150565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b6020528060005260406000206000915090505481565b60066020528060005260406000206000915090505481565b6117c2610f81565b611834576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b61183d81611a02565b50565b60056020528060005260406000206000915054906101000a900460ff1681565b60006118a283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b46565b905092915050565b6000808314156118bd576000905061192a565b60008284029050828482816118ce57fe5b0414611925576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611cf36021913960400191505060405180910390fd5b809150505b92915050565b600061197283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611c06565b905092915050565b6000808284019050838110156119f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611a88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611ccd6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000838311158290611bf3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bb8578082015181840152602081019050611b9d565b50505050905090810190601f168015611be55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290611cb2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c77578082015181840152602081019050611c5c565b50505050905090810190601f168015611ca45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611cbe57fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a723058201f80a006548c29a5f69b4a344dc1ea0e4d296ef37b319292562f19b8ea97552a0029";
//# sourceMappingURL=Cycle__factory.js.map