import { BigNumber, BigNumberish } from "ethers";
import Wallet from "../klaytn/Wallet";
import BiasArtifact from "./abi/bias/artifacts/contracts/Bias.sol/Bias.json";
import Contract from "./Contract";

class BiasContract extends Contract {

    constructor() {
        super("0xDeDd727ab86bce5D416F9163B2448860BbDE86d4", BiasArtifact.abi);
    }

    public async ownerOf(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("ownerOf", mateId);
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner));
    }

    public async tokenOfOwnerByIndex(owner: string, index: number): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }

    public async transfer(to: string, mateId: BigNumberish) {
        await this.runWalletMethod("transferFrom", await Wallet.loadAddress(), to, mateId);
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }

    public async setApprovalForAll(operator: string, approved: boolean) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }
}

export default new BiasContract();
