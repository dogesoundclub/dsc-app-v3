import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7PausableMock } from "../KIP7PausableMock";
export declare class KIP7PausableMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(initialAccount: string, initialBalance: BigNumberish, overrides?: Overrides): Promise<KIP7PausableMock>;
    getDeployTransaction(initialAccount: string, initialBalance: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7PausableMock;
    connect(signer: Signer): KIP7PausableMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7PausableMock;
}
//# sourceMappingURL=KIP7PausableMock__factory.d.ts.map