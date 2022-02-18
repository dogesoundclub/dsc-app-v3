"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const MateList_1 = __importDefault(require("../component/mate/MateList"));
const MateContract_1 = __importDefault(require("../contracts/MateContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
class MyMate {
    constructor() {
        this.windowResizeHandler = () => {
            this.mateList.style({ height: window.innerHeight - 213 });
        };
        Layout_1.default.current.title = (0, msg_js_1.default)("MY_MATE_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".my-mate-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("MY_MATE_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("MY_MATE_WALLET_ADDRESS")), this.wallet = (0, skynode_1.el)("p")), (0, skynode_1.el)("section", this.mateList = new MateList_1.default(false, false), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".certification-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_DESC")), (0, skynode_1.el)("button", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_BUTTON"))))));
        this.windowResizeHandler();
        this.load();
        window.addEventListener("resize", this.windowResizeHandler);
    }
    async load() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            this.wallet.append((0, skynode_1.el)("a", walletAddress, { href: `https://opensea.io/${walletAddress}`, target: "_blank" }));
            const balance = (await MateContract_1.default.balanceOf(walletAddress)).toNumber();
            const mates = [];
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const mateId = await MateContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    mates.push(mateId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.mateList.load(mates);
        }
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = MyMate;
//# sourceMappingURL=MyMate.js.map