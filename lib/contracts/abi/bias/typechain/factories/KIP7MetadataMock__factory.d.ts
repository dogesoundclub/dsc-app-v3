import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP7MetadataMock } from "../KIP7MetadataMock";
export declare class KIP7MetadataMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name: string, symbol: string, decimals: BigNumberish, overrides?: Overrides): Promise<KIP7MetadataMock>;
    getDeployTransaction(name: string, symbol: string, decimals: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP7MetadataMock;
    connect(signer: Signer): KIP7MetadataMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP7MetadataMock;
}
//# sourceMappingURL=KIP7MetadataMock__factory.d.ts.map