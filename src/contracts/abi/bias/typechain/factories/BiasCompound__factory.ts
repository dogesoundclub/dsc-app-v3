/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BiasCompound } from "../BiasCompound";

export class BiasCompound__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _bias: string,
    _cards: string,
    _mix: string,
    _signer: string,
    overrides?: Overrides
  ): Promise<BiasCompound> {
    return super.deploy(
      _bias,
      _cards,
      _mix,
      _signer,
      overrides || {}
    ) as Promise<BiasCompound>;
  }
  getDeployTransaction(
    _bias: string,
    _cards: string,
    _mix: string,
    _signer: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _bias,
      _cards,
      _mix,
      _signer,
      overrides || {}
    );
  }
  attach(address: string): BiasCompound {
    return super.attach(address) as BiasCompound;
  }
  connect(signer: Signer): BiasCompound__factory {
    return super.connect(signer) as BiasCompound__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BiasCompound {
    return new Contract(address, _abi, signerOrProvider) as BiasCompound;
  }
}

const _abi = [
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
    name: "signer",
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
    name: "returnMixTime",
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
        name: "biasId",
        type: "uint256",
      },
    ],
    name: "withdrawMix",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "cards",
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
    name: "mixPrice",
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
        name: "_signer",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address",
      },
    ],
    name: "emergencyWithdraw",
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
    constant: false,
    inputs: [
      {
        name: "_mixPrice",
        type: "uint256",
      },
    ],
    name: "setMixPrice",
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
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "compoundBlocks",
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
        name: "biasId",
        type: "uint256",
      },
      {
        name: "cardId",
        type: "uint256",
      },
      {
        name: "uri",
        type: "string",
      },
      {
        name: "signature",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "mix",
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
        name: "_returnMixTime",
        type: "uint256",
      },
    ],
    name: "setReturnMixTime",
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
        name: "_bias",
        type: "address",
      },
      {
        name: "_cards",
        type: "address",
      },
      {
        name: "_mix",
        type: "address",
      },
      {
        name: "_signer",
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
        name: "signer",
        type: "address",
      },
    ],
    name: "SetSigner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "mixPrice",
        type: "uint256",
      },
    ],
    name: "SetMixPrice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "returnMixTime",
        type: "uint256",
      },
    ],
    name: "SetReturnMixTime",
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

