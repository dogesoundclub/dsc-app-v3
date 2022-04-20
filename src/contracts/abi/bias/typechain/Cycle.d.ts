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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CycleInterface extends ethers.utils.Interface {
  functions: {
    "pointPerEngine()": FunctionFragment;
    "bias()": FunctionFragment;
    "setEngine(address)": FunctionFragment;
    "setTransferListener(address)": FunctionFragment;
    "addManager(address)": FunctionFragment;
    "setLevelToSpeed(uint256,uint256)": FunctionFragment;
    "transferListener()": FunctionFragment;
    "setLevels(uint256[],uint256[],uint256[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "engineLimit()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "setPointPerEngine(uint256)": FunctionFragment;
    "setEngineLimit(uint256)": FunctionFragment;
    "startEngineId()": FunctionFragment;
    "startBlocks(uint256)": FunctionFragment;
    "removeManager(address)": FunctionFragment;
    "claimableCount(uint256)": FunctionFragment;
    "levels(uint256)": FunctionFragment;
    "clear(uint256)": FunctionFragment;
    "claim(uint256,uint256)": FunctionFragment;
    "setStartEngineId(uint256)": FunctionFragment;
    "engine()": FunctionFragment;
    "claimedCount(uint256)": FunctionFragment;
    "levelToSpeed(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "managers(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "pointPerEngine",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bias", values?: undefined): string;
  encodeFunctionData(functionFragment: "setEngine", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTransferListener",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "addManager", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setLevelToSpeed",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferListener",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLevels",
    values: [BigNumberish[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "engineLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setPointPerEngine",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEngineLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startEngineId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startBlocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "levels",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "clear", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStartEngineId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "engine", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimedCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "levelToSpeed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "managers", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "pointPerEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bias", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTransferListener",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLevelToSpeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferListener",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLevels", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "engineLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPointPerEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEngineLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startEngineId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setStartEngineId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "engine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimedCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "levelToSpeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "managers", data: BytesLike): Result;

  events: {
    "SetEngine(address)": EventFragment;
    "SetStartEngineId(uint256)": EventFragment;
    "SetTransferListener(address)": EventFragment;
    "SetLevelToSpeed(uint256,uint256)": EventFragment;
    "SetPointPerEngine(uint256)": EventFragment;
    "SetEngineLimit(uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetEngine"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetStartEngineId"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTransferListener"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetLevelToSpeed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPointPerEngine"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetEngineLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class Cycle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CycleInterface;

  functions: {
    pointPerEngine(overrides?: CallOverrides): Promise<[BigNumber]>;

    "pointPerEngine()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    bias(overrides?: CallOverrides): Promise<[string]>;

    "bias()"(overrides?: CallOverrides): Promise<[string]>;

    setEngine(
      _engine: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEngine(address)"(
      _engine: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setTransferListener(
      _transferListener: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTransferListener(address)"(
      _transferListener: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    addManager(
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLevelToSpeed(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLevelToSpeed(uint256,uint256)"(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferListener(overrides?: CallOverrides): Promise<[string]>;

    "transferListener()"(overrides?: CallOverrides): Promise<[string]>;

    setLevels(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLevels(uint256[],uint256[],uint256[])"(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    engineLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "engineLimit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    setPointPerEngine(
      _pointPerEngine: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPointPerEngine(uint256)"(
      _pointPerEngine: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setEngineLimit(
      _engineLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEngineLimit(uint256)"(
      _engineLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    startEngineId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startEngineId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    startBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "startBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeManager(
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimableCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimableCount(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    levels(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    "levels(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    clear(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "clear(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claim(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(uint256,uint256)"(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setStartEngineId(
      _startEngineId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setStartEngineId(uint256)"(
      _startEngineId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    engine(overrides?: CallOverrides): Promise<[string]>;

    "engine()"(overrides?: CallOverrides): Promise<[string]>;

    claimedCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "claimedCount(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    levelToSpeed(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "levelToSpeed(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    managers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "managers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  pointPerEngine(overrides?: CallOverrides): Promise<BigNumber>;

  "pointPerEngine()"(overrides?: CallOverrides): Promise<BigNumber>;

  bias(overrides?: CallOverrides): Promise<string>;

  "bias()"(overrides?: CallOverrides): Promise<string>;

  setEngine(
    _engine: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEngine(address)"(
    _engine: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setTransferListener(
    _transferListener: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTransferListener(address)"(
    _transferListener: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addManager(
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addManager(address)"(
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLevelToSpeed(
    level: BigNumberish,
    speed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLevelToSpeed(uint256,uint256)"(
    level: BigNumberish,
    speed: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferListener(overrides?: CallOverrides): Promise<string>;

  "transferListener()"(overrides?: CallOverrides): Promise<string>;

  setLevels(
    ids: BigNumberish[],
    _startBlocks: BigNumberish[],
    _levels: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLevels(uint256[],uint256[],uint256[])"(
    ids: BigNumberish[],
    _startBlocks: BigNumberish[],
    _levels: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  engineLimit(overrides?: CallOverrides): Promise<BigNumber>;

  "engineLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  setPointPerEngine(
    _pointPerEngine: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPointPerEngine(uint256)"(
    _pointPerEngine: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setEngineLimit(
    _engineLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEngineLimit(uint256)"(
    _engineLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  startEngineId(overrides?: CallOverrides): Promise<BigNumber>;

  "startEngineId()"(overrides?: CallOverrides): Promise<BigNumber>;

  startBlocks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "startBlocks(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeManager(
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeManager(address)"(
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimableCount(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimableCount(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  levels(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "levels(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  clear(id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "clear(uint256)"(
    id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claim(
    id: BigNumberish,
    count: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(uint256,uint256)"(
    id: BigNumberish,
    count: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setStartEngineId(
    _startEngineId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setStartEngineId(uint256)"(
    _startEngineId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  engine(overrides?: CallOverrides): Promise<string>;

  "engine()"(overrides?: CallOverrides): Promise<string>;

  claimedCount(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimedCount(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  levelToSpeed(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "levelToSpeed(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  managers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "managers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    pointPerEngine(overrides?: CallOverrides): Promise<BigNumber>;

    "pointPerEngine()"(overrides?: CallOverrides): Promise<BigNumber>;

    bias(overrides?: CallOverrides): Promise<string>;

    "bias()"(overrides?: CallOverrides): Promise<string>;

    setEngine(_engine: string, overrides?: CallOverrides): Promise<void>;

    "setEngine(address)"(
      _engine: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTransferListener(
      _transferListener: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTransferListener(address)"(
      _transferListener: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addManager(manager: string, overrides?: CallOverrides): Promise<void>;

    "addManager(address)"(
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLevelToSpeed(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLevelToSpeed(uint256,uint256)"(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferListener(overrides?: CallOverrides): Promise<string>;

    "transferListener()"(overrides?: CallOverrides): Promise<string>;

    setLevels(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setLevels(uint256[],uint256[],uint256[])"(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    engineLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "engineLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    setPointPerEngine(
      _pointPerEngine: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPointPerEngine(uint256)"(
      _pointPerEngine: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEngineLimit(
      _engineLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setEngineLimit(uint256)"(
      _engineLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startEngineId(overrides?: CallOverrides): Promise<BigNumber>;

    "startEngineId()"(overrides?: CallOverrides): Promise<BigNumber>;

    startBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "startBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeManager(manager: string, overrides?: CallOverrides): Promise<void>;

    "removeManager(address)"(
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimableCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimableCount(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levels(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "levels(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clear(id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "clear(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(uint256,uint256)"(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStartEngineId(
      _startEngineId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setStartEngineId(uint256)"(
      _startEngineId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    engine(overrides?: CallOverrides): Promise<string>;

    "engine()"(overrides?: CallOverrides): Promise<string>;

    claimedCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimedCount(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levelToSpeed(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "levelToSpeed(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    managers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "managers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    SetEngine(engine: null): EventFilter;

    SetStartEngineId(startEngineId: null): EventFilter;

    SetTransferListener(transferListener: null): EventFilter;

    SetLevelToSpeed(level: null, speed: null): EventFilter;

    SetPointPerEngine(pointPerEngine: null): EventFilter;

    SetEngineLimit(engineLimit: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    pointPerEngine(overrides?: CallOverrides): Promise<BigNumber>;

    "pointPerEngine()"(overrides?: CallOverrides): Promise<BigNumber>;

    bias(overrides?: CallOverrides): Promise<BigNumber>;

    "bias()"(overrides?: CallOverrides): Promise<BigNumber>;

    setEngine(_engine: string, overrides?: Overrides): Promise<BigNumber>;

    "setEngine(address)"(
      _engine: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTransferListener(
      _transferListener: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTransferListener(address)"(
      _transferListener: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addManager(manager: string, overrides?: Overrides): Promise<BigNumber>;

    "addManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLevelToSpeed(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLevelToSpeed(uint256,uint256)"(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferListener(overrides?: CallOverrides): Promise<BigNumber>;

    "transferListener()"(overrides?: CallOverrides): Promise<BigNumber>;

    setLevels(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLevels(uint256[],uint256[],uint256[])"(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    engineLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "engineLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setPointPerEngine(
      _pointPerEngine: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPointPerEngine(uint256)"(
      _pointPerEngine: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setEngineLimit(
      _engineLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setEngineLimit(uint256)"(
      _engineLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    startEngineId(overrides?: CallOverrides): Promise<BigNumber>;

    "startEngineId()"(overrides?: CallOverrides): Promise<BigNumber>;

    startBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "startBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeManager(manager: string, overrides?: Overrides): Promise<BigNumber>;

    "removeManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimableCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimableCount(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levels(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "levels(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clear(id: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "clear(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claim(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(uint256,uint256)"(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStartEngineId(
      _startEngineId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setStartEngineId(uint256)"(
      _startEngineId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    engine(overrides?: CallOverrides): Promise<BigNumber>;

    "engine()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimedCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimedCount(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levelToSpeed(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "levelToSpeed(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    managers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "managers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pointPerEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pointPerEngine()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bias(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bias()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setEngine(
      _engine: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEngine(address)"(
      _engine: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setTransferListener(
      _transferListener: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTransferListener(address)"(
      _transferListener: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addManager(
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLevelToSpeed(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLevelToSpeed(uint256,uint256)"(
      level: BigNumberish,
      speed: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferListener(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "transferListener()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setLevels(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLevels(uint256[],uint256[],uint256[])"(
      ids: BigNumberish[],
      _startBlocks: BigNumberish[],
      _levels: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    engineLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "engineLimit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPointPerEngine(
      _pointPerEngine: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPointPerEngine(uint256)"(
      _pointPerEngine: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setEngineLimit(
      _engineLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEngineLimit(uint256)"(
      _engineLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    startEngineId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startEngineId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBlocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "startBlocks(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeManager(
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimableCount(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimableCount(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levels(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "levels(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    clear(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "clear(uint256)"(
      id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claim(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(uint256,uint256)"(
      id: BigNumberish,
      count: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setStartEngineId(
      _startEngineId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setStartEngineId(uint256)"(
      _startEngineId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    engine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "engine()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimedCount(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimedCount(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levelToSpeed(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "levelToSpeed(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    managers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "managers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
