"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const superagent_1 = __importDefault(require("superagent"));
const MateList_1 = __importDefault(require("../component/mate/MateList"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const MateContract_1 = __importDefault(require("../contracts/MateContract"));
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
class MyMate {
    constructor() {
        this.windowResizeHandler = () => {
            this.mateList.style({ height: window.innerHeight - 213 });
        };
        Layout_1.default.current.title = (0, msg_js_1.default)("MY_MATE_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".my-mate-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("MY_MATE_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("MY_MATE_WALLET_ADDRESS")), this.wallet = (0, skynode_1.el)("p")), (0, skynode_1.el)("section", this.mateList = new MateList_1.default(false, false), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".certification-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_DESC")), (0, skynode_1.el)("a", (0, msg_js_1.default)("HOLDER_DISCORD_CERTIFICATION_BUTTON"), {
            href: `https://discord.com/api/oauth2/authorize?client_id=939772385945612288&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}/myMate`)}&response_type=code&scope=identify`,
        })))));
        this.windowResizeHandler();
        this.load();
        this.checkDiscordLogin();
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
    async checkDiscordLogin() {
        let code = new URLSearchParams(window.location.search).get("code");
        if (code !== null) {
            try {
                await superagent_1.default.get("https://api.dogesound.club/discord/token").query({
                    code,
                    redirect_uri: `${window.location.protocol}//${window.location.host}/myMate`,
                });
            }
            catch (error) {
                console.error(error);
                code = undefined;
            }
        }
        else {
            code = undefined;
        }
        if (code !== undefined) {
            try {
                const result = await superagent_1.default.get("https://api.dogesound.club/discord/me").query({ code });
                this.discordUser = result.body;
                this.checkMateHolder(code);
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    async checkMateHolder(code) {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const message = "Check Holder";
            const signResult = await Wallet_1.default.signMessage(message);
            try {
                const result = await fetch("https://api.dogesound.club/checkholder/mates", {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        signedMessage: signResult.signedMessage,
                        klipSignKey: signResult.klipSignKey,
                        address,
                    }),
                });
                if ((await result.json()).isHolder === true) {
                    new Alert_1.default("메이트 홀더 인증 완료", "이메이트 홀더 인증하기", () => {
                        this.checkEMateHolder(code);
                    });
                }
                else {
                    new Alert_1.default("메이트 홀더 인증 실패", "이메이트 홀더 인증하기", () => {
                        this.checkEMateHolder(code);
                    });
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    async checkEMateHolder(code) {
        if (await EthereumWallet_1.default.connected() !== true) {
            await EthereumWallet_1.default.connect();
        }
        const address = await EthereumWallet_1.default.loadAddress();
        if (address !== undefined) {
            const message = "Check Holder";
            const signedMessage = await EthereumWallet_1.default.signMessage(message);
            try {
                const result = await fetch("https://api.dogesound.club/checkholder/emates", {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        signedMessage,
                        address,
                    }),
                });
                if ((await result.json()).isHolder === true) {
                    new Alert_1.default("이메이트 홀더 인증 완료");
                }
                else {
                    new Alert_1.default("이메이트 홀더 인증 실패");
                }
            }
            catch (error) {
                console.error(error);
            }
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