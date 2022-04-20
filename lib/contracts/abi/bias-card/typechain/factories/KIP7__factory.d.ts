import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7 } from "../KIP7";
export declare class KIP7__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP7>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7;
    connect(signer: Signer): KIP7__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7;
}
//# sourceMappingURL=KIP7__factory.d.ts.map