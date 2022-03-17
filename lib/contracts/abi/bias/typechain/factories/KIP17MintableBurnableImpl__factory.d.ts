import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17MintableBurnableImpl } from "../KIP17MintableBurnableImpl";
export declare class KIP17MintableBurnableImpl__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17MintableBurnableImpl>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17MintableBurnableImpl;
    connect(signer: Signer): KIP17MintableBurnableImpl__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17MintableBurnableImpl;
}
//# sourceMappingURL=KIP17MintableBurnableImpl__factory.d.ts.map