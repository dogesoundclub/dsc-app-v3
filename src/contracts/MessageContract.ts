import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

export interface MessageRecord {
    owner: string,
    name: string,
    message: string,
    blockNumber: string,
}

class MessageContract extends Contract {

    constructor() {
        super(Config.contracts.Message, require("./MessageContractABI.json"));
    }

    public async set(mateId: BigNumberish, message: string): Promise<void> {
        await this.runWalletMethod("set", mateId, message);
    }

    public async recordCount(mateId: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("recordCount", mateId));
    }

    public async record(mateId: BigNumberish, index: BigNumberish): Promise<MessageRecord> {
        const result = await this.runMethod("record", mateId, index);
        return {
            owner: result[0],
            name: result[1],
            message: result[2],
            blockNumber: result[3],
        };
    }

    public async remainBlocks(mateId: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("remainBlocks", mateId));
    }

    public async lastMessage(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("lastMessage", mateId);
    }
}

export default new MessageContract();
