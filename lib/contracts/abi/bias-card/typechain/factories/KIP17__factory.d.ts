import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17 } from "../KIP17";
export declare class KIP17__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17;
    connect(signer: Signer): KIP17__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17;
}
//# sourceMappingURL=KIP17__factory.d.ts.map