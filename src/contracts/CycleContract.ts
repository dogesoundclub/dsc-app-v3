import { BigNumber, BigNumberish } from "ethers";
import CycleArtifact from "./abi/bias/artifacts/contracts/Cycle.sol/Cycle.json";
import Contract from "./Contract";

class CycleContract extends Contract {

    constructor() {
        super("0x704FFeCBa65a0642B5338141951CF712dCEB9676", CycleArtifact.abi);
    }

    public async startBlocks(id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("startBlocks", id));
    }

    public async levels(id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("levels", id));
    }

    public async claimableCount(id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("claimableCount", id));
    }

    public async claim(id: BigNumberish, count: BigNumberish) {
        await this.runWalletMethod("claim", id, count);
    }

    public async setLevel(id: BigNumberish, startBlock: BigNumberish, level: BigNumberish, signature: string) {
        await this.runWalletMethod("setLevel", id, startBlock, level, signature);
    }
}

export default new CycleContract();
