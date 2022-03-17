import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7TokenFull } from "../KIP7TokenFull";
export declare class KIP7TokenFull__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, decimals: BigNumberish, initialSupply: BigNumberish, overrides?: Overrides): Promise<KIP7TokenFull>;
    getDeployTransaction(name: string, symbol: string, decimals: BigNumberish, initialSupply: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7TokenFull;
    connect(signer: Signer): KIP7TokenFull__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7TokenFull;
}
//# sourceMappingURL=KIP7TokenFull__factory.d.ts.map