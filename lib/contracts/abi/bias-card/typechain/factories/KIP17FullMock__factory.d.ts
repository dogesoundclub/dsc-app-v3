import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17FullMock } from "../KIP17FullMock";
export declare class KIP17FullMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, overrides?: Overrides): Promise<KIP17FullMock>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17FullMock;
    connect(signer: Signer): KIP17FullMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17FullMock;
}
//# sourceMappingURL=KIP17FullMock__factory.d.ts.map