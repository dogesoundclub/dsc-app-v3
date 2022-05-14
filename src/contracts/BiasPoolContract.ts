import Config from "../Config";
import KIP17DividendContract from "./KIP17DividendContract";

class BiasPoolContract extends KIP17DividendContract {

    constructor() {
        super(Config.contracts.BiasPool, require("./MatesPoolContractABI.json"));
    }
}

export default new BiasPoolContract();
