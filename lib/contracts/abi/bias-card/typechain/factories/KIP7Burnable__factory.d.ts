import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7Burnable } from "../KIP7Burnable";
export declare class KIP7Burnable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP7Burnable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7Burnable;
    connect(signer: Signer): KIP7Burnable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7Burnable;
}
//# sourceMappingURL=KIP7Burnable__factory.d.ts.map