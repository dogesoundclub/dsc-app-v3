import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP13Mock } from "../KIP13Mock";
export declare class KIP13Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP13Mock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP13Mock;
    connect(signer: Signer): KIP13Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP13Mock;
}
//# sourceMappingURL=KIP13Mock__factory.d.ts.map