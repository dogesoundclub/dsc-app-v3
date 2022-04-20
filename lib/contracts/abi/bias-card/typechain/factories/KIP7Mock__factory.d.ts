import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7Mock } from "../KIP7Mock";
export declare class KIP7Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(initialAccount: string, initialBalance: BigNumberish, overrides?: Overrides): Promise<KIP7Mock>;
    getDeployTransaction(initialAccount: string, initialBalance: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7Mock;
    connect(signer: Signer): KIP7Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7Mock;
}
//# sourceMappingURL=KIP7Mock__factory.d.ts.map