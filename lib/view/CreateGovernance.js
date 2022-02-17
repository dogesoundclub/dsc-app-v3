"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class CreateGovernance {
    constructor() {
        Layout_1.default.current.title = "거버넌스 제안";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-governance-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "GOVERNANCE 🐙🌵🌞"), (0, skynode_1.el)("h2", "Mate represents the voting rights of the governor's sound club governance. You can make a proposal or vote as much as you have a mate for or against a registered proposal. In order to create a proposal, 800 mixes per case must be incinerated, and if the turnout does not exceed 30%, the agenda will be invalidated regardless of the pros and cons ratio.")), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Suggestion generation tool."), (0, skynode_1.el)("input", { placeholder: "Please enter the title of the suggestion." })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Voting period."), (0, skynode_1.el)("input", { placeholder: "Please enter the voting period in blocks." })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Summary"), (0, skynode_1.el)("input.summary", { placeholder: "Please write down the key part of the proposal.", type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Text"), (0, skynode_1.el)("label", "You can use the grammar that's like mark."), (0, skynode_1.el)("input.text", { placeholder: "Please explain the suggestion.", type: "text" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Remarks"), (0, skynode_1.el)("input")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".proposer-container", (0, skynode_1.el)("h3", "Proposer"), (0, skynode_1.el)(".address", "0x5768218dae8c5658d0B1e466c07199393B089078"), (0, skynode_1.el)("p", "- Wallet Address: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D\n- Number of mates you have: 3300.\n- Available mates: 110.\n* Relax! Participation in voting does not affect your ownership at all.")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("h3", "Choose your mate."), (0, skynode_1.el)("p", "Number of mates chosen: 3."), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", "Sellect All"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", "I agree that the submitted proposal can be canceled, but it cannot be modified. I agree that the mate will be kept at the governance contract address during the period of the proposal. This interface is just a convenient tool of your choice for governance, and I agree that the owner of the wallet who signed it is responsible for the consequences of all transactions under the signature.")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "REGISTER")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = CreateGovernance;
//# sourceMappingURL=CreateGovernance.js.map