const _bytecode =
  "0x60806040526815af1d78b58c40000060055562ed4e0060065534801561002457600080fd5b50604051608080611ce98339810180604052608081101561004457600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a383600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050611aa3806102466000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b431368b11610071578063b431368b14610384578063b641e774146103c6578063be32cf8d1461052c578063d0e3b8ac14610576578063f2fde38b146105a45761010b565b8063715018a6146102e057806380343171146102ea5780638da5cb5b146103185780638f32d59b146103625761010b565b806358a4903f116100de57806358a4903f146101f057806359e41c541461023a5780636c19e783146102585780636ff1c9bc1461029c5761010b565b8063054816cc14610110578063238ac9331461015a5780633d080c2d146101a45780634c91a216146101c2575b600080fd5b6101186105e8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61016261060e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101ac610634565b6040518082815260200191505060405180910390f35b6101ee600480360360208110156101d857600080fd5b810190808035906020019092919050505061063a565b005b6101f8610876565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61024261089c565b6040518082815260200191505060405180910390f35b61029a6004803603602081101561026e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108a2565b005b6102de600480360360208110156102b257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a3565b005b6102e8610c3b565b005b6103166004803603602081101561030057600080fd5b8101908080359060200190929190505050610d74565b005b610320610e2f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61036a610e58565b604051808215151515815260200191505060405180910390f35b6103b06004803603602081101561039a57600080fd5b8101908080359060200190929190505050610eaf565b6040518082815260200191505060405180910390f35b61052a600480360360808110156103dc57600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561040d57600080fd5b82018360208201111561041f57600080fd5b8035906020019184600183028401116401000000008311171561044157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156104a457600080fd5b8201836020820111156104b657600080fd5b803590602001918460018302840111640100000000831117156104d857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ec7565b005b610534611692565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105a26004803603602081101561058c57600080fd5b81019080803590602001909291905050506116b8565b005b6105e6600480360360208110156105ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611773565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156106c457600080fd5b505afa1580156106d8573d6000803e3d6000fd5b505050506040513d60208110156106ee57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161461071f57600080fd5b600060076000838152602001908152602001600020541415801561076a57506006546107676007600084815260200190815260200160002054436117f990919063ffffffff16565b10155b61077357600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336005546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561081e57600080fd5b505af1158015610832573d6000803e3d6000fd5b505050506040513d602081101561084857600080fd5b8101908080519060200190929190505050506000600760008381526020019081526020016000208190555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b6108aa610e58565b61091c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167fbb10aee7ef5a307b8097c6a7f2892b909ff1736fd24a6a5260640c185f7153b660405160405180910390a250565b6109ab610e58565b610a1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610abd57610a5b33611843565b73ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610ab7573d6000803e3d6000fd5b50610c38565b8073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610b5757600080fd5b505afa158015610b6b573d6000803e3d6000fd5b505050506040513d6020811015610b8157600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610bfb57600080fd5b505af1158015610c0f573d6000803e3d6000fd5b505050506040513d6020811015610c2557600080fd5b8101908080519060200190929190505050505b50565b610c43610e58565b610cb5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b610d7c610e58565b610dee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806005819055507f4ba99f71bc39d9775a989626a042f214aba8b460b3030c81514ec4ec88705314816040518082815260200191505060405180910390a150565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60076020528060005260406000206000915090505481565b6041815114610f3e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f696e76616c6964207369676e6174757265206c656e677468000000000000000081525060200191505060405180910390fd5b600033858585604051602001808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140184815260200183815260200182805190602001908083835b60208310610fbb5780518252602082019150602081019050602083039250610f98565b6001836020036101000a03801982511681845116808217855250505050505090500194505050505060405160208183030381529060405280519060200120905060008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c0182815260200191505060405160208183030381529060405280519060200120905060008060006020860151925060408601519150606086015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c1115611104576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f696e76616c6964207369676e6174757265202773272076616c7565000000000081525060200191505060405180910390fd5b601b8160ff1614806111195750601c8160ff16145b61118b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f696e76616c6964207369676e6174757265202776272076616c7565000000000081525060200191505060405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660018583868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611221573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff161461124b57600080fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1662fdd58e338b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156112f357600080fd5b505afa158015611307573d6000803e3d6000fd5b505050506040513d602081101561131d57600080fd5b81019080805190602001909291905050501161133857600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5298aca338a60016040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020019350505050600060405180830381600087803b1580156113ea57600080fd5b505af11580156113fe573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306005546040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156114e157600080fd5b505af11580156114f5573d6000803e3d6000fd5b505050506040513d602081101561150b57600080fd5b810190808051906020019092919050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634a99950b338b8a6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156115e55780820151818401526020810190506115ca565b50505050905090810190601f1680156116125780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561163357600080fd5b505af1158015611647573d6000803e3d6000fd5b505050506040513d602081101561165d57600080fd5b81019080805190602001909291905050505043600760008b815260200190815260200160002081905550505050505050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6116c0610e58565b611732576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b806006819055507fdfc62013ea78018cabf61fae4aa73bed6000080930f370bd67993150a98d1680816040518082815260200191505060405180910390a150565b61177b610e58565b6117ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6117f68161184d565b50565b600061183b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611991565b905092915050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156118d3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611a526026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000838311158290611a3e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611a035780820151818401526020810190506119e8565b50505050905090810190601f168015611a305780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a165627a7a72305820b24320848db367e730416e8135442c515d31b10b9e5e1475f37ebd13178568f70029";
