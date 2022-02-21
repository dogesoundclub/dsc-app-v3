"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const MateContract_1 = __importDefault(require("../contracts/MateContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Holder {
    constructor() {
        this.connectHandler = () => {
            this.load();
        };
        Layout_1.default.current.title = (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_BUTTON");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".holder-view", (0, skynode_1.el)("section", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("h1", (0, msg_js_1.default)("HOLDER_TITLE1")), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", (0, msg_js_1.default)("YES_BUTTON"), { click: () => Wallet_1.default.connect() }), (0, skynode_1.el)("a", (0, msg_js_1.default)("NO_BUTTON"), { click: () => ViewUtil_1.default.go("/") })))));
        this.load();
        Wallet_1.default.on("connect", this.connectHandler);
    }
    async load() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            const balance = await MateContract_1.default.balanceOf(owner);
            if (balance.toNumber() === 0) {
                ViewUtil_1.default.go("/buyMate");
            }
            else {
                ViewUtil_1.default.go("/activities");
            }
        }
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Holder;
//# sourceMappingURL=Holder.js.map