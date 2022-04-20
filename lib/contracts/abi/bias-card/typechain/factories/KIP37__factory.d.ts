import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37 } from "../KIP37";
export declare class KIP37__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(uri: string, overrides?: Overrides): Promise<KIP37>;
    getDeployTransaction(uri: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37;
    connect(signer: Signer): KIP37__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37;
}
//# sourceMappingURL=KIP37__factory.d.ts.map