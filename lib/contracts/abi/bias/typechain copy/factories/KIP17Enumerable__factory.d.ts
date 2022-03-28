import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Enumerable } from "../KIP17Enumerable";
export declare class KIP17Enumerable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17Enumerable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Enumerable;
    connect(signer: Signer): KIP17Enumerable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Enumerable;
}
//# sourceMappingURL=KIP17Enumerable__factory.d.ts.map