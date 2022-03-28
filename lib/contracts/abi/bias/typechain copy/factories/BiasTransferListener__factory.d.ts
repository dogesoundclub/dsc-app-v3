import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BiasTransferListener } from "../BiasTransferListener";
export declare class BiasTransferListener__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_cycle: string, overrides?: Overrides): Promise<BiasTransferListener>;
    getDeployTransaction(_cycle: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): BiasTransferListener;
    connect(signer: Signer): BiasTransferListener__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BiasTransferListener;
}
//# sourceMappingURL=BiasTransferListener__factory.d.ts.map