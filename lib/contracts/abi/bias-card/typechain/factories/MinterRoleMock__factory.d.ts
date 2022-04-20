import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { MinterRoleMock } from "../MinterRoleMock";
export declare class MinterRoleMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MinterRoleMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MinterRoleMock;
    connect(signer: Signer): MinterRoleMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MinterRoleMock;
}
//# sourceMappingURL=MinterRoleMock__factory.d.ts.map