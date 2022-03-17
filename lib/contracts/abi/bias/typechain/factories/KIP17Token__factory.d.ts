import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Token } from "../KIP17Token";
export declare class KIP17Token__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, overrides?: Overrides): Promise<KIP17Token>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Token;
    connect(signer: Signer): KIP17Token__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Token;
}
//# sourceMappingURL=KIP17Token__factory.d.ts.map