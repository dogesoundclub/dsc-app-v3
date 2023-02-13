"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const superagent_1 = __importDefault(require("superagent"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Store_1 = __importDefault(require("../Store"));
class CheckCaseHolder {
    constructor() {
        this.codeStore = new Store_1.default("codeStore");
        skynode_1.BodyNode.append(this.container = (0, skynode_1.el)(".check-holder", (0, skynode_1.el)("h1", "케이스 바이 케이트 홀더 인증 페이지"), (0, skynode_1.el)("a.discord-login-button", "Login with Discord", {
            href: "https://discord.com/api/oauth2/authorize?client_id=1074340739930140682&redirect_uri=https%3A%2F%2Fdogesound.club%2Fcheckcaseholder&response_type=code&scope=identify",
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
                        redirect_uri: `${window.location.protocol}//${window.location.host}/checkcaseholder`,
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
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            const message = "Check Holder";
            const signResult = await Wallet_1.default.signMessage(message);
            try {
                const result = await fetch("https://api.dogesound.club/checkholder/cases", {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        signedMessage: signResult.signedMessage,
                        klipSignKey: signResult.klipSignKey,
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
exports.default = CheckCaseHolder;
//# sourceMappingURL=CheckCaseHolder.js.map