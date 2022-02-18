"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
class KlipQRPopup extends skynode_1.Popup {
    constructor(dataURL) {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".klip-qr-popup", (0, skynode_1.el)("img.qr", { src: dataURL }), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONNECT_KLIP_QR_DESCRIPTION_1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONNECT_KLIP_QR_DESCRIPTION_2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("CONNECT_KLIP_QR_DESCRIPTION_3")), (0, skynode_1.el)("a.button.cancel-button", (0, msg_js_1.default)("CANCEL_BUTTON"), {
            click: () => this.delete(),
        })));
    }
}
exports.default = KlipQRPopup;
//# sourceMappingURL=KlipQRPopup.js.map