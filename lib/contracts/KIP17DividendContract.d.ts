import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import Contract from "./Contract";
export default abstract class KIP17DividendContract extends Contract {
    constructor(address: string, abi?: ContractInterface);
    claimableOf(id: BigNumberish): Promise<BigNumber>;
    claim(ids: BigNumberish[]): Promise<void>;
}
//# sourceMappingURL=KIP17DividendContract.d.ts.map