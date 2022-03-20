/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BiasMinterV2Interface extends ethers.utils.Interface {
  functions: {
    "feeTo()": FunctionFragment;
    "bias()": FunctionFragment;
    "setAmount(uint256)": FunctionFragment;
    "addDiscountList(address[])": FunctionFragment;
    "setLimitPerTransaction(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "discountPrice()": FunctionFragment;
    "setDiscountPrice(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "setPrice(uint256)": FunctionFragment;
    "setCurrentId(uint256)": FunctionFragment;
    "price()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "amount()": FunctionFragment;
    "limitPerTransaction()": FunctionFragment;
    "discountList(address)": FunctionFragment;
    "currentId()": FunctionFragment;
    "step()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setStep(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(functionFragment: "bias", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addDiscountList",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setLimitPerTransaction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "discountPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDiscountPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "amount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "limitPerTransaction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "discountList",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "currentId", values?: undefined): string;
  encodeFunctionData(functionFragment: "step", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setStep",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bias", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addDiscountList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLimitPerTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discountPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDiscountPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "amount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "limitPerTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discountList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currentId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "step", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setStep", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class BiasMinterV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BiasMinterV2Interface;

  functions: {
    feeTo(overrides?: CallOverrides): Promise<[string]>;

    "feeTo()"(overrides?: CallOverrides): Promise<[string]>;

    bias(overrides?: CallOverrides): Promise<[string]>;

    "bias()"(overrides?: CallOverrides): Promise<[string]>;

    setAmount(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addDiscountList(
      addrs: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addDiscountList(address[])"(
      addrs: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLimitPerTransaction(
      limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLimitPerTransaction(uint256)"(
      limit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    discountPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    "discountPrice()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setDiscountPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDiscountPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    setPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCurrentId(
      _currentId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCurrentId(uint256)"(
      _currentId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    "price()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    amount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "amount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    limitPerTransaction(overrides?: CallOverrides): Promise<[BigNumber]>;

    "limitPerTransaction()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    discountList(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "discountList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    currentId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    step(overrides?: CallOverrides): Promise<[BigNumber]>;

    "step()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setStep(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  feeTo(overrides?: CallOverrides): Promise<string>;

  "feeTo()"(overrides?: CallOverrides): Promise<string>;

  bias(overrides?: CallOverrides): Promise<string>;

  "bias()"(overrides?: CallOverrides): Promise<string>;

  setAmount(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAmount(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addDiscountList(
    addrs: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addDiscountList(address[])"(
    addrs: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLimitPerTransaction(
    limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLimitPerTransaction(uint256)"(
    limit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  discountPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "discountPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  setDiscountPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDiscountPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  setPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCurrentId(
    _currentId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCurrentId(uint256)"(
    _currentId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  "price()"(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    count: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "mint(uint256)"(
    count: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  amount(overrides?: CallOverrides): Promise<BigNumber>;

  "amount()"(overrides?: CallOverrides): Promise<BigNumber>;

  limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;

  "limitPerTransaction()"(overrides?: CallOverrides): Promise<BigNumber>;

  discountList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "discountList(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  currentId(overrides?: CallOverrides): Promise<BigNumber>;

  "currentId()"(overrides?: CallOverrides): Promise<BigNumber>;

  step(overrides?: CallOverrides): Promise<BigNumber>;

  "step()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFeeTo(_feeTo: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setFeeTo(address)"(
    _feeTo: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setStep(
    _step: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setStep(uint256)"(
    _step: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    feeTo(overrides?: CallOverrides): Promise<string>;

    "feeTo()"(overrides?: CallOverrides): Promise<string>;

    bias(overrides?: CallOverrides): Promise<string>;

    "bias()"(overrides?: CallOverrides): Promise<string>;

    setAmount(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addDiscountList(addrs: string[], overrides?: CallOverrides): Promise<void>;

    "addDiscountList(address[])"(
      addrs: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setLimitPerTransaction(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLimitPerTransaction(uint256)"(
      limit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    discountPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "discountPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    setDiscountPrice(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDiscountPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    setPrice(_price: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCurrentId(
      _currentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCurrentId(uint256)"(
      _currentId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    "price()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(count: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    amount(overrides?: CallOverrides): Promise<BigNumber>;

    "amount()"(overrides?: CallOverrides): Promise<BigNumber>;

    limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;

    "limitPerTransaction()"(overrides?: CallOverrides): Promise<BigNumber>;

    discountList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "discountList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    currentId(overrides?: CallOverrides): Promise<BigNumber>;

    "currentId()"(overrides?: CallOverrides): Promise<BigNumber>;

    step(overrides?: CallOverrides): Promise<BigNumber>;

    "step()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStep(_step: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    "feeTo()"(overrides?: CallOverrides): Promise<BigNumber>;

    bias(overrides?: CallOverrides): Promise<BigNumber>;

    "bias()"(overrides?: CallOverrides): Promise<BigNumber>;

    setAmount(_amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addDiscountList(addrs: string[], overrides?: Overrides): Promise<BigNumber>;

    "addDiscountList(address[])"(
      addrs: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLimitPerTransaction(
      limit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLimitPerTransaction(uint256)"(
      limit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    discountPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "discountPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    setDiscountPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDiscountPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setPrice(_price: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setCurrentId(
      _currentId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCurrentId(uint256)"(
      _currentId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    "price()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(count: BigNumberish, overrides?: PayableOverrides): Promise<BigNumber>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    amount(overrides?: CallOverrides): Promise<BigNumber>;

    "amount()"(overrides?: CallOverrides): Promise<BigNumber>;

    limitPerTransaction(overrides?: CallOverrides): Promise<BigNumber>;

    "limitPerTransaction()"(overrides?: CallOverrides): Promise<BigNumber>;

    discountList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "discountList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentId(overrides?: CallOverrides): Promise<BigNumber>;

    "currentId()"(overrides?: CallOverrides): Promise<BigNumber>;

    step(overrides?: CallOverrides): Promise<BigNumber>;

    "step()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFeeTo(_feeTo: string, overrides?: Overrides): Promise<BigNumber>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStep(_step: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeTo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bias(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bias()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAmount(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addDiscountList(
      addrs: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addDiscountList(address[])"(
      addrs: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLimitPerTransaction(
      limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLimitPerTransaction(uint256)"(
      limit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    discountPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "discountPrice()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDiscountPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDiscountPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCurrentId(
      _currentId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCurrentId(uint256)"(
      _currentId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "price()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "mint(uint256)"(
      count: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    amount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "amount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limitPerTransaction(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "limitPerTransaction()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    discountList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "discountList(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    step(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "step()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setStep(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setStep(uint256)"(
      _step: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
