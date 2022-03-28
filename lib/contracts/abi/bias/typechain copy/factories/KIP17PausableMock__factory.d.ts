import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17PausableMock } from "../KIP17PausableMock";
export declare class KIP17PausableMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP17PausableMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17PausableMock;
    connect(signer: Signer): KIP17PausableMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17PausableMock;
}
//# sourceMappingURL=KIP17PausableMock__factory.d.ts.map