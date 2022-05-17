import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import MateList from "../../component/mate/MateList";
import Alert from "../../component/dialogue/Alert";
import MateContract from "../../../../contracts/MateContract";
import DiscordUserInfo from "../../../../DiscordUserInfo";
import Wallet from "../../../../klaytn/Wallet";
import Layout from "../Layout";
import Loading from "../../component/loading/Loading";

export default class MyMate implements View {

    private container: DomNode;
    private wallet: DomNode;
    private mateList: MateList;
    private loading: Loading | undefined;

    public discordUser: DiscordUserInfo | undefined;

    constructor() {
        Layout.current.title = msg("MY_MATE_TITLE");
        Layout.current.content.append(this.container = el(".my-mate-view",
            el("header",
                el("h1", msg("MY_MATE_TITLE")),
                el("h2", msg("MY_MATE_WALLET_ADDRESS")),
                this.wallet = el("p"),
            ),
            el("section",
                this.loading = new Loading(),
                this.mateList = new MateList(false, false),
                el("hr"),
                el(".certification-container",
                    el("h2", msg("HOLDER_DISCORD_CERTIFICATION_TITLE")),
                    el("p", msg("HOLDER_DISCORD_CERTIFICATION_DESC")),
                    el("a", msg("HOLDER_DISCORD_CERTIFICATION_BUTTON"), {
                        href: `https://discord.com/api/oauth2/authorize?client_id=939772385945612288&redirect_uri=${encodeURIComponent(`${window.location.protocol}//${window.location.host}/myMate`)}&response_type=code&scope=identify`,
                    }),
                ),
            ),
        ));
        this.load();
        this.checkDiscordLogin();
    }

    private async load() {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {

            this.wallet.append(el("a", walletAddress,
                { href: `https://opensea.io/${walletAddress}`, target: "_blank" },
            ));

            const balance = (await MateContract.balanceOf(walletAddress)).toNumber();

            const mates: number[] = [];
            const promises: Promise<void>[] = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index: number) => {
                    const mateId = await MateContract.tokenOfOwnerByIndex(walletAddress, index);
                    mates.push(mateId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);

            this.mateList.load(mates);
        }
        this.loading?.delete();
        this.loading = undefined;
    }

    private async checkDiscordLogin() {

        let code: string | undefined = new URLSearchParams(window.location.search).get("code")!;
        if (code !== null) {
            try {
                await superagent.get("https://api.dogesound.club/discord/token").query({
                    code,
                    redirect_uri: `${window.location.protocol}//${window.location.host}/myMate`,
                });
            } catch (error) {
                console.error(error);
                code = undefined;
            }
        } else {
            code = undefined;
        }

        if (code !== undefined) {
            try {
                const result = await superagent.get("https://api.dogesound.club/discord/me").query({ code });
                this.discordUser = result.body;
                this.checkMateHolder(code);
            } catch (error) {
                console.error(error);
            }
        }
    }

    private async checkMateHolder(code: string) {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {

            const message = "Check Holder";
            const signResult = await Wallet.signMessage(message);

            try {
                const result = await fetch("https://api.dogesound.club/checkholder", {
                    method: "POST",
                    body: JSON.stringify({
                        code,
                        signedMessage: signResult.signedMessage,
                        klipAddress: signResult.klipAddress,
                        address,
                    }),
                });
                const d = (await result.json());
                if (
                    d.mate === true ||
                    d.emate === true ||
                    d.bmcs === true
                ) {
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
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}