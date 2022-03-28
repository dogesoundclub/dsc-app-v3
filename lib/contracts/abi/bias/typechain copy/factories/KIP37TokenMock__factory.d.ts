import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP37TokenMock } from "../KIP37TokenMock";
export declare class KIP37TokenMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(uri: string, overrides?: Overrides): Promise<KIP37TokenMock>;
    getDeployTransaction(uri: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP37TokenMock;
    connect(signer: Signer): KIP37TokenMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37TokenMock;
}
//# sourceMappingURL=KIP37TokenMock__factory.d.ts.map