import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7Pausable } from "../KIP7Pausable";
export declare class KIP7Pausable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP7Pausable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7Pausable;
    connect(signer: Signer): KIP7Pausable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7Pausable;
}
//# sourceMappingURL=KIP7Pausable__factory.d.ts.map