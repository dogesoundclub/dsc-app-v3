import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import MateList from "../../component/mate/MateList";
import Alert from "../../component/shared/dialogue/Alert";
import MateContract from "../../contracts/MateContract";
import DiscordUserInfo from "../../DiscordUserInfo";
import EthereumWallet from "../../ethereum/EthereumWallet";
import Wallet from "../../klaytn/Wallet";
import Layout from "../Layout";

export default class MyMate implements View {

    private container: DomNode;
    private wallet: DomNode;
    private mateList: MateList;

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
        this.windowResizeHandler();
        this.load();
        this.checkDiscordLogin();
        window.addEventListener("resize", this.windowResizeHandler);
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
    }

    private windowResizeHandler = () => {
        this.mateList.style({ height: window.innerHeight - 213 });
    };

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
                    new Alert("메이트 홀더 인증 완료", "이메이트 홀더 인증하기", () => {
                        this.checkEMateHolder(code);
                    });
                } else {
                    new Alert("메이트 홀더 인증 실패", "이메이트 홀더 인증하기", () => {
                        this.checkEMateHolder(code);
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    private async checkEMateHolder(code: string) {
        if (await EthereumWallet.connected() !== true) {
            await EthereumWallet.connect();
        }
        const address = await EthereumWallet.loadAddress();
        if (address !== undefined) {

            const message = "Check Holder";
            const signedMessage = await EthereumWallet.signMessage(message);

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
                    new Alert("이메이트 홀더 인증 완료");
                } else {
                    new Alert("이메이트 홀더 인증 실패");
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