"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
class Candidate extends skynode_1.DomNode {
    constructor(list, index, votable, dogeSound, votes, checked) {
        super("li.candidate");
        if (votable === true) {
            this.radio = (0, skynode_1.el)("input", {
                name: "dogesounds-candidate-radio",
                type: "radio",
                change: () => {
                    list.selected = index;
                },
            }).appendTo(this);
            if (checked === true) {
                this.radio.domElement.checked = true;
                list.selected = index;
            }
        }
        this.append((0, skynode_1.el)("div.doge-sound", dogeSound, {
            click: () => {
                if (this.radio !== undefined && this.radio.domElement.checked !== true) {
                    this.radio.domElement.checked = true;
                    list.selected = index;
                }
            },
        }), (0, skynode_1.el)("div.votes", `${(0, msg_js_1.default)("DOGESOUNDS_VOTE_COUNT")} : ${votes}`));
    }
}
exports.default = Candidate;
//# sourceMappingURL=Candidate.js.map