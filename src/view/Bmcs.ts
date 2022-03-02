import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import BrowserInfo from "../BrowserInfo";
import BMCSAlert from "../component/bmcs/BMCSAlert";
import BMCSCollapsibleItem from "../component/bmcs/BMCSCollapsibleItem";
import MobileMenu from "../component/bmcs/menu/MobileMenu";
import PCMenu from "../component/bmcs/menu/PCMenu";
import ViewUtil from "./ViewUtil";
import MintingPopup from "../component/bmcs/MintingPopup";

export default class Bmcs implements View {

    private container: DomNode;

    constructor() {
        document.title = "Biased Mate Cycle Shop";
        let select: DomNode<HTMLSelectElement>;

        BodyNode.append(
            (this.container = el(".bmcs-view",
                el(".nav",
                    el(".left",
                        el("a.menu-button", el("img", { src: "/images/shared/icn/icn_menu.svg" }), {
                            click: (event, button) => {
                                const rect = button.rect;
                                new MobileMenu({ left: rect.right, top: rect.bottom }).appendTo(BodyNode);
                            },
                        }),
                    ),
                    el("a", { click: () => ViewUtil.go("/bmcs") },
                        el("img.logo", { align: "left", src: "/images/shared/logo/bmcs.svg", alt: "logo" }),
                    ),
                    new PCMenu(),
                    select = el("select.language-select",
                        el("option", "🇰🇷 KOREAN", { value: "ko" }),
                        // el("option", "🇺🇸 ENG", { value: "en" }),
                        // el("option", "🇯🇵 JAP", { value: "jp" }),
                        {
                            change: () => {
                                BrowserInfo.changeLanguage(select.domElement.value);
                            },
                        },
                    ),
                ),
                el("header.section",
                    el(".overlay"),
                    el("section",
                        el("h1", msg("BMCS_TITLE")),
                        el("p", msg("BMCS_DESC")),
                        el("a", "MINTING", { click: () => { new MintingPopup() } }),
                    ),
                ),
                el("section",
                    el("article.section",
                        el("h2", msg("BMCS_KEYWORD_TITLE")),
                        new BMCSCollapsibleItem(msg("BMCS_KEYWORD_TITLE1"), msg("BMCS_KEYWORD_DESC1")),
                        new BMCSCollapsibleItem(msg("BMCS_KEYWORD_TITLE2"), msg("BMCS_KEYWORD_DESC2")),
                        new BMCSCollapsibleItem(msg("BMCS_KEYWORD_TITLE3"), msg("BMCS_KEYWORD_DESC3")),
                    ),
                    el("hr"),
                    el("article.biased-mate-container section",
                        el("h2", msg("BMCS_MATE_TITLE")),
                        el(".content",
                            el("img", { src: "/images/view/bmcs/mate1.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate2.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate3.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate4.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate5.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate6.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate7.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate8.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate9.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate10.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate11.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate12.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate13.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate14.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate15.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate16.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate17.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate18.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate19.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate20.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate21.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate22.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate23.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate24.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate25.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate26.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate27.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate28.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate29.png", alt: "mate" }),
                            el("img", { src: "/images/view/bmcs/mate30.png", alt: "mate" }),
                        ),
                    ),
                    el("hr"),
                    el("article.vibe-container section",
                        el("h2", msg("BMCS_VIBE_TITLE")),
                        el("h3", msg("BMCS_VIBE_DESC")),
                        el(".content",
                            el(".card",
                                el("img", { src: "/images/view/bmcs/vibe1.png", alt: "vibe" }),
                                el("h4", msg("BMCS_VIBE_CARD_TITLE1")),
                                el("p", msg("BMCS_VIBE_CARD_DESC1")),
                            ),
                            el(".card",
                                el("img", { src: "/images/view/bmcs/vibe2.png", alt: "vibe" }),
                                el("h4", msg("BMCS_VIBE_CARD_TITLE2")),
                                el("p", msg("BMCS_VIBE_CARD_DESC2")),
                            ),
                            el(".card",
                                el("img", { src: "/images/view/bmcs/vibe3.png", alt: "vibe" }),
                                el("h4", msg("BMCS_VIBE_CARD_TITLE3")),
                                el("p", msg("BMCS_VIBE_CARD_DESC3")),
                            ), el(".card",
                                el("img", { src: "/images/view/bmcs/vibe4.png", alt: "vibe" }),
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
                    el("article.roadmap-container section",
                        el("h2", msg("BMCS_ROADMAP_TITLE")),
                        el("h3", msg("BMCS_ROADMAP_DESC")),
                        el(".content",
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE1"), msg("BMCS_ROADMAP_ALERT_DESC1"), "OK") } },
                                el("h4", "000%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE1")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE2"), msg("BMCS_ROADMAP_ALERT_DESC2"), "OK") } },
                                el("h4", "000%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE2")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE3"), msg("BMCS_ROADMAP_ALERT_DESC3"), "OK") } },
                                el("h4", "010%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE3")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE4"), msg("BMCS_ROADMAP_ALERT_DESC4"), "OK") } },
                                el("h4", "030%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE4")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE5"), msg("BMCS_ROADMAP_ALERT_DESC5"), "OK") } },
                                el("h4", "040%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE5")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE6"), msg("BMCS_ROADMAP_ALERT_DESC6"), "OK") } },
                                el("h4", "050%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE6")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE7"), msg("BMCS_ROADMAP_ALERT_DESC7"), "OK") } },
                                el("h4", "060%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE7")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE8"), msg("BMCS_ROADMAP_ALERT_DESC8"), "OK") } },
                                el("h4", "070%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE8")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE9"), msg("BMCS_ROADMAP_ALERT_DESC9"), "OK") } },
                                el("h4", "080%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE9")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE10"), msg("BMCS_ROADMAP_ALERT_DESC10"), "OK") } },
                                el("h4", "080%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE10")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE11"), msg("BMCS_ROADMAP_ALERT_DESC11"), "OK") } },
                                el("h4", "080%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE11")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE12"), msg("BMCS_ROADMAP_ALERT_DESC12"), "OK") } },
                                el("h4", "090%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE12")),
                            ),
                            el(".card", { click: () => { new BMCSAlert(msg("BMCS_ROADMAP_ALERT_TITLE13"), msg("BMCS_ROADMAP_ALERT_DESC13"), "OK") } },
                                el("h4", "100%"),
                                el("p", msg("BMCS_ROADMAP_CARD_TITLE13")),
                            ),
                        ),
                        el("a", msg("BMCS_ROADMAP_BUTTON")),
                    ),
                    el("hr"),
                    el("article.faq-container section",
                        el("h2", "FAQ"),
                        new BMCSCollapsibleItem(msg("BMCS_FAQ_TITLE1"), msg("BMCS_FAQ_DESC1")),
                        new BMCSCollapsibleItem(msg("BMCS_FAQ_TITLE2"), msg("BMCS_FAQ_DESC2")),
                        new BMCSCollapsibleItem(msg("BMCS_FAQ_TITLE3"), msg("BMCS_FAQ_DESC3")),
                        new BMCSCollapsibleItem(msg("BMCS_FAQ_TITLE4"), msg("BMCS_FAQ_DESC4")),
                    ),
                    el("hr"),
                    el("article.partnership-container section",
                        el("h2", "PARTNERSHIP"),
                        el("h3", "DSC Lable"),
                        el(".content",
                            el("img", { src: "/images/view/bmcs/partnership1.png", alt: "partnership" }),
                            el("img", { src: "/images/view/bmcs/partnership2.png", alt: "partnership" }),
                            el("img", { src: "/images/view/bmcs/partnership3.png", alt: "partnership" }),
                            el("img", { src: "/images/view/bmcs/partnership4.png", alt: "partnership" }),
                            el("img", { src: "/images/view/bmcs/partnership5.png", alt: "partnership" }),
                            el("img", { src: "/images/view/bmcs/partnership6.png", alt: "partnership" }),
                            el("img", { src: "/images/view/bmcs/partnership7.png", alt: "partnership" }),
                            el("img", { src: "/images/view/bmcs/partnership8.png", alt: "partnership" }),
                        ),
                    ),
                ),
                el("footer",
                    el(".sidebar",
                        el(".content",
                            el(".term",
                                // el("a", "서비스이용약관"),
                                // el("span", "|"),
                                // el("a", "개인정보처리방침"),
                                // el("span", "|"),
                                // el("a", "회사소개"),
                            ),
                            el(".social",
                                el("img", { src: "/images/shared/icn/icn_linktree.svg" }),
                                el("a", "링크트리 바로가기", {
                                    href: "https://linktr.ee/dogesoundclub",
                                    target: "_blank",
                                }),
                            ),
                        ),
                    ),
                    el(".provider",
                        el("img", { src: "/images/view/layout/logo.svg" }),
                        el("p", msg("FOOTER_DESC")),
                        el("p", "Copyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED.")
                    ),
                ),
            ))
        );
        select.domElement.value = BrowserInfo.language;
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
