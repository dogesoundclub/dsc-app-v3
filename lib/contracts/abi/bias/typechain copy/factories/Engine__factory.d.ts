import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Engine } from "../Engine";
export declare class Engine__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Engine>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Engine;
    connect(signer: Signer): Engine__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Engine;
}
//# sourceMappingURL=Engine__factory.d.ts.map