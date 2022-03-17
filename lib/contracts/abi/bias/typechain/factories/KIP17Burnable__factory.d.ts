import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17Burnable } from "../KIP17Burnable";
export declare class KIP17Burnable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17Burnable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17Burnable;
    connect(signer: Signer): KIP17Burnable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17Burnable;
}
//# sourceMappingURL=KIP17Burnable__factory.d.ts.map