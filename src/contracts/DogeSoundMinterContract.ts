import Config from "../Config";
import Contract from "./Contract";

class DogeSoundMinterContract extends Contract {

    constructor() {
        super(Config.contracts.DogeSoundMinter, require("./DogeSoundMinterABI.json"));
    }

    public async mintWinnerNFT(round: number, dogesound: string, signature: string): Promise<void> {
        await this.runWalletMethod("mintWinnerNFT", round, dogesound, signature);
    }
}

export default new DogeSoundMinterContract();
