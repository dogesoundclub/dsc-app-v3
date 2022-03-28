import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Cycle } from "../Cycle";
export declare class Cycle__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_bias: string, overrides?: Overrides): Promise<Cycle>;
    getDeployTransaction(_bias: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): Cycle;
    connect(signer: Signer): Cycle__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Cycle;
}
//# sourceMappingURL=Cycle__factory.d.ts.map