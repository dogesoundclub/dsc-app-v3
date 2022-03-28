import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KIP17ReceiverMock } from "../KIP17ReceiverMock";
export declare class KIP17ReceiverMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(retval: BytesLike, overrides?: Overrides): Promise<KIP17ReceiverMock>;
    getDeployTransaction(retval: BytesLike, overrides?: Overrides): TransactionRequest;
    attach(address: string): KIP17ReceiverMock;
    connect(signer: Signer): KIP17ReceiverMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP17ReceiverMock;
}
//# sourceMappingURL=KIP17ReceiverMock__factory.d.ts.map