"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Klip_1 = __importDefault(require("../klaytn/Klip"));
class ConnectWalletPopup extends skynode_1.Popup {
    constructor(callback) {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".connect-wallet-popup", (0, skynode_1.el)("img.talker", { src: "https://storage.googleapis.com/dsc-mate/336/dscMate-1.png" }), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONNECT_WALLET_POPUP_DESCRIPTION")), (0, skynode_1.el)("a.button.connect-kaikas-button", (0, skynode_1.el)("img", { src: "/images/logo/kaikas.svg" }), (0, msg_js_1.default)("CONNECT_KAIKAS_BUTTON"), { href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi", target: "_blank" }), (0, skynode_1.el)("a.button.connect-klip-button", (0, skynode_1.el)("img", { src: "/images/logo/klip.svg" }), (0, msg_js_1.default)("CONNECT_KLIP_BUTTON"), {
            click: async () => {
                await Klip_1.default.connect();
                callback();
                this.delete();
            },
        }), (0, skynode_1.el)("a.button.cancel-button", (0, msg_js_1.default)("CANCEL_CONNECT_BUTTON"), {
            click: () => this.delete(),
        })));
    }
}
exports.default = ConnectWalletPopup;
//# sourceMappingURL=ConnectWalletPopup.js.map