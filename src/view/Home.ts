import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;
    private dogesound: DomNode;

    constructor() {
        Layout.current.title = msg("BAPP_TITLE");
        Layout.current.content.append(this.container = el(".home-view",
            el("header",
                el(".content",
                    el("img.logo", { src: "/images/logo.svg" }),
                    el(".intro", msg("HOME_TITLE")),
                    el(".description", msg("HOME_DESC")),
                    el("button", msg("ENTER_BUTTON"), { click: () => ViewUtil.go("/mates") }),
                ),
            ),
            el("section",
                el(".dogesound",
                    el("img.talker", { src: "https://storage.googleapis.com/dsc-mate/336/dscMate-3.png" }),
                    this.dogesound = el(".content"),
                ),
                el("hr"),
                el(".feature",
                    el(".title", msg("HOME_FEATURES_TITLE")),
                    el(".content",
                        el(".card",
                            el("img", { src: "/images/view/home/feature1.png" }),
                            el(".title", msg("HOME_FEATURES_TITLE1")),
                            el(".content", msg("HOME_FEATURES_DESC1")),
                        ),
                        el(".card",
                            el("img", { src: "/images/view/home/feature2.png" }),
                            el(".title", msg("HOME_FEATURES_TITLE2")),
                            el(".content", msg("HOME_FEATURES_DESC2")),
                        ),
                        el(".card",
                            el("img", { src: "/images/view/home/feature3.png" }),
                            el(".title", msg("HOME_FEATURES_TITLE3")),
                            el(".content", msg("HOME_FEATURES_DESC3")),
                        ),
                    ),
                ),
                el("hr"),
                el(".buy-mate",
                    el(".card",
                        el(".content",
                            el(".title", msg("HOME_BUY_MATE_TITLE")),
                            el(".content", msg("HOME_BUY_MATE_DESC1")),
                        ),
                        el(".button-wrap",
                            el("a", msg("OPENSEA_BUTTON"), { href: "https://opensea.io/collection/dogesoundclub-mates", target: "_blank" }),
                            el("a", msg("KLUBS_BUTTON"), { href: "https://klu.bs/pfp/0xE47E90C58F8336A2f24Bcd9bCB530e2e02E1E8ae", target: "_blank" }),
                        ),
                    ),
                    el(".warning", msg("HOME_BUY_MATE_DESC2")),
                ),
                el("hr"),
                el(".nft",
                    el(".title", msg("HOME_NFT_TITLE")),
                    el("section",
                        el(".mate-container",
                            el("img", { src: "/images/view/home/nft/mate0.png" }),
                            el("img", { src: "/images/view/home/nft/mate1.png" }),
                            el("img", { src: "/images/view/home/nft/mate2.png" }),
                            el("img", { src: "/images/view/home/nft/mate3.png" }),
                            el("img.pc", { src: "/images/view/home/nft/mate4.png" }),
                            el("img.pc", { src: "/images/view/home/nft/mate5.png" }),
                        ),
                        el("article",
                            el("p", msg("HOME_NFT_DESC1")),
                            el(".button-container",
                                el("a", msg("HOME_NFT_BUTTON1"), { click: () => ViewUtil.go("/mates") }),
                                el("a", msg("HOME_NFT_BUTTON2"), { click: () => ViewUtil.go("/activities") }),
                            ),
                            el("hr"),
                            el("p", "Mates can be purchased at Opensea."),
                            el(".caption", msg("HOME_NFT_DESC2")),
                            el(".button-container",
                                el("a", msg("HOME_NFT_BUTTON3"),
                                    { href: "https://opensea.io/collection/dogesoundclub-mates", target: "_blank" },
                                ),
                            ),
                            el(".image-wrap",
                                el("img", { src: "/images/logo.svg" }),
                            ),
                        ),
                    ),
                    el(".mate-container",
                        el("img.pc", { src: "/images/view/home/nft/mate6.png" }),
                        el("img.pc", { src: "/images/view/home/nft/mate7.png" }),
                        el("img.pc", { src: "/images/view/home/nft/mate8.png" }),
                        el("img.pc", { src: "/images/view/home/nft/mate9.png" }),
                        el("img.pc", { src: "/images/view/home/nft/mate10.png" }),
                        el("img.pc", { src: "/images/view/home/nft/mate11.png" }),
                    ),
                ),
                el("hr"),
                el(".mission",
                    el(".title", msg("HOME_MISSION_TITLE")),
                    el("iframe.video", {
                        width: "100%",
                        height: "590",
                        src: "https://www.youtube.com/embed/nd-ycvvOCLo",
                        title: "YouTube video player",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    }),
                    el(".content",
                        el(".title", msg("HOME_MISSION_TITLE1")),
                        el(".content", msg("HOME_MISSION_DESC1")),
                    ),
                ),
                el("hr"),
                el(".team",
                    el(".title", msg("HOME_TEAM_TITLE")),
                    el(".content",
                        el(".card",
                            el(".title", msg("HOME_TEAM_TITLE1")),
                            el(".content", msg("HOME_TEAM_DESC1")),
                        ),
                        el(".card",
                            el(".title", msg("HOME_TEAM_TITLE2")),
                            el(".content", msg("HOME_TEAM_DESC2")),
                        ),
                        el(".card",
                            el(".title", msg("HOME_TEAM_TITLE3")),
                            el(".content", msg("HOME_TEAM_DESC3")),
                        ),
                    ),
                ),
                el("hr"),
                el(".partnership",
                    el(".title", msg("HOME_PARTNERSHIP_TITLE")),
                    el(".content",
                        el(".title", msg("HOME_PARTNERSHIP_LABLE_TITLE")),
                        el(".content",
                            el("img", { src: "/images/view/home/partnership/ozys.png" }),
                            el("img", { src: "/images/view/home/partnership/codestates.png" }),
                            el("img", { src: "/images/view/home/partnership/clonesNeverDie.png" }),
                            el("img", { src: "/images/view/home/partnership/asiaNftNow.png" }),
                            el("img", { src: "/images/view/home/partnership/nftz.png" }),
                            el("img", { src: "/images/view/home/partnership/metakongz.png" }),
                        ),
                        el(".title", msg("HOME_PARTNERSHIP_GOVERNANCE_TITLE")),
                        el(".content",
                            el("img", { src: "/images/view/home/partnership/casesByKate.png" }),
                            el("img", { src: "/images/view/home/partnership/animalsPunks.png" }),
                            el("img", { src: "/images/view/home/partnership/a.c.b.png" }),
                            el("img", { src: "/images/view/home/partnership/klits.png" }),
                            el("img", { src: "/images/view/home/partnership/crytorus.png" }),
                        ),
                        el(".title", msg("HOME_PARTNERSHIP_GOVERNANCE_TITLE")),
                        el(".content",
                            el("img", { src: "/images/view/home/partnership/klayRabbit.png" }),
                            el("img", { src: "/images/view/home/partnership/3pm.png" }),
                            el("img", { src: "/images/view/home/partnership/cuna.png" }),
                            el("img", { src: "/images/view/home/partnership/catTownPunks.png" }),
                            el("img", { src: "/images/view/home/partnership/rit.png" }),
                            el("img", { src: "/images/view/home/partnership/kepler.png" }),
                        ),
                    ),
                ),
                el("hr"),
                el(".contact",
                    el(".title", msg("HOME_CONTACT_TITLE")),
                    el(".content",
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/discord.svg" }),
                            el(".content",
                                el(".title", msg("DISCORD_BUTTON")),
                            ),
                            {
                                href: "https://discord.com/invite/79CqdTdu8w",
                                target: "_blank",
                            },
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/telegram.svg" }),
                            el(".content",
                                el(".title", msg("TELEGRAM_BUTTON")),
                            ),
                            {
                                href: "https://t.me/dogesoundclub",
                                target: "_blank",
                            },
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/twitter.svg" }),
                            el(".content",
                                el(".title", msg("TWITTER_BUTTON")),
                            ),
                            {
                                href: "https://twitter.com/dogesoundclub",
                                target: "_blank",
                            },
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/medium.svg" }),
                            el(".content",
                                el(".title", msg("MEDIUM_BUTTON")),
                            ),
                            {
                                href: "https://medium.com/dogesoundclub",
                                target: "_blank",
                            },
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/github.svg" }),
                            el(".content",
                                el(".title", msg("GITHUB_BUTTON")),
                            ),
                            {
                                href: "https://github.com/dogesoundclub",
                                target: "_blank",
                            },
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/youtube.svg" }),
                            el(".content",
                                el(".title", msg("YOUTUBE_BUTTON")),
                            ),
                            {
                                href: "https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w",
                                target: "_blank",
                            },
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/email.svg" }),
                            el(".content",
                                el(".title", msg("EMAIL_BUTTON")),
                                el(".caption", msg("EMAIL_DESC")),
                            ),
                            {
                                href: "mailto:support@ayias.io",
                            },
                        ),
                        el("a.card",
                            el("img", { src: "/images/shared/icn/icn_docs_color.svg" }),
                            el(".content",
                                el(".title", "Document"),
                            ),
                            {
                                href: "https://dsclabel.gitbook.io/dsc",
                                target: "_blank",
                            },
                        ),
                    ),
                ),
                el("hr"),
                el(".tweets",
                    el(".title", "TWEETS 😊😍💕"),
                    el("a.twitter-timeline", {
                        "data-theme": "dark",
                        "data-height": "600",
                        href: "https://twitter.com/dogesoundclub?ref_src=twsrc%5Etfw",
                    }),
                    el("script", {
                        async: "async",
                        src: "https://platform.twitter.com/widgets.js",
                        charset: "utf-8"
                    }),
                ),
            ),
        ));
        this.loadDogeSound();
    }

    private async loadDogeSound() {
        try {
            const result = await superagent.get("https://api.dogesound.club/dogesoundwinner");
            const winnerInfo = result.body;

            if (this.container.deleted !== true) {
                this.dogesound.append(
                    el(".title", msg("HOME_DOGE_SOUND_WINNER_TITLE").replace(/{number}/, String(winnerInfo.round + 1))),
                    el(".old-sound", msg("HOME_DOGE_SOUND_WINNER_DESC1").replace(/{number}/, String(winnerInfo.round + 1))),
                    el(".sound", `"${winnerInfo.dogesound}"`),
                    el("a.address", winnerInfo.winner, { href: `https://opensea.io/${winnerInfo.winner}`, target: "_blank" }),
                    el("p.warning", msg("HOME_DOGE_SOUND_WINNER_WARNING")),
                );
                //this.winner.empty().appendText(`${msg("HOME_WINNER_TITLE").replace(/{round}/, String(winnerInfo.round + 1))} `);
                //this.winner.append(el("a", winnerInfo.winner, { href: `https://opensea.io/${winnerInfo.winner}`, target: "_blank" }));
                //this.dogesound.empty().appendText(`${msg("HOME_WINNER_DESCRIPTION").replace(/{round}/, String(winnerInfo.round + 1))} \nㅡ ${winnerInfo.dogesound}`);
            }
        } catch (e) {
            this.dogesound.appendText(msg("HOME_WINNER_ERROR"));
            console.log(e);
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