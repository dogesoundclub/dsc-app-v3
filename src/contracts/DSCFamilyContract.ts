import { BigNumber, BigNumberish, constants } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class DSCFamilyContract extends Contract {

    constructor() {
        super(Config.contracts.DSCFamily, require("./DSCFamilyABI.json"));
    }

    public async add(data: any): Promise<void> {
        await this.runWalletMethod("add", JSON.stringify(data));
    }

    public async count(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("count"));
    }

    public async get(id: BigNumberish): Promise<any> {
        const info = await this.runMethod("infos", id);
        if (info[0] === constants.AddressZero) {
            return undefined;
        }
        const data = JSON.parse(info[1]);
        data.owner = info[0];
        return data;
    }

    public async update(id: BigNumberish, data: any): Promise<void> {
        await this.runWalletMethod("update", id, JSON.stringify(data));
    }

    public async remove(id: BigNumberish): Promise<void> {
        await this.runWalletMethod("remove", id);
    }
}

export default new DSCFamilyContract();
