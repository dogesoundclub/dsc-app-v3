import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37Holder } from "../KIP37Holder";
export declare class KIP37Holder__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP37Holder>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37Holder;
    connect(signer: Signer): KIP37Holder__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Holder;
}
//# sourceMappingURL=KIP37Holder__factory.d.ts.map