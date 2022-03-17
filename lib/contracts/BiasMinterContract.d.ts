import { BigNumber } from "ethers";
import Contract from "./Contract";
declare class BiasMinterContract extends Contract {
    constructor();
    step(): Promise<BigNumber>;
    presalePrice(): Promise<BigNumber>;
    public1Price(): Promise<BigNumber>;
    public2Price(): Promise<BigNumber>;
    ticketPrice(): Promise<BigNumber>;
    calculatedPrice(): Promise<BigNumber>;
    currentId(): Promise<BigNumber>;
    presaleCount(): Promise<BigNumber>;
    public1Count(): Promise<BigNumber>;
    public2Count(): Promise<BigNumber>;
    ticketCount(): Promise<BigNumber>;
    presaleWhitelist(user: string): Promise<boolean>;
    ticketWhitelist(user: string): Promise<boolean>;
    mint(count: number): Promise<void>;
}
declare const _default: BiasMinterContract;
export default _default;
//# sourceMappingURL=BiasMinterContract.d.ts.map