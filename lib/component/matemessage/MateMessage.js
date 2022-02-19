"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const MessageContract_1 = __importDefault(require("../../contracts/MessageContract"));
class MateMessage extends skynode_1.DomNode {
    constructor(mateId, index) {
        super("tr");
        this.mateId = mateId;
        this.index = index;
        this.load();
    }
    async load() {
        const record = await MessageContract_1.default.record(this.mateId, this.index);
        this.append((0, skynode_1.el)("td", record.blockNumber), (0, skynode_1.el)("td", record.name), (0, skynode_1.el)("td", record.message), (0, skynode_1.el)("td", CommonUtil_1.default.shortenAddress(record.owner)));
    }
}
exports.default = MateMessage;
//# sourceMappingURL=MateMessage.js.map