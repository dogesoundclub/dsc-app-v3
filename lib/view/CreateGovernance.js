"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const msg_js_1 = __importDefault(require("msg.js"));
const MateList_1 = __importDefault(require("../component/mate/MateList"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const Confirm_1 = __importDefault(require("../component/shared/dialogue/Confirm"));
const DSCGovernanceV3Contract_1 = __importDefault(require("../contracts/DSCGovernanceV3Contract"));
const MateContract_1 = __importDefault(require("../contracts/MateContract"));
const MixContract_1 = __importDefault(require("../contracts/MixContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class CreateGovernance {
    constructor() {
        this.connectHandler = () => {
            this.load();
        };
        Layout_1.default.current.title = (0, msg_js_1.default)("GOVERNANCE_TITLE1");
        let titleInput;
        let periodInput;
        let summaryInput;
        let contentInput;
        let noteInput;
        let termCheckbox;
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-governance-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("GOVERNANCE_TITLE1")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("GOVERNANCE_DESC1"))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE1")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC1") })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE2")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC2") })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Summary"), (0, skynode_1.el)("textarea.summary", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE3"), type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Text"), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_TITLE4")), (0, skynode_1.el)("textarea.text", { placeholder: (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC3"), type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_INPUT_DESC7")), (0, skynode_1.el)("textarea")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".proposer-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("GOVERNANCE_CREATE_TITLE1")), this.proposer = (0, skynode_1.el)(".address"), this.wallet = (0, skynode_1.el)(".wallet"), this.ownedMates = (0, skynode_1.el)(".owned-mates"), (0, skynode_1.el)("p", (0, msg_js_1.default)("GOVERNANCE_CREATE_DESC8"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE2")), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_SELECT_TITLE3")))), this.selectedMates = (0, skynode_1.el)(".selected-mates", (0, msg_js_1.default)("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(0))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", `▶ ${(0, msg_js_1.default)("DOGESOUNDS_MAX_SELECT_BUTTON")}`, {
            click: () => this.mateList.maxSelect(25),
        })), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", `▶ ${(0, msg_js_1.default)("DOGESOUNDS_DESELECT_BUTTON")}`, {
            click: () => this.mateList.deselect(),
        })), this.mateList = new MateList_1.default(true, false), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".checkbox-container", termCheckbox = (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("GOVERNANCE_CREATE_CHECKBOX_DESC"))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", (0, msg_js_1.default)("REGISTER_BUTTON"), {
            click: async () => {
                if (termCheckbox.domElement.checked === true) {
                    new Confirm_1.default((0, msg_js_1.default)("GOVERNANCE_PROPOSE_SUBMIT_CONFIRM"), (0, msg_js_1.default)("CONFIRM_BUTTON"), async () => {
                        const owner = await Wallet_1.default.loadAddress();
                        if (owner !== undefined) {
                            const mixNeeded = await DSCGovernanceV3Contract_1.default.getProposePrice();
                            const balance = await MixContract_1.default.balanceOf(owner);
                            if (balance.lt(mixNeeded)) {
                                new Confirm_1.default(`${String(parseInt(ethers_1.utils.formatEther(mixNeeded), 10))} 믹스가 필요합니다.`, "믹스 구매", () => {
                                    open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                                });
                            }
                            else if ((await MixContract_1.default.allowance(owner, DSCGovernanceV3Contract_1.default.address)).lt(mixNeeded)) {
                                await MixContract_1.default.approve(DSCGovernanceV3Contract_1.default.address, ethers_1.constants.MaxUint256);
                                setTimeout(async () => {
                                    const minProposePeriod = (await DSCGovernanceV3Contract_1.default.getMinProposePeriod()).toNumber();
                                    const maxProposePeriod = (await DSCGovernanceV3Contract_1.default.getMaxProposePeriod()).toNumber();
                                    const proposeMateCount = (await DSCGovernanceV3Contract_1.default.getProposeMateCount()).toNumber();
                                    const period = parseInt(periodInput.domElement.value, 10);
                                    if (period < minProposePeriod) {
                                        new Alert_1.default((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_MIN_PERIOD_ERROR").replace(/{block}/, String(minProposePeriod)), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                                    }
                                    else if (period > maxProposePeriod) {
                                        new Alert_1.default((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_MAX_PERIOD_ERROR").replace(/{block}/, String(maxProposePeriod)), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                                    }
                                    else if (this.mateList.selectedMateIds.length !== proposeMateCount) {
                                        new Alert_1.default((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_NEED_MORE_MATES_ERROR").replace(/{proposeMateCount}/, String(proposeMateCount)), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                                    }
                                    else {
                                        if (await MateContract_1.default.isApprovedForAll(owner, DSCGovernanceV3Contract_1.default.address) !== true) {
                                            await MateContract_1.default.setApprovalForAll(DSCGovernanceV3Contract_1.default.address, true);
                                        }
                                        await DSCGovernanceV3Contract_1.default.propose(titleInput.domElement.value, summaryInput.domElement.value, contentInput.domElement.value, noteInput.domElement.value, periodInput.domElement.value, MateContract_1.default.address, this.mateList.selectedMateIds);
                                        setTimeout(() => ViewUtil_1.default.go("/governance"), 2000);
                                    }
                                }, 2000);
                            }
                            else {
                                const minProposePeriod = (await DSCGovernanceV3Contract_1.default.getMinProposePeriod()).toNumber();
                                const maxProposePeriod = (await DSCGovernanceV3Contract_1.default.getMaxProposePeriod()).toNumber();
                                const proposeMateCount = (await DSCGovernanceV3Contract_1.default.getProposeMateCount()).toNumber();
                                const period = parseInt(periodInput.domElement.value, 10);
                                if (period < minProposePeriod) {
                                    new Alert_1.default((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_MIN_PERIOD_ERROR").replace(/{block}/, String(minProposePeriod)), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                                }
                                else if (period > maxProposePeriod) {
                                    new Alert_1.default((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_MAX_PERIOD_ERROR").replace(/{block}/, String(maxProposePeriod)), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                                }
                                else if (this.mateList.selectedMateIds.length !== proposeMateCount) {
                                    new Alert_1.default((0, msg_js_1.default)("GOVERNANCE_PROPOSAL_NEED_MORE_MATES_ERROR").replace(/{proposeMateCount}/, String(proposeMateCount)), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                                }
                                else {
                                    if (await MateContract_1.default.isApprovedForAll(owner, DSCGovernanceV3Contract_1.default.address) !== true) {
                                        await MateContract_1.default.setApprovalForAll(DSCGovernanceV3Contract_1.default.address, true);
                                    }
                                    await DSCGovernanceV3Contract_1.default.propose(titleInput.domElement.value, summaryInput.domElement.value, contentInput.domElement.value, noteInput.domElement.value, periodInput.domElement.value, MateContract_1.default.address, this.mateList.selectedMateIds);
                                    setTimeout(() => ViewUtil_1.default.go("/governance"), 2000);
                                }
                            }
                        }
                    });
                }
            },
        })))));
        this.load();
        Wallet_1.default.on("connect", this.connectHandler);
        this.mateList.on("selectMate", () => {
            this.selectedMates.empty().appendText((0, msg_js_1.default)("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(this.mateList.selectedMateIds.length)));
        });
        this.loadMates();
    }
    async load() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            this.proposer.empty().appendText(owner);
        }
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
            this.ownedMates.appendText(`- ${(0, msg_js_1.default)("DOGESOUNDS_OWNED_MATES_COUNT").replace(/{count}/, String(mateBalance))}`);
            const mates = [];
            const promises = [];
            for (let i = 0; i < mateBalance; i += 1) {
                const promise = async (index) => {
                    const mateId = (await MateContract_1.default.tokenOfOwnerByIndex(walletAddress, index)).toNumber();
                    mates.push(mateId);
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.mateList.load(mates);
        }
    }
    changeParams(params, uri) { }
    close() {
        Wallet_1.default.off("connect", this.connectHandler);
        this.container.delete();
    }
}
exports.default = CreateGovernance;
//# sourceMappingURL=CreateGovernance.js.map