import { BigNumberish } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class DSCFamilyContract extends Contract {

    constructor() {
        super(Config.contracts.DSCFamily, require("./DSCFamilyABI.json"));
    }

    public async add(data: any): Promise<void> {
        await this.runWalletMethod("add", JSON.stringify(data));
    }

    public async get(id: BigNumberish): Promise<any> {
        return JSON.parse((await this.runMethod("infos", id))[1]);
    }

    public async update(id: BigNumberish, data: any): Promise<void> {
        await this.runWalletMethod("update", id, data);
    }

    public async remove(id: BigNumberish): Promise<void> {
        await this.runWalletMethod("remove", id);
    }
}

export default new DSCFamilyContract();
