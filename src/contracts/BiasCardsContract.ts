import BiasCardsArtifact from "./abi/bias-card/artifacts/contracts/BiasCards.sol/BiasCards.json";
import KIP37Contract from "./standard/KIP37Contract";

class BiasCardsContract extends KIP37Contract {

    constructor() {
        super("0x542e98A99B5A0aAa0D4Ddfd9Ae582a1b05008Ac8", BiasCardsArtifact.abi);
    }
}

export default new BiasCardsContract();
