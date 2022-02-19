import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
export interface MessageRecord {
    owner: string;
    name: string;
    message: string;
    blockNumber: string;
}
declare class MessageContract extends Contract {
    constructor();
    set(mateId: BigNumberish, message: string): Promise<void>;
    recordCount(mateId: BigNumberish): Promise<BigNumber>;
    record(mateId: BigNumberish, index: BigNumberish): Promise<MessageRecord>;
    remainBlocks(mateId: BigNumberish): Promise<BigNumber>;
    lastMessage(mateId: BigNumberish): Promise<string>;
}
declare const _default: MessageContract;
export default _default;
//# sourceMappingURL=MessageContract.d.ts.map