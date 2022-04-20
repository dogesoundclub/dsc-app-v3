import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SupportsInterfaceWithLookupMock } from "../SupportsInterfaceWithLookupMock";
export declare class SupportsInterfaceWithLookupMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SupportsInterfaceWithLookupMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SupportsInterfaceWithLookupMock;
    connect(signer: Signer): SupportsInterfaceWithLookupMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SupportsInterfaceWithLookupMock;
}
//# sourceMappingURL=SupportsInterfaceWithLookupMock__factory.d.ts.map