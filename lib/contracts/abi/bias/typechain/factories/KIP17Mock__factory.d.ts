import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Mock } from "../KIP17Mock";
export declare class KIP17Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17Mock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Mock;
    connect(signer: Signer): KIP17Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Mock;
}
//# sourceMappingURL=KIP17Mock__factory.d.ts.map