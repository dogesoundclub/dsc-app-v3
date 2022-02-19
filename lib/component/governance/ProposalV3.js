"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const VoteContract_1 = __importDefault(require("../../contracts/VoteContract"));
const ViewUtil_1 = __importDefault(require("../../view/ViewUtil"));
class ProposalV3 extends skynode_1.DomNode {
    constructor(proposalId, proposal) {
        super("li.proposal");
        this.proposalId = proposalId;
        this.proposal = proposal;
        this.append((0, skynode_1.el)("h4", `DIP-${this.proposalId}: ${proposal.title}`, {
            click: () => ViewUtil_1.default.go(`/governance/${proposalId}`),
        }));
        this.loadResult();
    }
    async loadResult() {
        if (this.proposal.executed === true) {
            this.append((0, skynode_1.el)(".result.executed", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_EXECUTED")} -`));
        }
        else {
            const result = await VoteContract_1.default.getResult(this.proposalId);
            if (result === VoteContract_1.default.VOTING) {
                this.append((0, skynode_1.el)(".result.voting", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_VOTING")} -`));
            }
            else if (result === VoteContract_1.default.CANCELED) {
                this.append((0, skynode_1.el)(".result.canceled", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_CANCELED")} -`));
            }
            else if (result === VoteContract_1.default.RESULT_SAME) {
                this.append((0, skynode_1.el)(".result.same", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_RESULT_SAME")} -`));
            }
            else if (result === VoteContract_1.default.RESULT_FOR) {
                this.append((0, skynode_1.el)(".result.for", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_RESULT_FOR")} -`));
            }
            else if (result === VoteContract_1.default.RESULT_AGAINST) {
                this.append((0, skynode_1.el)(".result.against", `- ${(0, msg_js_1.default)("GOVERNANCE_PROPOSAL_RESULT_AGAINST")} -`));
            }
        }
    }
}
exports.default = ProposalV3;
//# sourceMappingURL=ProposalV3.js.map