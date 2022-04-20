import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { ERC1155ReceiverMock } from "../ERC1155ReceiverMock";
export declare class ERC1155ReceiverMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides): Promise<ERC1155ReceiverMock>;
    getDeployTransaction(recRetval: BytesLike, recReverts: boolean, batRetval: BytesLike, batReverts: boolean, overrides?: Overrides): TransactionRequest;
    attach(address: string): ERC1155ReceiverMock;
    connect(signer: Signer): ERC1155ReceiverMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155ReceiverMock;
}
//# sourceMappingURL=ERC1155ReceiverMock__factory.d.ts.map