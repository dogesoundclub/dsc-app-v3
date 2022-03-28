import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BiasMinter } from "../BiasMinter";
export declare class BiasMinter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_bias: string, _feeTo: string, overrides?: Overrides): Promise<BiasMinter>;
    getDeployTransaction(_bias: string, _feeTo: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): BiasMinter;
    connect(signer: Signer): BiasMinter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BiasMinter;
}
//# sourceMappingURL=BiasMinter__factory.d.ts.map