import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BiasMinterV2 } from "../BiasMinterV2";
export declare class BiasMinterV2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_bias: string, _feeTo: string, overrides?: Overrides): Promise<BiasMinterV2>;
    getDeployTransaction(_bias: string, _feeTo: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): BiasMinterV2;
    connect(signer: Signer): BiasMinterV2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BiasMinterV2;
}
//# sourceMappingURL=BiasMinterV2__factory.d.ts.map