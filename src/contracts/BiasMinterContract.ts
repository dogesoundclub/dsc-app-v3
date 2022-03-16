import BiasMinterArtifact from "./abi/bias/artifacts/contracts/BiasMinter.sol/BiasMinter.json";
import Contract from "./Contract";

class BiasMinterContract extends Contract {

    constructor() {
        super("0x57F683176B833e04880844c2dFdD94Bd5974CaD6", BiasMinterArtifact.abi);
    }
}

export default new BiasMinterContract();
