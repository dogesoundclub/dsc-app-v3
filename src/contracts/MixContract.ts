import Config from "../Config";
import KIP7Contract from "./standard/KIP7Contract";

class MixContract extends KIP7Contract {

    constructor() {
        super(Config.contracts.Mix, require("./MixContractABI.json"));
    }
}

export default new MixContract();
