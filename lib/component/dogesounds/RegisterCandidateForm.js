"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const DogeSoundContestV2Contract_1 = __importDefault(require("../../contracts/DogeSoundContestV2Contract"));
const MateContract_1 = __importDefault(require("../../contracts/MateContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("../../view/ViewUtil"));
const MateList_1 = __importDefault(require("../mate/MateList"));
const Alert_1 = __importDefault(require("../shared/dialogue/Alert"));
const CandidateList_1 = __importDefault(require("./CandidateList"));
class RegisterCandidateForm extends skynode_1.DomNode {
    constructor(round) {
        super(".register-candidate-form");
        this.round = round;
        this.append(new CandidateList_1.default(round), this.wallet = (0, skynode_1.el)(".wallet"), this.ownedMates = (0, skynode_1.el)(".owned-mates"), this.registableMates = (0, skynode_1.el)(".registable-mates"), (0, skynode_1.el)(".info", (0, msg_js_1.default)("DOGESOUNDS_VOTE_WARNING")), this.candidateInput = (0, skynode_1.el)("input.candidate-input", {
            placeholder: (0, msg_js_1.default)("DOGESOUNDS_CANDIDATE_INPUT"),
        }), this.selectedMates = (0, skynode_1.el)(".selected-mates", (0, msg_js_1.default)("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(0))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", `▶ ${(0, msg_js_1.default)("DOGESOUNDS_MAX_SELECT_BUTTON")}`, {
            click: () => this.mateList.maxSelect(),
        })), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", `▶ ${(0, msg_js_1.default)("DOGESOUNDS_DESELECT_BUTTON")}`, {
            click: () => this.mateList.deselect(),
        })), this.mateList = new MateList_1.default(true, false), (0, skynode_1.el)("a.submit-button", (0, msg_js_1.default)("DOGESOUNDS_REGISTER_SUBMIT"), {
            click: async () => {
                const candidateMateCount = (await DogeSoundContestV2Contract_1.default.getCandidateMateCount()).toNumber();
                if (this.mateList.selectedMateIds.length >= candidateMateCount) {
                    await DogeSoundContestV2Contract_1.default.registerCandidate(this.candidateInput.domElement.value, MateContract_1.default.address, this.mateList.selectedMateIds);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                }
                else {
                    new Alert_1.default((0, msg_js_1.default)("DOGESOUNDS_NEED_MORE_MATES_ERROR").replace(/{candidateCount}/, String(candidateMateCount)), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                }
            },
        }));
        this.mateList.on("selectMate", () => {
            this.selectedMates.empty().appendText((0, msg_js_1.default)("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(this.mateList.selectedMateIds.length)));
        });
        this.loadMates();
    }
    async loadMates() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            this.wallet.appendText(`- ${(0, msg_js_1.default)("DOGESOUNDS_WALLET_ADDRESS")} : `);
            this.wallet.append((0, skynode_1.el)("a", walletAddress, { href: `https://opensea.io/${walletAddress}`, target: "_blank" }));
            const mateBalance = (await MateContract_1.default.balanceOf(walletAddress)).toNumber();
            const votedMateCount = (await DogeSoundContestV2Contract_1.default.getUserVotes(this.round, walletAddress)).toNumber();
            const candidateMateCount = (await DogeSoundContestV2Contract_1.default.getCandidateMateCount()).toNumber();
            this.ownedMates.appendText(`- ${(0, msg_js_1.default)("DOGESOUNDS_OWNED_MATES_COUNT").replace(/{count}/, String(mateBalance))}`);
            this.registableMates.appendText(`- ${(0, msg_js_1.default)("DOGESOUNDS_REGISTABLE_MATES_COUNT").replace(/{count}/, String(mateBalance - votedMateCount)).replace(/{candidateCount}/, String(candidateMateCount))}`);
            const mates = [];
            const votedMates = [];
            const promises = [];
            for (let i = 0; i < mateBalance; i += 1) {
                const promise = async (index) => {
                    const mateId = (await MateContract_1.default.tokenOfOwnerByIndex(walletAddress, index)).toNumber();
                    mates.push(mateId);
                    if (await DogeSoundContestV2Contract_1.default.getMateVoted(this.round, MateContract_1.default.address, mateId) === true) {
                        votedMates.push(mateId);
                    }
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.mateList.load(mates, votedMates);
        }
    }
}
exports.default = RegisterCandidateForm;
//# sourceMappingURL=RegisterCandidateForm.js.map