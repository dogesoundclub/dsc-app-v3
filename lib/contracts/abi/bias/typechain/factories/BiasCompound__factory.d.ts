import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { BiasCompound } from "../BiasCompound";
export declare class BiasCompound__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_bias: string, _cards: string, _mix: string, _signer: string, overrides?: Overrides): Promise<BiasCompound>;
    getDeployTransaction(_bias: string, _cards: string, _mix: string, _signer: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): BiasCompound;
    connect(signer: Signer): BiasCompound__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BiasCompound;
}
//# sourceMappingURL=BiasCompound__factory.d.ts.map