import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BiasCards } from "../BiasCards";
export declare class BiasCards__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BiasCards>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BiasCards;
    connect(signer: Signer): BiasCards__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BiasCards;
}
//# sourceMappingURL=BiasCards__factory.d.ts.map