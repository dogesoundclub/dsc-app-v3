import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { PauserRoleMock } from "../PauserRoleMock";
export declare class PauserRoleMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PauserRoleMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PauserRoleMock;
    connect(signer: Signer): PauserRoleMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PauserRoleMock;
}
//# sourceMappingURL=PauserRoleMock__factory.d.ts.map