import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import Contract from "../Contract";
export default class KIP37Contract extends Contract {
    constructor(address: string, abi?: ContractInterface);
    balanceOf(owner: string, id: BigNumberish): Promise<BigNumber>;
    isApprovedForAll(owner: string, operator: string): Promise<boolean>;
    setApprovalForAll(operator: string, approved: boolean): Promise<void>;
}
//# sourceMappingURL=KIP37Contract.d.ts.map