import { BigNumberish } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class ImageContract extends Contract {

    constructor() {
        super(Config.contracts.Image, require("./ImageContractABI.json"));
    }

    public async image(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("image", mateId);
    }
}

export default new ImageContract();
