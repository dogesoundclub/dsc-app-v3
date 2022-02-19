import Config from "../Config";
import KIP17DividendContract from "./KIP17DividendContract";

class MatesPoolContract extends KIP17DividendContract {

    constructor() {
        super(Config.contracts.MatesPool, require("./MatesPoolContractABI.json"));
    }
}

export default new MatesPoolContract();
