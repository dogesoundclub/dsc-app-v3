import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP13InterfacesSupported } from "../KIP13InterfacesSupported";
export declare class KIP13InterfacesSupported__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(interfaceIds: BytesLike[], overrides?: Overrides): Promise<KIP13InterfacesSupported>;
    getDeployTransaction(interfaceIds: BytesLike[], overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP13InterfacesSupported;
    connect(signer: Signer): KIP13InterfacesSupported__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP13InterfacesSupported;
}
//# sourceMappingURL=KIP13InterfacesSupported__factory.d.ts.map