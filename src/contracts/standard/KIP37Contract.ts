import { BigNumber, BigNumberish, ContractInterface } from "ethers";
import KIP37Artifact from "../abi/klubs/artifacts/contracts/klaytn-contracts/token/KIP37/KIP37.sol/KIP37.json";
import Contract from "../Contract";

export default class KIP37Contract extends Contract {

    constructor(address: string, abi?: ContractInterface) {
        super(address, abi === undefined ? KIP37Artifact.abi : abi);
    }

    public async balanceOf(owner: string, id: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner, id));
    }

    public async isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return await this.runMethod("isApprovedForAll", owner, operator);
    }

    public async setApprovalForAll(operator: string, approved: boolean) {
        await this.runWalletMethod("setApprovalForAll", operator, approved);
    }
}
