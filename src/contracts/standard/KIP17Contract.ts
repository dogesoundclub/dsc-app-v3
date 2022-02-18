import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import Wallet from "../../klaytn/Wallet";
import KIP17Artifact from "../abi/klubs/artifacts/contracts/klaytn-contracts/token/KIP17/KIP17Full.sol/KIP17Full.json";
import Contract from "../Contract";

export default class KIP17Contract extends Contract {

    constructor(address: string, abi?: ContractInterface) {
        super(address, abi === undefined ? KIP17Artifact.abi : abi);
    }

    public async ownerOf(mateId: BigNumberish): Promise<string> {
        return await this.runMethod("ownerOf", mateId);
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner));
    }

    public async transfer(to: string, id: BigNumberish) {
        await this.runWalletMethod("transferFrom", await Wallet.loadAddress(), to, id);
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }

    public async setApprovalForAll(operator: string, approved: boolean) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }

    public async tokenURI(id: BigNumberish): Promise<string> {
        return await this.runMethod("tokenURI", id);
    }

    public async tokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }
}
