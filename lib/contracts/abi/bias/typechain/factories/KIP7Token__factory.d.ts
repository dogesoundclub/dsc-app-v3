import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7Token } from "../KIP7Token";
export declare class KIP7Token__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, decimals: BigNumberish, initialSupply: BigNumberish, overrides?: Overrides): Promise<KIP7Token>;
    getDeployTransaction(name: string, symbol: string, decimals: BigNumberish, initialSupply: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7Token;
    connect(signer: Signer): KIP7Token__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7Token;
}
//# sourceMappingURL=KIP7Token__factory.d.ts.map