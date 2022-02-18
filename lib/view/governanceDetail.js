"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class GovernanceDetail {
    constructor() {
        Layout_1.default.current.title = "거버넌스 디테일";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".governance-detail-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "GOVERNANCE 🐙🌵🌞")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section", (0, skynode_1.el)("article", (0, skynode_1.el)("header", (0, skynode_1.el)("h2", "DIP-17: Management of Mate Price Stabilization Fund (tentative name)"), (0, skynode_1.el)("p", "0 block left until the voting is over."), (0, skynode_1.el)(".caption-container", (0, skynode_1.el)(".status", "Proposal result: Orientation"), (0, skynode_1.el)("p", "Agreement 1766"), (0, skynode_1.el)("p", "Opposition 521"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".content", (0, skynode_1.el)(".tool-container", (0, skynode_1.el)("h3", "Suggestion generation tool:"), (0, skynode_1.el)("p", "A fund management proposal to purchase the mate of the largest holder through a block deal.")), (0, skynode_1.el)(".body-container", (0, skynode_1.el)("h3", "Body:"), (0, skynode_1.el)("p", "A fund management proposal to purchase the mate of the largest holder through a block deal.")), (0, skynode_1.el)(".remarks", "Remarks:"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".proposer-container", (0, skynode_1.el)("h3", "Proposer"), (0, skynode_1.el)(".address", "0x5768218dae8c5658d0B1e466c07199393B089078"), (0, skynode_1.el)("p", "- Wallet Address: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("h3", "Choose your mate."), (0, skynode_1.el)("p", "Number of mates chosen: 3."), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", "Sellect All"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".submit-container", (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", "FOR")), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", "AGAINST"))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "VOTE")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = GovernanceDetail;
//# sourceMappingURL=GovernanceDetail.js.map