import { BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
declare class FollowMeContract extends Contract {
    constructor();
    set(mates: string, mateId: BigNumberish, index: BigNumberish, link: string): Promise<void>;
    followMe(mates: string, mateId: BigNumberish, index: BigNumberish): Promise<string>;
}
declare const _default: FollowMeContract;
export default _default;
//# sourceMappingURL=FollowMeContract.d.ts.map