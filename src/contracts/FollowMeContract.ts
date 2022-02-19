import { BigNumberish } from "@ethersproject/bignumber";
import Config from "../Config";
import Contract from "./Contract";

class FollowMeContract extends Contract {

    constructor() {
        super(Config.contracts.FollowMe, require("./FollowMeContractABI.json"));
    }

    public async set(mates: string, mateId: BigNumberish, index: BigNumberish, link: string): Promise<void> {
        await this.runWalletMethod("set", mates, mateId, index, link);
    }

    public async followMe(mates: string, mateId: BigNumberish, index: BigNumberish): Promise<string> {
        return await this.runMethod("followMe", mates, mateId, index);
    }
}

export default new FollowMeContract();
