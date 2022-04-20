import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SelfDestructible } from "../SelfDestructible";
export declare class SelfDestructible__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SelfDestructible>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SelfDestructible;
    connect(signer: Signer): SelfDestructible__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SelfDestructible;
}
//# sourceMappingURL=SelfDestructible__factory.d.ts.map