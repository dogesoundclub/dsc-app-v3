import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7MintableMock } from "../KIP7MintableMock";
export declare class KIP7MintableMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KIP7MintableMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7MintableMock;
    connect(signer: Signer): KIP7MintableMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7MintableMock;
}
//# sourceMappingURL=KIP7MintableMock__factory.d.ts.map