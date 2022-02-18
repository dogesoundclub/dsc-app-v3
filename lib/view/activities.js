"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const superagent_1 = __importDefault(require("superagent"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Store_1 = __importDefault(require("../Store"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Activities {
    constructor() {
        this.codeStore = new Store_1.default("codeStore");
        Layout_1.default.current.title = (0, msg_js_1.default)("ACTIVITIES_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".activities-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("ACTIVITIES_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_DESC"))), (0, skynode_1.el)("section", (0, skynode_1.el)(".certification-container", (0, skynode_1.el)("h2", "HOLDER CERTIFICATION WITH DISCORD"), (0, skynode_1.el)("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."), (0, skynode_1.el)("a", "CERTIFICATION", {
            href: `https://discord.com/api/oauth2/authorize?client_id=939772385945612288&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}/activities`)}&response_type=code&scope=identify`,
        })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC1")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/dscFamily") })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC2")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/myMate") })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE3")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC3")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/contest") })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("ACTIVITIES_TITLE4")), (0, skynode_1.el)("p", (0, msg_js_1.default)("ACTIVITIES_DESC4")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), { click: () => ViewUtil_1.default.go("/governance") })))));
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
                        redirect_uri: `${window.location.protocol}//${window.location.host}/activities`,
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
                    new Alert_1.default("홀더 인증 완료");
                }
                else {
                    new Alert_1.default("홀더 인증 실패");
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
exports.default = Activities;
//# sourceMappingURL=Activities.js.map