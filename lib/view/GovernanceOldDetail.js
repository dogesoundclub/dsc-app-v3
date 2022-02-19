"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const marked_1 = __importDefault(require("marked"));
const msg_js_1 = __importDefault(require("msg.js"));
const xss_1 = __importDefault(require("xss"));
const MateList_1 = __importDefault(require("../component/mate/MateList"));
const Confirm_1 = __importDefault(require("../component/shared/dialogue/Confirm"));
const MateContract_1 = __importDefault(require("../contracts/MateContract"));
const VoteContract_1 = __importDefault(require("../contracts/VoteContract"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class GovernanceOldDetail {
    constructor(params) {
        Layout_1.default.current.title = (0, msg_js_1.default)("GOVERNANCE_TITLE1");
        let forRadio;
        let againstRadio;
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".governance-detail-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("GOVERNANCE_TITLE1"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("header", (0, skynode_1.el)("h2", "DIP-17: Management of Mate Price Stabilization Fund (tentative name)"), (0, skynode_1.el)("p", "0 block left until the voting is over."), (0, skynode_1.el)(".caption-container", (0, skynode_1.el)(".status", "Proposal result: Orientation"), (0, skynode_1.el)("p", "Agreement 1766"), (0, skynode_1.el)("p", "Opposition 521"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".content", (0, skynode_1.el)(".tool-container", (0, skynode_1.el)("h3", "Suggestion generation tool:"), (0, skynode_1.el)("p", "A fund management proposal to purchase the mate of the largest holder through a block deal.")), (0, skynode_1.el)(".body-container", (0, skynode_1.el)("h3", "Body:"), (0, skynode_1.el)("p", "A fund management proposal to purchase the mate of the largest holder through a block deal.")), (0, skynode_1.el)(".remarks", "Remarks:"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".proposer-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("GOVERNANCE_CREATE_TITLE1")), (0, skynode_1.el)(".address", "0x5768218dae8c5658d0B1e466c07199393B089078"), (0, skynode_1.el)("p", "- Wallet Address: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE2")), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE3")))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".submit-container", (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_TABLE_VOTE_DESC2"))), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_TABLE_VOTE_DESC2")))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", (0, msg_js_1.default)("VOTE_BUTTON"))), this.content = (0, skynode_1.el)(".content"), this.voteForm = (0, skynode_1.el)(".vote-form", this.wallet = (0, skynode_1.el)(".wallet"), this.ownedMates = (0, skynode_1.el)(".owned-mates"), this.votableMates = (0, skynode_1.el)(".votable-mates"), this.selectedMates = (0, skynode_1.el)(".selected-mates", (0, msg_js_1.default)("GOVERNANCE_SELECTED_MATES_COUNT").replace(/{count}/, String(0))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", `▶ ${(0, msg_js_1.default)("GOVERNANCE_MAX_SELECT_BUTTON")}`, {
            click: () => this.mateList.maxSelect(30),
        })), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", `▶ ${(0, msg_js_1.default)("GOVERNANCE_DESELECT_BUTTON")}`, {
            click: () => this.mateList.deselect(),
        })), this.mateList = new MateList_1.default(true, false), (0, skynode_1.el)(".select", (0, skynode_1.el)("label.for", (0, skynode_1.el)("span.title", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_VOTE_FOR")), forRadio = (0, skynode_1.el)("input", {
            name: "governance-radio",
            type: "radio",
        })), (0, skynode_1.el)("label.against", (0, skynode_1.el)("span.title", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_VOTE_AGAINST")), againstRadio = (0, skynode_1.el)("input", {
            name: "governance-radio",
            type: "radio",
        }))), (0, skynode_1.el)("a.vote-button", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_VOTE_BUTTON"), {
            click: async () => {
                if (this.proposalId !== undefined) {
                    if (forRadio.domElement.checked === true) {
                        await VoteContract_1.default.voteFor(this.proposalId, MateContract_1.default.address, this.mateList.selectedMateIds);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                    if (againstRadio.domElement.checked === true) {
                        await VoteContract_1.default.voteAgainst(this.proposalId, MateContract_1.default.address, this.mateList.selectedMateIds);
                        ViewUtil_1.default.waitTransactionAndRefresh();
                    }
                }
            },
        })))));
        this.load(params.id);
        this.mateList.on("selectMate", () => {
            this.selectedMates.empty().appendText((0, msg_js_1.default)("GOVERNANCE_SELECTED_MATES_COUNT").replace(/{count}/, String(this.mateList.selectedMateIds.length)));
        });
    }
    async load(id) {
        this.proposalId = parseInt(id, 10);
        const proposal = await VoteContract_1.default.getProposal(id);
        const title = (0, skynode_1.el)("h1", (0, skynode_1.el)("span", `DIP-${this.proposalId}: ${proposal.title}`)).appendTo(this.content);
        if (proposal.executed === true) {
            title.append((0, skynode_1.el)(".result.executed", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_EXECUTED")} -`));
        }
        else {
            const result = await VoteContract_1.default.getResult(id);
            if (result === VoteContract_1.default.VOTING) {
                title.append((0, skynode_1.el)(".result.voting", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_VOTING")} -`));
            }
            else if (result === VoteContract_1.default.CANCELED) {
                title.append((0, skynode_1.el)(".result.canceled", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_CANCELED")} -`));
            }
            else if (result === VoteContract_1.default.RESULT_SAME) {
                title.append((0, skynode_1.el)(".result.same", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_RESULT_SAME")} -`));
            }
            else if (result === VoteContract_1.default.RESULT_FOR) {
                title.append((0, skynode_1.el)(".result.for", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_RESULT_FOR")} -`));
            }
            else if (result === VoteContract_1.default.RESULT_AGAINST) {
                title.append((0, skynode_1.el)(".result.against", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_RESULT_AGAINST")} -`));
            }
        }
        const currentBlock = await Klaytn_1.default.loadBlockNumber();
        let remains = proposal.votePeriod - (currentBlock - proposal.blockNumber);
        if (remains < 0) {
            remains = 0;
        }
        const timer = (0, skynode_1.el)(".timer", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_REMAIN_BLOCKS").replace(/{block}/, String(proposal.votePeriod - (currentBlock - proposal.blockNumber)))).appendTo(this.content);
        timer.empty().appendText((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_REMAIN_BLOCKS").replace(/{block}/, String(remains)));
        if (remains > 0) {
            this.timerInterval = setInterval(async () => {
                const currentBlock = await Klaytn_1.default.loadBlockNumber();
                const remains = proposal.votePeriod - (currentBlock - proposal.blockNumber);
                if (remains <= 1) {
                    ViewUtil_1.default.waitTransactionAndRefresh();
                    clearInterval(this.timerInterval);
                }
                else {
                    timer.empty().appendText((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_REMAIN_BLOCKS").replace(/{block}/, String(remains)));
                }
            }, 1000);
        }
        const voteCounts = (0, skynode_1.el)(".vote-counts").appendTo(this.content);
        voteCounts.append((0, skynode_1.el)(".for-votes", (0, skynode_1.el)("span.title", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_VOTE_FOR")), (0, skynode_1.el)("span.count", String(await VoteContract_1.default.getForVotes(id)))));
        voteCounts.append((0, skynode_1.el)(".against-votes", (0, skynode_1.el)("span.title", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_VOTE_AGAINST")), (0, skynode_1.el)("span.count", String(await VoteContract_1.default.getAgainstVotes(id)))));
        let content;
        this.content.append((0, skynode_1.el)("h2", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_SUMMARY")), (0, skynode_1.el)("p", proposal.summary), (0, skynode_1.el)("h2", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_CONTENT")), content = (0, skynode_1.el)(".content.markdown-body"), (0, skynode_1.el)("h2", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_NOTE")), (0, skynode_1.el)("p", proposal.note), (0, skynode_1.el)("h2", (0, msg_js_1.default)("GOVERNANCE_PROPOSAL_PROPOSER")), (0, skynode_1.el)("p", proposal.proposer));
        content.domElement.innerHTML = this.proposalId === 2 ? proposal.content.replace(/\n/g, "<br>") : (0, xss_1.default)((0, marked_1.default)(proposal.content));
        if (remains > 0) {
            const walletAddress = await Wallet_1.default.loadAddress();
            if (walletAddress !== undefined) {
                if (walletAddress === proposal.proposer) {
                    this.content.append((0, skynode_1.el)("a.cancel-button", (0, msg_js_1.default)("GOVERNANCE_CANCEL_PROPOSAL_BUTTON"), {
                        click: async () => {
                            new Confirm_1.default((0, msg_js_1.default)("GOVERNANCE_CANCEL_PROPOSAL_WARNING"), (0, msg_js_1.default)("GOVERNANCE_CANCEL_PROPOSAL_BUTTON"), async () => {
                                if (this.proposalId !== undefined) {
                                    await VoteContract_1.default.cancel(this.proposalId);
                                    ViewUtil_1.default.waitTransactionAndRefresh();
                                }
                            });
                        },
                    }));
                }
                this.wallet.appendText(`- ${(0, msg_js_1.default)("GOVERNANCE_WALLET_ADDRESS")} : `);
                this.wallet.append((0, skynode_1.el)("a", walletAddress, { href: `https://opensea.io/${walletAddress}`, target: "_blank" }));
                const mateBalance = (await MateContract_1.default.balanceOf(walletAddress)).toNumber();
                this.ownedMates.appendText(`- ${(0, msg_js_1.default)("GOVERNANCE_OWNED_MATES_COUNT").replace(/{count}/, String(mateBalance))}`);
                const mates = [];
                const votedMates = [];
                const promises = [];
                for (let i = 0; i < mateBalance; i += 1) {
                    const promise = async (index) => {
                        const mateId = (await MateContract_1.default.tokenOfOwnerByIndex(walletAddress, index)).toNumber();
                        mates.push(mateId);
                        if (await VoteContract_1.default.getMateVoted(id, MateContract_1.default.address, mateId) === true) {
                            votedMates.push(mateId);
                        }
                    };
                    promises.push(promise(i));
                }
                await Promise.all(promises);
                this.votableMates.appendText(`- ${(0, msg_js_1.default)("GOVERNANCE_VOTABLE_MATES_COUNT").replace(/{count}/, String(mateBalance - votedMates.length))}`);
                this.mateList.load(mates, votedMates);
            }
            else {
                this.voteForm.style({ display: "none" });
            }
        }
        else {
            this.voteForm.style({ display: "none" });
            const walletAddress = await Wallet_1.default.loadAddress();
            if (walletAddress === proposal.proposer && await VoteContract_1.default.matesBacked(this.proposalId) !== true) {
                this.container.append((0, skynode_1.el)("a.get-back-mates-button", (0, msg_js_1.default)("GOVERNANCE_GET_BACK_MATES_BUTTON"), {
                    click: async () => {
                        if (this.proposalId !== undefined) {
                            await VoteContract_1.default.getBackMates(this.proposalId);
                            ViewUtil_1.default.waitTransactionAndRefresh();
                        }
                    },
                }));
            }
        }
    }
    changeParams(params, uri) {
        this.load(params.id);
    }
    close() {
        if (this.timerInterval !== undefined) {
            clearInterval(this.timerInterval);
        }
        this.container.delete();
    }
}
exports.default = GovernanceOldDetail;
//# sourceMappingURL=GovernanceOldDetail.js.map