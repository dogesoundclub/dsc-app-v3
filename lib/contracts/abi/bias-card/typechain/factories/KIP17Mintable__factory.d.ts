import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Mintable } from "../KIP17Mintable";
export declare class KIP17Mintable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17Mintable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Mintable;
    connect(signer: Signer): KIP17Mintable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Mintable;
}
//# sourceMappingURL=KIP17Mintable__factory.d.ts.map