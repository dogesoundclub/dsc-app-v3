import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import BMCSAlert from "../component/BMCSAlert";
import BMCSCollapsibleItem from "../component/BMCSCollapsibleItem";
import MintingPopup from "../component/MintingPopup";
import BmcsLayout from "./Layout";

export default class Bmcs implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = msg("Home");
        BmcsLayout.current.content.append(
            (this.container = el(".bmcs-view",
                el("header.section",
                    el(".overlay"),
                    el("section",
                        el("h1", msg("BMCS_TITLE")),
                        el("p", msg("BMCS_DESC")),
                        el("a", "MINT", { click: () => { new MintingPopup() } }),
                    ),
                ),
                el("section",
                    el("article.section #keyword",
                        el("h2", msg("BMCS_KEYWORD_TITLE")),
                        new BMCSCollapsibleItem(msg("BMCS_KEYWORD_TITLE1"), msg("BMCS_KEYWORD_DESC1")),
                        new BMCSCollapsibleItem(msg("BMCS_KEYWORD_TITLE2"), msg("BMCS_KEYWORD_DESC2")),
                        new BMCSCollapsibleItem(msg("BMCS_KEYWORD_TITLE3"), msg("BMCS_KEYWORD_DESC3")),
                    ),
                    el("hr"),
                    el("article.biased-mate-container section #biasedMate",
                        el("h2", msg("BMCS_MATE_TITLE")),
                        el(".content",
                            el("img", { src: "/images/view/bmcs/home/mate1.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate2.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate3.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate4.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate5.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate6.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate7.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate8.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate9.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate10.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate11.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate12.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate13.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate14.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate15.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate16.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate17.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate18.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate19.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate20.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate21.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate22.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate23.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate24.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate25.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate26.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate27.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate28.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate29.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/home/mate30.png", alt: "mate" }),
                        ),
                    ),
                    el("hr"),
                    el("article.vibe-container section #biasedCard",
                        el("h2", msg("BMCS_VIBE_TITLE")),
                        el("h3", msg("BMCS_VIBE_DESC")),
                        el(".content",
                            el(".card",
                                el("img", { src: "/images/view/bmcs/home/vibe1.png", alt: "vibe" }),
                                el("h4", msg("BMCS_VIBE_CARD_TITLE1")),
                                el("p", msg("BMCS_VIBE_CARD_DESC1")),
                            ),
                            el(".card",
                                el("img", { src: "/images/view/bmcs/home/vibe2.png", alt: "vibe" }),
                                el("h4", msg("BMCS_VIBE_CARD_TITLE2")),
                                el("p", msg("BMCS_VIBE_CARD_DESC2")),
                            ),
                            el(".card",
                                el("img", { src: "/images/view/bmcs/home/vibe3.png", alt: "vibe" }),
                                el("h4", msg("BMCS_VIBE_CARD_TITLE3")),
                                el("p", msg("BMCS_VIBE_CARD_DESC3")),
                            ), el(".card",
                                el("img", { src: "/images/view/bmcs/home/vibe4.png", alt: "vibe" }),
                                el("h4", msg("BMCS_VIBE_CARD_TITLE4")),
                                el("p", msg("BMCS_VIBE_CARD_DESC4")),
                            ),
                        ),
                        el(".warning-container",
                            el("h4", msg("BMCS_VIBE_WARNING_TITLE")),
                            el("p", msg("BMCS_VIBE_WARNING_DESC")),
                        ),
                    ),
                    el("hr"),
                    el("article.roadmap-container section #roadmap",
                        el("h2", msg("BMCS_ROADMAP_TITLE")),
                        el("h3", msg("BMCS_ROADMAP_DESC")),
                        el(".content",
                            el(".card-container",
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE1"), msg("BMCS_ROADMAP_ALERT_DESC1"), "OK") } },
                                    el("h4", "000%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE1")),
                                    el("img.right", { src: "/images/view/bmcs/home/icn-arrow-right.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE2"), msg("BMCS_ROADMAP_ALERT_DESC2"), "OK") } },
                                    el("h4", "000%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE2")),
                                    el("img.right", { src: "/images/view/bmcs/home/icn-arrow-right.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE3"), msg("BMCS_ROADMAP_ALERT_DESC3"), "OK") } },
                                    el("h4", "010%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE3")),
                                    el("img.down", { src: "/images/view/bmcs/home/icn-arrow-down.svg" }),
                                ),
                            ),
                            el(".card-reverse-container",
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE4"), msg("BMCS_ROADMAP_ALERT_DESC4"), "OK") } },
                                    el("h4", "030%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE4")),
                                    el("img.left", { src: "/images/view/bmcs/home/icn-arrow-left.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE5"), msg("BMCS_ROADMAP_ALERT_DESC5"), "OK") } },
                                    el("h4", "040%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE5")),
                                    el("img.left", { src: "/images/view/bmcs/home/icn-arrow-left.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE6"), msg("BMCS_ROADMAP_ALERT_DESC6"), "OK") } },
                                    el("h4", "050%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE6")),
                                    el("img.down", { src: "/images/view/bmcs/home/icn-arrow-down.svg" }),
                                ),
                            ),
                            el(".card-container",
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE7"), msg("BMCS_ROADMAP_ALERT_DESC7"), "OK") } },
                                    el("h4", "060%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE7")),
                                    el("img.right", { src: "/images/view/bmcs/home/icn-arrow-right.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE8"), msg("BMCS_ROADMAP_ALERT_DESC8"), "OK") } },
                                    el("h4", "070%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE8")),
                                    el("img.right", { src: "/images/view/bmcs/home/icn-arrow-right.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE9"), msg("BMCS_ROADMAP_ALERT_DESC9"), "OK") } },
                                    el("h4", "080%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE9")),
                                    el("img.down", { src: "/images/view/bmcs/home/icn-arrow-down.svg" }),
                                ),
                            ),
                            el(".card-reverse-container",
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE10"), msg("BMCS_ROADMAP_ALERT_DESC10"), "OK") } },
                                    el("h4", "080%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE10")),
                                    el("img.left", { src: "/images/view/bmcs/home/icn-arrow-left.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE11"), msg("BMCS_ROADMAP_ALERT_DESC11"), "OK") } },
                                    el("h4", "090%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE11")),
                                    el("img.left", { src: "/images/view/bmcs/home/icn-arrow-left.svg" }),
                                ),
                                el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE12"), msg("BMCS_ROADMAP_ALERT_DESC12"), "OK") } },
                                    el("h4", "100%"),
                                    el("p", msg("BMCS_ROADMAP_CARD_TITLE12")),
                                    el("img.down", { src: "/images/view/bmcs/home/icn-arrow-down.svg" }),
                                ),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE13"), msg("BMCS_ROADMAP_ALERT_DESC13"), "OK") } },
                                el("h4", "100%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE13")),
                            ),
                        ),
                        el("a", msg("BMCS_ROADMAP_BUTTON"), { href: "https://url.kr/uzh9nj" }),
                    ),
                    el("hr"),
                    el("article.faq-container section #faq",
                        el("h2", "FAQ"),
                        new BMCSCollapsibleItem(msg("BMCS_FAQ_TITLE2"), msg("BMCS_FAQ_DESC2")),
                        new BMCSCollapsibleItem(msg("BMCS_FAQ_TITLE3"), msg("BMCS_FAQ_DESC3")),
                        new BMCSCollapsibleItem(msg("BMCS_FAQ_TITLE4"), msg("BMCS_FAQ_DESC4")),
                    ),
                    el("hr"),
                    el("article.contact-container section",
                        el("h2", "CONTACT"),
                        el(".content",
                            el("a.card",
                                el("img", { src: "/images/view/mate/home/contact/kakaotalk.svg" }),
                                el(".content",
                                    el(".title", msg("KAKAOTALK_BUTTON")),
                                ),
                                {
                                    // href: "https://discord.com/invite/79CqdTdu8w",
                                    target: "_blank",
                                },
                            ),
                            el("a.card",
                                el("img", { src: "/images/view/mate/home/contact/telegram.svg" }),
                                el(".content",
                                    el(".title", msg("TELEGRAM_BUTTON")),
                                ),
                                {
                                    href: "https://t.me/dogesoundclub",
                                    target: "_blank",
                                },
                            ),
                            el("a.card",
                                el("img", { src: "/images/view/mate/home/contact/discord.svg" }),
                                el(".content",
                                    el(".title", msg("DISCORD_BUTTON")),
                                ),
                                {
                                    href: "https://discord.com/invite/79CqdTdu8w",
                                    target: "_blank",
                                },
                            ),
                            el("a.card",
                                el("img", { src: "/images/view/mate/home/contact/twitter.svg" }),
                                el(".content",
                                    el(".title", msg("TWITTER_BUTTON")),
                                ),
                                {
                                    href: "https://twitter.com/dogesoundclub",
                                    target: "_blank",
                                },
                            ),
                        ),
                    ),
                    el("hr"),
                    el("article.partnership-container section #partnership",
                        el("h2", "PARTNERSHIP"),
                        el("h3", "DSC LABEL"),
                        el(".content",
                            el("img", { src: "/images/view/mate/home/partnership/ozys.png" }),
                            el("img", { src: "/images/view/mate/home/partnership/codestates.png" }),
                            el("img", { src: "/images/view/mate/home/partnership/clonesNeverDie.png" }),
                            el("img", { src: "/images/view/mate/home/partnership/asiaNftNow.png" }),
                            el("img", { src: "/images/view/mate/home/partnership/nftz.png" }),
                            el("img", { src: "/images/view/mate/home/partnership/raving.png" }),
                            el("img", { src: "/images/view/mate/home/partnership/kpct.png" }),
                            el("img", { src: "/images/view/mate/home/partnership/metakongz.png" }),
                        ),
                    ),
                ),
            ))
        );
        this.init()
    }

    private init(): void {
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}
