import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Metadata } from "../KIP17Metadata";
export declare class KIP17Metadata__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, overrides?: Overrides): Promise<KIP17Metadata>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Metadata;
    connect(signer: Signer): KIP17Metadata__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Metadata;
}
//# sourceMappingURL=KIP17Metadata__factory.d.ts.map