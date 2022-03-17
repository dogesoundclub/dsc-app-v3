import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Bias } from "../Bias";
export declare class Bias__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Bias>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Bias;
    connect(signer: Signer): Bias__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Bias;
}
//# sourceMappingURL=Bias__factory.d.ts.map