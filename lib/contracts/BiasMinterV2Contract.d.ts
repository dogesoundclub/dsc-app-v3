import { BigNumber } from "ethers";
import Contract from "./Contract";
declare class BiasMinterV2Contract extends Contract {
    constructor();
    step(): Promise<BigNumber>;
    discountPrice(): Promise<BigNumber>;
    price(): Promise<BigNumber>;
    currentId(): Promise<BigNumber>;
    amount(): Promise<BigNumber>;
    discountList(user: string): Promise<boolean>;
    mint(count: number): Promise<void>;
}
declare const _default: BiasMinterV2Contract;
export default _default;
//# sourceMappingURL=BiasMinterV2Contract.d.ts.map