import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37Token } from "../KIP37Token";
export declare class KIP37Token__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(uri: string, overrides?: Overrides): Promise<KIP37Token>;
    getDeployTransaction(uri: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37Token;
    connect(signer: Signer): KIP37Token__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Token;
}
//# sourceMappingURL=KIP37Token__factory.d.ts.map