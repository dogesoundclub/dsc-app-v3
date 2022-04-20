import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37PausableMock } from "../KIP37PausableMock";
export declare class KIP37PausableMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(uri: string, overrides?: Overrides): Promise<KIP37PausableMock>;
    getDeployTransaction(uri: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37PausableMock;
    connect(signer: Signer): KIP37PausableMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37PausableMock;
}
//# sourceMappingURL=KIP37PausableMock__factory.d.ts.map