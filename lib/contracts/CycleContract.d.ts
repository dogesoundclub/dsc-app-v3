import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class CycleContract extends Contract {
    constructor();
    claimableCount(id: BigNumberish): Promise<BigNumber>;
    claim(id: BigNumberish, count: BigNumberish): Promise<void>;
}
declare const _default: CycleContract;
export default _default;
//# sourceMappingURL=CycleContract.d.ts.map