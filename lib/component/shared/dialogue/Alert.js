"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
class Alert extends skynode_1.Popup {
    constructor(message, confirmTitle, confirm) {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".dialogue.alert", (0, skynode_1.el)("p", message), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button", confirmTitle === undefined ? (0, msg_js_1.default)("CONFIRM_BUTTON") : confirmTitle, {
            click: () => {
                if (confirm !== undefined) {
                    confirm();
                }
                this.delete();
            },
        }))));
    }
}
exports.default = Alert;
//# sourceMappingURL=Alert.js.map