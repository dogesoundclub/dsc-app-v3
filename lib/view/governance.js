"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class Governance {
    constructor() {
        Layout_1.default.current.title = "거버넌스";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".governance-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "GOVERNANCE 🐙🌵🌞"), (0, skynode_1.el)("h2", "Mate represents the voting rights of the governor's sound club governance. You can make a proposal or vote as much as you have a mate for or against a registered proposal. In order to create a proposal, 800 mixes per case must be incinerated, and if the turnout does not exceed 30%, the agenda will be invalidated regardless of the pros and cons ratio."), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "Create suggestions"))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("h2", "Suggestions 👑🚀✌️"), (0, skynode_1.el)("table", (0, skynode_1.el)("thead", (0, skynode_1.el)("tr", (0, skynode_1.el)("td.proposal", "PROPOSAL"), (0, skynode_1.el)("td.dogesound", "DOGESOUND"))), (0, skynode_1.el)("tbody", (0, skynode_1.el)("tr", (0, skynode_1.el)("td.agreement", "AGREEMENT"), (0, skynode_1.el)("td.dogesound", "DIP-19: We would like to enter into a partnership with the rice mill community.")), (0, skynode_1.el)("tr", (0, skynode_1.el)("td.opposition", "OPPOSITION"), (0, skynode_1.el)("td.dogesound", "DIP-19: We would like to enter into a partnership with the rice mill community.")), (0, skynode_1.el)("tr", (0, skynode_1.el)("td.cancellation", "CANCELLATION"), (0, skynode_1.el)("td.cancellation-dogesound", "DIP-19: We would like to enter into a partnership with the rice mill community.")))), (0, skynode_1.el)(".pagination", (0, skynode_1.el)("a", "<<"), (0, skynode_1.el)("a", "<"), (0, skynode_1.el)("a.active", "1"), (0, skynode_1.el)("a", "2"), (0, skynode_1.el)("a", "3"), (0, skynode_1.el)("a", "4"), (0, skynode_1.el)("a", "5"), (0, skynode_1.el)("a", ">"), (0, skynode_1.el)("a", ">>")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Governance;
//# sourceMappingURL=governance.js.map