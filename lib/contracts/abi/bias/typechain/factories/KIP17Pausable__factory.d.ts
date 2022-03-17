import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Pausable } from "../KIP17Pausable";
export declare class KIP17Pausable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17Pausable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Pausable;
    connect(signer: Signer): KIP17Pausable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Pausable;
}
//# sourceMappingURL=KIP17Pausable__factory.d.ts.map