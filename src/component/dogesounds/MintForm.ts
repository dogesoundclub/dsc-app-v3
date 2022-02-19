import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import DogeSoundContestV2Contract from "../../contracts/DogeSoundContestV2Contract";
import Wallet from "../../klaytn/Wallet";

export default class MintForm extends DomNode {

    constructor(private round: number) {
        super(".mint-form");
        this.load();
    }

    private async load() {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {

            const elected = (await DogeSoundContestV2Contract.getElected(this.round)).toNumber();
            const winner = await DogeSoundContestV2Contract.getCandidateRegister(this.round, elected);

            if (walletAddress === winner) {
                this.append(
                    el("p", msg("DOGESOUNDS_WINNER_MENT").replace(/{round}/, String(this.round + 1))),
                    el("a.nft-mint-button", msg("DOGESOUNDS_WINNER_NFT_MINT_BUTTON"), {
                        click: async () => await DogeSoundContestV2Contract.mintWinnerNFT(this.round),
                    }),
                );
            }
        }
    }
}
