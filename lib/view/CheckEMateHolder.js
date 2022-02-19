"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const EthereumWallet_1 = __importDefault(require("../ethereum/EthereumWallet"));
const Store_1 = __importDefault(require("../Store"));
class CheckEMateHolder {
    constructor() {
        this.codeStore = new Store_1.default("codeStore");
        skynode_1.BodyNode.append(this.container = (0, skynode_1.el)(".check-holder", (0, skynode_1.el)("h1", "이메이트 홀더 인증 페이지"), (0, skynode_1.el)("a.discord-login-button", "Login with Discord", {
            href: "https://discord.com/api/oauth2/authorize?client_id=939772385945612288&redirect_uri=https%3A%2F%2Fdogesound.club%2Fcheckemateholder&response_type=code&scope=identify",
        })));
        this.checkDiscordLogin();
    }
    async checkDiscordLogin() {
        let code = this.codeStore.get("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code");
            if (code !== null) {
                try {
                    await superagent_1.default.get("https://api.dogesound.club/discord/token").query({
                        code,
                        redirect_uri: `${window.location.protocol}//${window.location.host}/checkemateholder`,
                    });
                    this.codeStore.set("code", code, true);
                }
                catch (error) {
                    console.error(error);
                    code = undefined;
                }
            }
            else {
                code = undefined;
            }
        }
        if (code === undefined) {
            this.codeStore.delete("code");
        }
        else {
            try {
                const result = await superagent_1.default.get("https://api.dogesound.club/discord/me").query({ code });
                this.discordUser = result.body;
                this.checkWalletConnected(code);
            }
            catch (error) {
                console.error(error);
                this.codeStore.delete("code");
            }
        }
    }
    async checkWalletConnected(code) {
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
                    alert("홀더 인증 완료");
                }
                else {
                    alert("홀더 인증 실패");
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = CheckEMateHolder;
//# sourceMappingURL=CheckEMateHolder.js.map