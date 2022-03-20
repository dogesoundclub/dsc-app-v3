import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import VoteContract, { ProposalInfo } from "../../../../contracts/VoteContract";
import ViewUtil from "../../../ViewUtil";

export default class Proposal extends DomNode {

    constructor(private proposalId: number, private proposal: ProposalInfo) {
        super("tr");
        this.append(
            el("td.dogesound", `DIP-${this.proposalId}: ${proposal.title}`, {
                click: () => ViewUtil.go(`/governance-old/${proposalId}`),
            }),
        );
        this.loadResult();
    }

    private async loadResult() {
        if (this.proposal.executed === true) {
            this.append(el("td.result.executed", msg("GOVERNANCE_PROPOSAL_EXECUTED")));
        } else {
            const result = await VoteContract.getResult(this.proposalId);
            if (result === VoteContract.VOTING) {
                this.append(el("td.result.voting", msg("GOVERNANCE_PROPOSAL_VOTING")));
            } else if (result === VoteContract.CANCELED) {
                this.append(el("td.result.canceled", msg("GOVERNANCE_PROPOSAL_CANCELED")));
            } else if (result === VoteContract.RESULT_SAME) {
                this.append(el("td.result.same", msg("GOVERNANCE_PROPOSAL_RESULT_SAME")));
            } else if (result === VoteContract.RESULT_FOR) {
                this.append(el("td.result.for", msg("GOVERNANCE_PROPOSAL_RESULT_FOR")));
            } else if (result === VoteContract.RESULT_AGAINST) {
                this.append(el("td.result.against", msg("GOVERNANCE_PROPOSAL_RESULT_AGAINST")));
            }
        }
    }
}
