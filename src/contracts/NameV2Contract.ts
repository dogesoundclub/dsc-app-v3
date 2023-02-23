import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class NameV2Contract extends Contract {

    constructor() {
        super(Config.contracts.NameV2, require("./NameV2ContractABI.json"));
    }

    // public async getMIXForChanging(): Promise<BigNumber> {
    //     return BigNumber.from(await this.runMethod("mixForChanging"));
    // }
    
    // public async getMIXForDeleting(): Promise<BigNumber> {
    //     return BigNumber.from(await this.runMethod("mixForDeleting"));
    // }

    public async set(nft: string, mateId: Number, name: string): Promise<void> {
        await this.runWalletMethod("set", nft, mateId, name);
    }

    public async remove(nft: string, mateId: Number): Promise<void> {
        await this.runWalletMethod("remove", nft, mateId);
    }

    public async exists(name: string): Promise<boolean> {
        return await this.runMethod("exists", name);
    }

    public async names(nft: string, mateId: Number): Promise<string> {
        return await this.runMethod("names", nft, mateId);
    }

    public async named(nft: string, mateId: Number): Promise<boolean> {
        return await this.runMethod("named", nft, mateId);
    }
}

export default new NameV2Contract();
