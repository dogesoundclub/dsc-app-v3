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

interface ITransferListenerInterface extends ethers.utils.Interface {
  functions: {
    "transfer(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;

  events: {};
}

export class ITransferListener extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITransferListenerInterface;

  functions: {
    transfer(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  transfer(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    transfer(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transfer(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    transfer(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    transfer(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
