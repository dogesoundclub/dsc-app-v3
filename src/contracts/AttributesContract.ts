import { BigNumberish } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class AttributesContract extends Contract {

    constructor() {
        super(Config.contracts.Attributes, require("./AttributesContractABI.json"));
    }

    public async level(mateId: BigNumberish): Promise<number> {
        return await this.runMethod("level", mateId);
    }

    public async face(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("face", mateId);
    }

    public async faceDetailA(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("faceDetailA", mateId);
    }

    public async faceDetailB(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("faceDetailB", mateId);
    }

    public async neck(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("neck", mateId);
    }

    public async mouth(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("mouth", mateId);
    }

    public async eyes(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("eyes", mateId);
    }

    public async forehead(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("forehead", mateId);
    }

    public async headwear(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("headwear", mateId);
    }

    public async headwearDetail(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("headwearDetail", mateId);
    }

    public async ears(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("ears", mateId);
    }

    public async items(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("items", mateId);
    }
}

export default new AttributesContract();
