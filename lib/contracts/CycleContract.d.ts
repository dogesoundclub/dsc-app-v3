import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class CycleContract extends Contract {
    constructor();
    startBlocks(id: BigNumberish): Promise<BigNumber>;
    levels(id: BigNumberish): Promise<BigNumber>;
    claimableCount(id: BigNumberish): Promise<BigNumber>;
    claim(id: BigNumberish, count: BigNumberish): Promise<void>;
    setLevel(id: BigNumberish, startBlock: BigNumberish, level: BigNumberish, signature: string): Promise<void>;
}
declare const _default: CycleContract;
export default _default;
//# sourceMappingURL=CycleContract.d.ts.map