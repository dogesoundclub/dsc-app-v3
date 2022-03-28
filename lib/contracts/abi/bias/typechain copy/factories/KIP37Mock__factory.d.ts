import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37Mock } from "../KIP37Mock";
export declare class KIP37Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(uri: string, overrides?: Overrides): Promise<KIP37Mock>;
    getDeployTransaction(uri: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37Mock;
    connect(signer: Signer): KIP37Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Mock;
}
//# sourceMappingURL=KIP37Mock__factory.d.ts.map