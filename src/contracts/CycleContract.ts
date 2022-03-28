import { BigNumber, BigNumberish } from "ethers";
import CycleArtifact from "./abi/bias/artifacts/contracts/Cycle.sol/Cycle.json";
import Contract from "./Contract";

class CycleContract extends Contract {

    constructor() {
        super("0x7cB36e323AEfE379F6F59694496f5a5AbcE8758d", CycleArtifact.abi);
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
}

export default new CycleContract();
