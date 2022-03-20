"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const DogeSoundContestV2Contract_1 = __importDefault(require("../../../../contracts/DogeSoundContestV2Contract"));
const Wallet_1 = __importDefault(require("../../../../klaytn/Wallet"));
class MintForm extends skynode_1.DomNode {
    constructor(round) {
        super(".mint-form");
        this.round = round;
        this.load();
    }
    async load() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const elected = (await DogeSoundContestV2Contract_1.default.getElected(this.round)).toNumber();
            const winner = await DogeSoundContestV2Contract_1.default.getCandidateRegister(this.round, elected);
            if (walletAddress === winner) {
                this.append((0, skynode_1.el)("p", (0, msg_js_1.default)("DOGESOUNDS_WINNER_MENT").replace(/{round}/, String(this.round + 1))), (0, skynode_1.el)("a.nft-mint-button", (0, msg_js_1.default)("DOGESOUNDS_WINNER_NFT_MINT_BUTTON"), {
                    click: async () => await DogeSoundContestV2Contract_1.default.mintWinnerNFT(this.round),
                }));
            }
        }
    }
}
exports.default = MintForm;
//# sourceMappingURL=MintForm.js.map