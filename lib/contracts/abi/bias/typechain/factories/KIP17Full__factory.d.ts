import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Full } from "../KIP17Full";
export declare class KIP17Full__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, overrides?: Overrides): Promise<KIP17Full>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Full;
    connect(signer: Signer): KIP17Full__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Full;
}
//# sourceMappingURL=KIP17Full__factory.d.ts.map