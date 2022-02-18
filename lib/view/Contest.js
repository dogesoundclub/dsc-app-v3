"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class Contest {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("CONTEST_TITLE1");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".contest-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("CONTEST_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONTEST_DESC1")), (0, skynode_1.el)(".warning", (0, msg_js_1.default)("CONTEST_DESC2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONTEST_DESC3")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", (0, msg_js_1.default)("CONTEST_BUTTON")))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("h2", (0, msg_js_1.default)("CONTEST_TITLE2")), (0, skynode_1.el)("table", (0, skynode_1.el)("thead", (0, skynode_1.el)("tr", (0, skynode_1.el)("td.id", "#"), (0, skynode_1.el)("td.votes", "VOTES"), (0, skynode_1.el)("td.dogesound", "DOGESOUND"))), (0, skynode_1.el)("tbody", (0, skynode_1.el)("tr", (0, skynode_1.el)("td.id", "100"), (0, skynode_1.el)("td.votes", "39,344"), (0, skynode_1.el)("td.dogesound", "If your salary is less than your mate's, please vote here.")))), (0, skynode_1.el)(".pagination", (0, skynode_1.el)("a", "<<"), (0, skynode_1.el)("a", "<"), (0, skynode_1.el)("a.active", "1"), (0, skynode_1.el)("a", "2"), (0, skynode_1.el)("a", "3"), (0, skynode_1.el)("a", "4"), (0, skynode_1.el)("a", "5"), (0, skynode_1.el)("a", ">"), (0, skynode_1.el)("a", ">>")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("h2", (0, msg_js_1.default)("CONTEST_TITLE3")), (0, skynode_1.el)("section.status-board", (0, skynode_1.el)("img", { src: "/images/shared/img/dog.png" }), (0, skynode_1.el)("h3", (0, msg_js_1.default)("CONTEST_STATUS_BOARD_TITLE1")), (0, skynode_1.el)(".caption", (0, msg_js_1.default)("CONTEST_STATUS_BOARD_DESC1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONTEST_STATUS_BOARD_DESC2")), (0, skynode_1.el)(".submit-container", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("input"), (0, skynode_1.el)("label", (0, msg_js_1.default)("CONTEST_STATUS_BOARD_DESC3"))), (0, skynode_1.el)("button", (0, msg_js_1.default)("CONTEST_STATUS_BOARD_BUTTON")))), (0, skynode_1.el)("h3", (0, msg_js_1.default)("CONTEST_STATUS_TITLE")), (0, skynode_1.el)("table", (0, skynode_1.el)("thead", (0, skynode_1.el)("tr", (0, skynode_1.el)("td.action", "ACTION"), (0, skynode_1.el)("td.votes", "VOTES"), (0, skynode_1.el)("td.dogesound", "DOGESOUND"))), (0, skynode_1.el)("tbody", (0, skynode_1.el)("tr", (0, skynode_1.el)("td.action", (0, skynode_1.el)("input", { type: "checkbox" })), (0, skynode_1.el)("td.votes", "39,344"), (0, skynode_1.el)("td.dogesound", (0, msg_js_1.default)("CONTEST_STATUS_TABLE_DESC2"))))), (0, skynode_1.el)(".pagination", (0, skynode_1.el)("a", "<<"), (0, skynode_1.el)("a", "<"), (0, skynode_1.el)("a.active", "1"), (0, skynode_1.el)("a", "2"), (0, skynode_1.el)("a", "3"), (0, skynode_1.el)("a", "4"), (0, skynode_1.el)("a", "5"), (0, skynode_1.el)("a", ">"), (0, skynode_1.el)("a", ">>")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Contest;
//# sourceMappingURL=Contest.js.map