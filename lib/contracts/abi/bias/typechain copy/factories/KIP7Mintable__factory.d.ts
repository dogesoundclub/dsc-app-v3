import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7Mintable } from "../KIP7Mintable";
export declare class KIP7Mintable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP7Mintable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7Mintable;
    connect(signer: Signer): KIP7Mintable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7Mintable;
}
//# sourceMappingURL=KIP7Mintable__factory.d.ts.map