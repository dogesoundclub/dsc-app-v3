import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import VoteContract, { ProposalInfo } from "../../contracts/VoteContract";
import ViewUtil from "../../view/ViewUtil";

export default class Proposal extends DomNode {

    constructor(private proposalId: number, private proposal: ProposalInfo) {
        super("li.proposal");
        this.append(
            el("h4", `DIP-${this.proposalId}: ${proposal.title}`, {
                click: () => ViewUtil.go(`/governance-old/${proposalId}`),
            }),
        );
        this.loadResult();
    }

    private async loadResult() {
        if (this.proposal.executed === true) {
            this.append(el(".result.executed", `- ${msg("GOVERNANCE_PROPOSAL_EXECUTED")} -`));
        } else {
            const result = await VoteContract.getResult(this.proposalId);
            if (result === VoteContract.VOTING) {
                this.append(el(".result.voting", `- ${msg("GOVERNANCE_PROPOSAL_VOTING")} -`));
            } else if (result === VoteContract.CANCELED) {
                this.append(el(".result.canceled", `- ${msg("GOVERNANCE_PROPOSAL_CANCELED")} -`));
            } else if (result === VoteContract.RESULT_SAME) {
                this.append(el(".result.same", `- ${msg("GOVERNANCE_PROPOSAL_RESULT_SAME")} -`));
            } else if (result === VoteContract.RESULT_FOR) {
                this.append(el(".result.for", `- ${msg("GOVERNANCE_PROPOSAL_RESULT_FOR")} -`));
            } else if (result === VoteContract.RESULT_AGAINST) {
                this.append(el(".result.against", `- ${msg("GOVERNANCE_PROPOSAL_RESULT_AGAINST")} -`));
            }
        }
    }
}
