import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37BurnableMock } from "../KIP37BurnableMock";
export declare class KIP37BurnableMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(uri: string, overrides?: Overrides): Promise<KIP37BurnableMock>;
    getDeployTransaction(uri: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37BurnableMock;
    connect(signer: Signer): KIP37BurnableMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37BurnableMock;
}
//# sourceMappingURL=KIP37BurnableMock__factory.d.ts.map