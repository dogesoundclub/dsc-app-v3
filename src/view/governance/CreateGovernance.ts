import { DomNode, el } from "@hanul/skynode";
import { constants, utils } from "ethers";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import MateList from "../../component/mate/MateList";
import Alert from "../../component/shared/dialogue/Alert";
import Confirm from "../../component/shared/dialogue/Confirm";
import DSCGovernanceV3Contract from "../../contracts/DSCGovernanceV3Contract";
import MateContract from "../../contracts/MateContract";
import MixContract from "../../contracts/MixContract";
import Wallet from "../../klaytn/Wallet";
import Layout from "../Layout";
import ViewUtil from "../ViewUtil";

export default class CreateGovernance implements View {

    private container: DomNode;
    private proposer: DomNode;
    private wallet: DomNode;
    private ownedMates: DomNode;
    private selectedMates: DomNode;
    private mateList: MateList;

    constructor() {
        Layout.current.title = msg("GOVERNANCE_TITLE1");

        let titleInput: DomNode<HTMLInputElement>;
        let periodInput: DomNode<HTMLInputElement>;
        let summaryInput: DomNode<HTMLTextAreaElement>;
        let contentInput: DomNode<HTMLTextAreaElement>;
        let noteInput: DomNode<HTMLTextAreaElement>;
        let termCheckbox: DomNode<HTMLInputElement>;

        Layout.current.content.append(this.container = el(".create-governance-view",
            el("header",
                el("h1", msg("GOVERNANCE_TITLE1")),
                el("h2", msg("GOVERNANCE_DESC1")),
            ),
            el("section",
                el("hr"),
                el(".input-container",
                    el("label", msg("GOVERNANCE_CREATE_INPUT_TITLE1")),
                    el("input", { placeholder: msg("GOVERNANCE_CREATE_INPUT_DESC1") }),
                ),
                el(".input-container",
                    el("label", msg("GOVERNANCE_CREATE_INPUT_TITLE2")),
                    el("input", { placeholder: msg("GOVERNANCE_CREATE_INPUT_DESC2") }),
                ),
                el(".input-container",
                    el("label", "Summary"),
                    el("textarea.summary", { placeholder: msg("GOVERNANCE_CREATE_INPUT_TITLE3"), type: "text" }),
                ),
                el(".input-container",
                    el("label", "Text"),
                    el("label", msg("GOVERNANCE_CREATE_INPUT_TITLE4")),
                    el("textarea.text", { placeholder: msg("GOVERNANCE_CREATE_INPUT_DESC3"), type: "text" }),
                ),
                el(".input-container",
                    el("label", msg("GOVERNANCE_CREATE_INPUT_DESC7")),
                    el("textarea.remark"),
                ),
                el("hr"),
                el(".proposer-container",
                    el("h3", msg("GOVERNANCE_CREATE_TITLE1")),
                    this.proposer = el(".address"),
                    this.wallet = el(".wallet"),
                    this.ownedMates = el(".owned-mates"),
                    el("p", msg("GOVERNANCE_CREATE_DESC8")),
                ),
                el("hr"),
                el(".mate-container",
                    el("h3", msg("GOVERNANCE_CREATE_SELECT_TITLE1")),
                    el("p", msg("GOVERNANCE_CREATE_SELECT_TITLE2")),
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", msg("GOVERNANCE_CREATE_SELECT_TITLE3"))
                    ),
                ),
                this.selectedMates = el(".selected-mates", msg("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(0))),
                el(".button-container", el("a", `▶ ${msg("DOGESOUNDS_MAX_SELECT_BUTTON")}`, {
                    click: () => this.mateList.maxSelect(25),
                })),
                el(".button-container", el("a", `▶ ${msg("DOGESOUNDS_DESELECT_BUTTON")}`, {
                    click: () => this.mateList.deselect(),
                })),
                this.mateList = new MateList(true, false),
                el("hr"),
                el(".checkbox-container",
                    termCheckbox = el("input", { type: "checkbox" }),
                    el("label", msg("GOVERNANCE_CREATE_CHECKBOX_DESC")),
                ),
                el(".button-wrap",
                    el("button", msg("REGISTER_BUTTON"), {
                        click: async () => {

                            if (termCheckbox.domElement.checked === true) {
                                new Confirm(msg("GOVERNANCE_PROPOSE_SUBMIT_CONFIRM"), msg("CONFIRM_BUTTON"), async () => {
                                    const owner = await Wallet.loadAddress();
                                    if (owner !== undefined) {

                                        const mixNeeded = await DSCGovernanceV3Contract.getProposePrice();

                                        const balance = await MixContract.balanceOf(owner);
                                        if (balance.lt(mixNeeded)) {
                                            new Confirm(`${String(parseInt(utils.formatEther(mixNeeded), 10))} 믹스가 필요합니다.`, "믹스 구매", () => {
                                                open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                                            });
                                        }

                                        else if ((await MixContract.allowance(owner, DSCGovernanceV3Contract.address)).lt(mixNeeded)) {
                                            await MixContract.approve(DSCGovernanceV3Contract.address, constants.MaxUint256);
                                            setTimeout(async () => {

                                                const minProposePeriod = (await DSCGovernanceV3Contract.getMinProposePeriod()).toNumber();
                                                const maxProposePeriod = (await DSCGovernanceV3Contract.getMaxProposePeriod()).toNumber();
                                                const proposeMateCount = (await DSCGovernanceV3Contract.getProposeMateCount()).toNumber();
                                                const period = parseInt(periodInput.domElement.value, 10);

                                                if (period < minProposePeriod) {
                                                    new Alert(msg("GOVERNANCE_PROPOSAL_MIN_PERIOD_ERROR").replace(/{block}/, String(minProposePeriod)), msg("CONFIRM_BUTTON"));
                                                } else if (period > maxProposePeriod) {
                                                    new Alert(msg("GOVERNANCE_PROPOSAL_MAX_PERIOD_ERROR").replace(/{block}/, String(maxProposePeriod)), msg("CONFIRM_BUTTON"));
                                                } else if (this.mateList.selectedMateIds.length !== proposeMateCount) {
                                                    new Alert(msg("GOVERNANCE_PROPOSAL_NEED_MORE_MATES_ERROR").replace(/{proposeMateCount}/, String(proposeMateCount)), msg("CONFIRM_BUTTON"));
                                                } else {
                                                    if (await MateContract.isApprovedForAll(owner, DSCGovernanceV3Contract.address) !== true) {
                                                        await MateContract.setApprovalForAll(DSCGovernanceV3Contract.address, true);
                                                    }
                                                    await DSCGovernanceV3Contract.propose(
                                                        titleInput.domElement.value,
                                                        summaryInput.domElement.value,
                                                        contentInput.domElement.value,
                                                        noteInput.domElement.value,
                                                        periodInput.domElement.value,
                                                        MateContract.address,
                                                        this.mateList.selectedMateIds,
                                                    );
                                                    setTimeout(() => ViewUtil.go("/governance"), 2000);
                                                }
                                            }, 2000);
                                        }

                                        else {

                                            const minProposePeriod = (await DSCGovernanceV3Contract.getMinProposePeriod()).toNumber();
                                            const maxProposePeriod = (await DSCGovernanceV3Contract.getMaxProposePeriod()).toNumber();
                                            const proposeMateCount = (await DSCGovernanceV3Contract.getProposeMateCount()).toNumber();
                                            const period = parseInt(periodInput.domElement.value, 10);

                                            if (period < minProposePeriod) {
                                                new Alert(msg("GOVERNANCE_PROPOSAL_MIN_PERIOD_ERROR").replace(/{block}/, String(minProposePeriod)), msg("CONFIRM_BUTTON"));
                                            } else if (period > maxProposePeriod) {
                                                new Alert(msg("GOVERNANCE_PROPOSAL_MAX_PERIOD_ERROR").replace(/{block}/, String(maxProposePeriod)), msg("CONFIRM_BUTTON"));
                                            } else if (this.mateList.selectedMateIds.length !== proposeMateCount) {
                                                new Alert(msg("GOVERNANCE_PROPOSAL_NEED_MORE_MATES_ERROR").replace(/{proposeMateCount}/, String(proposeMateCount)), msg("CONFIRM_BUTTON"));
                                            } else {
                                                if (await MateContract.isApprovedForAll(owner, DSCGovernanceV3Contract.address) !== true) {
                                                    await MateContract.setApprovalForAll(DSCGovernanceV3Contract.address, true);
                                                }
                                                await DSCGovernanceV3Contract.propose(
                                                    titleInput.domElement.value,
                                                    summaryInput.domElement.value,
                                                    contentInput.domElement.value,
                                                    noteInput.domElement.value,
                                                    periodInput.domElement.value,
                                                    MateContract.address,
                                                    this.mateList.selectedMateIds,
                                                );
                                                setTimeout(() => ViewUtil.go("/governance"), 2000);
                                            }
                                        }
                                    }
                                });
                            }
                        },
                    }),
                ),
            ),
        ));

        this.load();
        Wallet.on("connect", this.connectHandler);

        this.mateList.on("selectMate", () => {
            this.selectedMates.empty().appendText(msg("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(this.mateList.selectedMateIds.length)));
        });
        this.loadMates();
    }

    private connectHandler = () => {
        this.load();
    };

    private async load() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            this.proposer.empty().appendText(owner);
        }
    }

    private async loadMates() {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {

            this.wallet.appendText(`- ${msg("DOGESOUNDS_WALLET_ADDRESS")} : `);
            this.wallet.append(el("a", walletAddress,
                { href: `https://opensea.io/${walletAddress}`, target: "_blank" },
            ));

            const mateBalance = (await MateContract.balanceOf(walletAddress)).toNumber();
            this.ownedMates.appendText(`- ${msg("DOGESOUNDS_OWNED_MATES_COUNT").replace(/{count}/, String(mateBalance))}`);

            const mates: number[] = [];

            const promises: Promise<void>[] = [];
            for (let i = 0; i < mateBalance; i += 1) {
                const promise = async (index: number) => {
                    const mateId = (await MateContract.tokenOfOwnerByIndex(walletAddress, index)).toNumber();
                    mates.push(mateId);
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);

            this.mateList.load(mates);
        }
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        Wallet.off("connect", this.connectHandler);
        this.container.delete();
    }
}