import { DomNode } from "@hanul/skynode";
import DSCGovernanceV3Contract from "../../../../contracts/DSCGovernanceV3Contract";
import VoteContract from "../../../../contracts/VoteContract";
import Proposal from "./Proposal";

export default class ProposalList extends DomNode {

    constructor() {
        super("tbody.proposal-list");
        this.load();
    }

    private async load() {
        const count = await VoteContract.getProposalCount();
        for (let proposalId = count - 1; proposalId >= 0; proposalId -= 1) {
            const proposal = await VoteContract.getProposal(proposalId);
            this.append(new Proposal(proposalId, proposal));
        }
        const count2 = await DSCGovernanceV3Contract.getProposalCount();
        for (let proposalId = count2 - 1; proposalId >= 0; proposalId -= 1) {
            const proposal = await DSCGovernanceV3Contract.getProposal(proposalId);
            this.append(new Proposal(proposalId, proposal));
        }
    }
}
