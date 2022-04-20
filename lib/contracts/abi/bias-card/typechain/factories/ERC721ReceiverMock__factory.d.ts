import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { ERC721ReceiverMock } from "../ERC721ReceiverMock";
export declare class ERC721ReceiverMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(retval: BytesLike, overrides?: Overrides): Promise<ERC721ReceiverMock>;
    getDeployTransaction(retval: BytesLike, overrides?: Overrides): TransactionRequest;
    attach(address: string): ERC721ReceiverMock;
    connect(signer: Signer): ERC721ReceiverMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721ReceiverMock;
}
//# sourceMappingURL=ERC721ReceiverMock__factory.d.ts.map