"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const superagent_1 = __importDefault(require("superagent"));
const DogeSoundMinterContract_1 = __importDefault(require("../../../contracts/DogeSoundMinterContract"));
const Wallet_1 = __importDefault(require("../../../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("../../ViewUtil"));
const Alert_1 = __importDefault(require("../component/dialogue/Alert"));
const PageSelect_1 = __importDefault(require("../component/PageSelect"));
const Layout_1 = __importDefault(require("./Layout"));
class Home {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("BAPP_TITLE");
        Layout_1.default.current.content.append((this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("header", (0, skynode_1.el)(".page-wrap", new PageSelect_1.default("CH1 : 도지사운드클럽")), (0, skynode_1.el)(".content", (0, skynode_1.el)("img.logo", { src: "/images/shared/logo/dsc.svg" }), (0, skynode_1.el)(".intro", (0, msg_js_1.default)("HOME_TITLE")), (0, skynode_1.el)(".description", (0, msg_js_1.default)("HOME_DESC")), (0, skynode_1.el)("button", (0, msg_js_1.default)("ENTER_BUTTON"), {
            href: "https://discord.gg/dogesoundclub",
            target: "_blank",
        }))), (0, skynode_1.el)("section", (0, skynode_1.el)(".dogesound", (0, skynode_1.el)("img.talker", {
            src: "https://storage.googleapis.com/dsc-mate/336/dscMate-3.png",
        }), (this.dogesound = (0, skynode_1.el)(".content"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".feature", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_FEATURES_TITLE")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".card", (0, skynode_1.el)("img", { src: "/images/view/mate/home/feature1.png" }), (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_FEATURES_TITLE1")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_FEATURES_DESC1"))), (0, skynode_1.el)(".card", (0, skynode_1.el)("img", { src: "/images/view/mate/home/feature2.png" }), (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_FEATURES_TITLE2")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_FEATURES_DESC2"))), (0, skynode_1.el)(".card", (0, skynode_1.el)("img", { src: "/images/view/mate/home/feature3.png" }), (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_FEATURES_TITLE3")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_FEATURES_DESC3"))))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".buy-mate", (0, skynode_1.el)(".card", (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_BUY_MATE_TITLE")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_BUY_MATE_DESC1"))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", (0, msg_js_1.default)("OPENSEA_BUTTON"), {
            href: "https://opensea.io/collection/dogesoundclub-mates",
            target: "_blank",
        }), (0, skynode_1.el)("a", (0, msg_js_1.default)("KLUBS_BUTTON"), {
            href: "https://klu.bs/pfp/0xE47E90C58F8336A2f24Bcd9bCB530e2e02E1E8ae",
            target: "_blank",
        }))), (0, skynode_1.el)(".warning", (0, msg_js_1.default)("HOME_BUY_MATE_DESC2"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".nft", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_NFT_TITLE")), (0, skynode_1.el)("section", (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("img", { src: "/images/view/mate/home/nft/mate0.png" }), (0, skynode_1.el)("img", { src: "/images/view/mate/home/nft/mate1.png" }), (0, skynode_1.el)("img", { src: "/images/view/mate/home/nft/mate2.png" }), (0, skynode_1.el)("img", { src: "/images/view/mate/home/nft/mate3.png" }), (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate4.png" }), (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate5.png" })), (0, skynode_1.el)("article", (0, skynode_1.el)("p", (0, msg_js_1.default)("HOME_NFT_DESC1")), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", (0, msg_js_1.default)("HOME_NFT_BUTTON1"), {
            click: () => ViewUtil_1.default.go("/mates"),
        }), (0, skynode_1.el)("a", (0, msg_js_1.default)("HOME_NFT_BUTTON2"), {
            click: () => ViewUtil_1.default.go("/activities"),
        })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("p", "Mates can be purchased at Opensea."), (0, skynode_1.el)(".caption", (0, msg_js_1.default)("HOME_NFT_DESC2")), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", (0, msg_js_1.default)("HOME_NFT_BUTTON3"), {
            href: "https://opensea.io/collection/dogesoundclub-mates",
            target: "_blank",
        })), (0, skynode_1.el)(".image-wrap", (0, skynode_1.el)("img", { src: "/images/shared/logo/dsc.svg" })))), (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate6.png" }), (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate7.png" }), (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate8.png" }), (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate9.png" }), (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate10.png" }), (0, skynode_1.el)("img.pc", { src: "/images/view/mate/home/nft/mate11.png" }))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mission", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_MISSION_TITLE")), (0, skynode_1.el)("iframe.video", {
            width: "100%",
            height: "590",
            src: "https://www.youtube.com/embed/nd-ycvvOCLo",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_MISSION_TITLE1")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_MISSION_DESC1")))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".team", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_TEAM_TITLE")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".card", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_TEAM_TITLE1")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_TEAM_DESC1"))), (0, skynode_1.el)(".card", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_TEAM_TITLE2")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_TEAM_DESC2"))), (0, skynode_1.el)(".card", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_TEAM_TITLE3")), (0, skynode_1.el)(".content", (0, msg_js_1.default)("HOME_TEAM_DESC3"))))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".partnership", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_PARTNERSHIP_TITLE")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title-container", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_PARTNERSHIP_LABEL_TITLE")), (0, skynode_1.el)(".arrow-container", (0, skynode_1.el)("img", {
            src: "/images/shared/icn/icn_arrow_left.svg",
            alt: "arrow-left",
        }), (0, skynode_1.el)("img", {
            src: "/images/shared/icn/icn_arrow_right.svg",
            alt: "arrow-right",
        }))), (0, skynode_1.el)(".content", (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/lg.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/sk.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/uppsala.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/apmss.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/fsn.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/plateno.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/spanlel24x7.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/ozys.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/codestates.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/clonesNeverDie.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/asiaNftNow.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/nftz.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/raving.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/kpct.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/metakongz.png",
        })), (0, skynode_1.el)(".title-container", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_PARTNERSHIP_GOVERNANCE_TITLE")), (0, skynode_1.el)(".arrow-container", (0, skynode_1.el)("img", {
            src: "/images/shared/icn/icn_arrow_left.svg",
            alt: "arrow-left",
        }), (0, skynode_1.el)("img", {
            src: "/images/shared/icn/icn_arrow_right.svg",
            alt: "arrow-right",
        }))), (0, skynode_1.el)(".content", (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/casesByKate.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/animalsPunks.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/a.c.b.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/klits.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/crytorus.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/klayRabbit.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/3pm.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/cuna.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/catTownPunks.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/rit.png",
        }), (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/partnership/kepler.png",
        })))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".contact", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_CONTACT_TITLE")), (0, skynode_1.el)(".content", (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/contact/discord.svg",
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("DISCORD_BUTTON"))), {
            href: "https://discord.com/invite/79CqdTdu8w",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/contact/telegram.svg",
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("TELEGRAM_BUTTON"))), {
            href: "https://t.me/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/contact/twitter.svg",
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("TWITTER_BUTTON"))), {
            href: "https://twitter.com/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/mate/home/contact/medium.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("MEDIUM_BUTTON"))), {
            href: "https://medium.com/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/mate/home/contact/github.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("GITHUB_BUTTON"))), {
            href: "https://github.com/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", {
            src: "/images/view/mate/home/contact/youtube.svg",
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("YOUTUBE_BUTTON"))), {
            href: "https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/mate/home/contact/email.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", (0, msg_js_1.default)("EMAIL_BUTTON")), (0, skynode_1.el)(".caption", (0, msg_js_1.default)("EMAIL_DESC"))), {
            href: "mailto:support@dsclabel.co.kr",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_docs_color.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Document")), {
            href: "https://dsclabel.gitbook.io/dsc",
            target: "_blank",
        }))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".tweets", (0, skynode_1.el)(".title", "TWEETS 😊😍💕"), (0, skynode_1.el)("a.twitter-timeline", {
            "data-theme": "dark",
            "data-height": "600",
            href: "https://twitter.com/dogesoundclub?ref_src=twsrc%5Etfw",
        }), (0, skynode_1.el)("script", {
            async: "async",
            src: "https://platform.twitter.com/widgets.js",
            charset: "utf-8",
        }))))));
        this.loadDogeSound();
    }
    async loadDogeSound() {
        try {
            const result = await superagent_1.default.get("https://api.dogesound.club/dogesoundwinner");
            const winnerInfo = result.body;
            if (this.container.deleted !== true) {
                this.dogesound.append((0, skynode_1.el)("header", (0, skynode_1.el)(".title", (0, msg_js_1.default)("HOME_DOGE_SOUND_WINNER_TITLE").replace(/{number}/, String(winnerInfo.round + 1))), (0, skynode_1.el)("a.mint-button", (0, msg_js_1.default)("HOME_DOGE_SOUND_WINNER_MINT_BUTTON"), {
                    click: async () => {
                        if ((await Wallet_1.default.connected()) !== true) {
                            await Wallet_1.default.connect();
                        }
                        const walletAddress = await Wallet_1.default.loadAddress();
                        if (walletAddress !== undefined) {
                            const results = await (await fetch("https://api.dogesound.club/sign-mint-dogesound-winner?" +
                                new URLSearchParams({
                                    winner: winnerInfo.winner,
                                    round: winnerInfo.round,
                                    dogesound: winnerInfo.dogesound,
                                }))).text();
                            console.log(results);
                            if (walletAddress.toLowerCase() ===
                                winnerInfo.winner.toLowerCase()) {
                                await DogeSoundMinterContract_1.default.mintWinnerNFT(winnerInfo.round, winnerInfo.dogesound, results);
                            }
                            else {
                                new Alert_1.default((0, msg_js_1.default)("HOME_DOGE_SOUND_WINNER_POPUP"));
                            }
                        }
                    },
                })), (0, skynode_1.el)(".old-sound", (0, msg_js_1.default)("HOME_DOGE_SOUND_WINNER_DESC1").replace(/{number}/, String(winnerInfo.round + 1))), (0, skynode_1.el)(".sound", `"${winnerInfo.dogesound}"`), (0, skynode_1.el)("a.address", winnerInfo.winner, {
                    href: `https://opensea.io/${winnerInfo.winner}`,
                    target: "_blank",
                }), (0, skynode_1.el)("p.warning", (0, msg_js_1.default)("HOME_DOGE_SOUND_WINNER_WARNING")), (0, skynode_1.el)("a.mobile-mint-button", (0, msg_js_1.default)("HOME_DOGE_SOUND_WINNER_MINT_BUTTON"), {
                    click: async () => {
                        if ((await Wallet_1.default.connected()) !== true) {
                            await Wallet_1.default.connect();
                        }
                        const walletAddress = await Wallet_1.default.loadAddress();
                        if (walletAddress !== undefined) {
                            const results = await (await fetch("https://api.dogesound.club/sign-mint-dogesound-winner?" +
                                new URLSearchParams({
                                    winner: winnerInfo.winner,
                                    round: winnerInfo.round,
                                    dogesound: winnerInfo.dogesound,
                                }))).text();
                            if (walletAddress.toLowerCase() ===
                                winnerInfo.winner.toLowerCase()) {
                                await DogeSoundMinterContract_1.default.mintWinnerNFT(winnerInfo.round, winnerInfo.dogesound, results);
                            }
                            else {
                                new Alert_1.default((0, msg_js_1.default)("HOME_DOGE_SOUND_WINNER_POPUP"));
                            }
                        }
                    },
                }));
            }
        }
        catch (e) {
            this.dogesound.appendText((0, msg_js_1.default)("HOME_WINNER_ERROR"));
            console.log(e);
        }
    }
    changeParams(params, uri) { }
    close() {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map