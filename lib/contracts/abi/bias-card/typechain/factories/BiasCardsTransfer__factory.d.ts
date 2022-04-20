import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BiasCardsTransfer } from "../BiasCardsTransfer";
export declare class BiasCardsTransfer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BiasCardsTransfer>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BiasCardsTransfer;
    connect(signer: Signer): BiasCardsTransfer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BiasCardsTransfer;
}
//# sourceMappingURL=BiasCardsTransfer__factory.d.ts.map