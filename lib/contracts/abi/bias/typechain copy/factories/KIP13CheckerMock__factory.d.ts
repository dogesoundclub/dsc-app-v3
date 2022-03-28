import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP13CheckerMock } from "../KIP13CheckerMock";
export declare class KIP13CheckerMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP13CheckerMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP13CheckerMock;
    connect(signer: Signer): KIP13CheckerMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP13CheckerMock;
}
//# sourceMappingURL=KIP13CheckerMock__factory.d.ts.map