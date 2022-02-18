import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import Alert from "../component/shared/dialogue/Alert";
import DiscordUserInfo from "../DiscordUserInfo";
import Wallet from "../klaytn/Wallet";
import Store from "../Store";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Activities implements View {

    private container: DomNode;

    public discordUser: DiscordUserInfo | undefined;
    private codeStore = new Store("codeStore");

    constructor() {
        Layout.current.title = msg("ACTIVITIES_TITLE");
        Layout.current.content.append(this.container = el(".activities-view",
            el("header",
                el("h1", msg("ACTIVITIES_TITLE")),
                el("h2", msg("ACTIVITIES_DESC")),
            ),
            el("section",
                el(".certification-container",
                    el("h2", "HOLDER CERTIFICATION WITH DISCORD"),
                    el("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."),
                    el("a", "CERTIFICATION", {
                        href: `https://discord.com/api/oauth2/authorize?client_id=939772385945612288&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}/activities`)}&response_type=code&scope=identify`,
                    }),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE1")),
                    el("p", msg("ACTIVITIES_DESC1")),
                    el("button", msg("ENTER_BUTTON"), { click: () => ViewUtil.go("/dscFamily") }),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE2")),
                    el("p", msg("ACTIVITIES_DESC2")),
                    el("button", msg("ENTER_BUTTON"), { click: () => ViewUtil.go("/myMate") }),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE3")),
                    el("p", msg("ACTIVITIES_DESC3")),
                    el("button", msg("ENTER_BUTTON"), { click: () => ViewUtil.go("/contest") }),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE4")),
                    el("p", msg("ACTIVITIES_DESC4")),
                    el("button", msg("ENTER_BUTTON"), { click: () => ViewUtil.go("/governance") }),
                ),
            ),
        ));
        this.checkDiscordLogin();
    }

    private async checkDiscordLogin() {

        let code = this.codeStore.get<string>("code");
        if (code === undefined) {
            code = new URLSearchParams(window.location.search).get("code")!;
            if (code !== null) {
                try {
                    await superagent.get("https://api.dogesound.club/discord/token").query({
                        code,
                        redirect_uri: `${window.location.protocol}//${window.location.host}/activities`,
                    });
                    this.codeStore.set("code", code, true);
                } catch (error) {
                    console.error(error);
                    code = undefined;
                }
            } else {
                code = undefined;
            }
        }

        if (code === undefined) {
            this.codeStore.delete("code");
        } else {
            try {
                const result = await superagent.get("https://api.dogesound.club/discord/me").query({ code });
                this.discordUser = result.body;
                this.checkWalletConnected(code);
            } catch (error) {
                console.error(error);
                this.codeStore.delete("code");
            }
        }
    }

    private async checkWalletConnected(code: string) {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {

            const message = "Check Holder";
            const signResult = await Wallet.signMessage(message);

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
                    new Alert("홀더 인증 완료");
                } else {
                    new Alert("홀더 인증 실패");
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}