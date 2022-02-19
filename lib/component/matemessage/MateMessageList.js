"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const MessageContract_1 = __importDefault(require("../../contracts/MessageContract"));
const MateMessage_1 = __importDefault(require("./MateMessage"));
class MateMessageList extends skynode_1.DomNode {
    constructor(mateId) {
        super(".mate-message-list");
        this.mateId = mateId;
        this.append((0, skynode_1.el)("table", (0, skynode_1.el)("thead", (0, skynode_1.el)("tr", (0, skynode_1.el)("th", "BLOCK #", { width: "15%" }), (0, skynode_1.el)("th", "NAME", { width: "15%" }), (0, skynode_1.el)("th", "MSG", { width: "45%" }), (0, skynode_1.el)("th", "HOLDER ADDR", { width: "25%" }))), this.messageList = (0, skynode_1.el)("tbody")));
        this.loadMessages();
    }
    async loadMessages() {
        const count = (await MessageContract_1.default.recordCount(this.mateId)).toNumber();
        skyutil_1.default.repeat(count, (index) => {
            this.messageList.append(new MateMessage_1.default(this.mateId, index));
        });
    }
}
exports.default = MateMessageList;
//# sourceMappingURL=MateMessageList.js.map