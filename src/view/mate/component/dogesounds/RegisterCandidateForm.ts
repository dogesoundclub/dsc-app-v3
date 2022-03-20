import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import DogeSoundContestV2Contract from "../../../../contracts/DogeSoundContestV2Contract";
import MateContract from "../../../../contracts/MateContract";
import Wallet from "../../../../klaytn/Wallet";
import ViewUtil from "../../../../view/ViewUtil";
import MateList from "../mate/MateList";
import Alert from "../../component/dialogue/Alert";
import CandidateList from "./CandidateList";

export default class RegisterCandidateForm extends DomNode {

    private wallet: DomNode;
    private ownedMates: DomNode;
    private registableMates: DomNode;
    private candidateInput: DomNode<HTMLInputElement>;
    private selectedMates: DomNode;
    private mateList: MateList;

    constructor(private round: number) {
        super(".register-candidate-form");
        this.append(

            new CandidateList(round),

            this.wallet = el(".wallet"),
            this.ownedMates = el(".owned-mates"),
            this.registableMates = el(".registable-mates"),
            el(".info", msg("DOGESOUNDS_VOTE_WARNING")),

            this.candidateInput = el("input.candidate-input", {
                placeholder: msg("DOGESOUNDS_CANDIDATE_INPUT"),
            }),

            this.selectedMates = el(".selected-mates", msg("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(0))),
            el(".button-container", el("a", `▶ ${msg("DOGESOUNDS_MAX_SELECT_BUTTON")}`, {
                click: () => this.mateList.maxSelect(),
            })),
            el(".button-container", el("a", `▶ ${msg("DOGESOUNDS_DESELECT_BUTTON")}`, {
                click: () => this.mateList.deselect(),
            })),
            this.mateList = new MateList(true, false),
            el("a.submit-button", msg("DOGESOUNDS_REGISTER_SUBMIT"), {
                click: async () => {
                    const candidateMateCount = (await DogeSoundContestV2Contract.getCandidateMateCount()).toNumber();
                    if (this.mateList.selectedMateIds.length >= candidateMateCount) {
                        await DogeSoundContestV2Contract.registerCandidate(this.candidateInput.domElement.value, MateContract.address, this.mateList.selectedMateIds);
                        ViewUtil.waitTransactionAndRefresh();
                    } else {
                        new Alert(msg("DOGESOUNDS_NEED_MORE_MATES_ERROR").replace(/{candidateCount}/, String(candidateMateCount)), msg("CONFIRM_BUTTON"));
                    }
                },
            }),
        );
        this.mateList.on("selectMate", () => {
            this.selectedMates.empty().appendText(msg("DOGESOUNDS_SELECTED_MATES_COUNT").replace(/{count}/, String(this.mateList.selectedMateIds.length)));
        });
        this.loadMates();
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
            const votedMateCount = (await DogeSoundContestV2Contract.getUserVotes(this.round, walletAddress)).toNumber();
            const candidateMateCount = (await DogeSoundContestV2Contract.getCandidateMateCount()).toNumber();

            this.ownedMates.appendText(`- ${msg("DOGESOUNDS_OWNED_MATES_COUNT").replace(/{count}/, String(mateBalance))}`);
            this.registableMates.appendText(`- ${msg("DOGESOUNDS_REGISTABLE_MATES_COUNT").replace(/{count}/, String(mateBalance - votedMateCount)).replace(/{candidateCount}/, String(candidateMateCount))}`);

            const mates: number[] = [];
            const votedMates: number[] = [];

            const promises: Promise<void>[] = [];
            for (let i = 0; i < mateBalance; i += 1) {
                const promise = async (index: number) => {
                    const mateId = (await MateContract.tokenOfOwnerByIndex(walletAddress, index)).toNumber();
                    mates.push(mateId);
                    if (await DogeSoundContestV2Contract.getMateVoted(this.round, MateContract.address, mateId) === true) {
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
