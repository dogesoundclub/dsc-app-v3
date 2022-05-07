import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import BrowserInfo from "../../../BrowserInfo";
import MobileMenu from "../component/menu/MobileMenu";
import PCMenu from "../component/menu/PCMenu";
import ViewUtil from "../../ViewUtil";

export default class BmcsLayout implements View {

    public static current: BmcsLayout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        BmcsLayout.current = this;
        let select: DomNode<HTMLSelectElement>;
        BodyNode.append(this.container = el(".bmcs-layout",
            el("header",
                el(".left",
                    el("a.menu-button", el("img", { src: "/images/shared/icn/icn_menu.svg" }), {
                        click: (event, button) => {
                            const rect = button.rect;
                            new MobileMenu({ left: rect.right, top: rect.bottom }).appendTo(BodyNode);
                        },
                    }),
                ),
                el("a", { click: () => ViewUtil.go("/") },
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
            el("main",
                this.content = el(".content"),
            ),
            el("footer",
                el(".sidebar",
                    el(".content",
                        el(".term",
                            el("a", { href: "/terms" }, "서비스이용약관"),
                            el("a", "support@ayias.io"),
                            // el("a", "개인정보처리방침"),
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
                    el("h6", "AYIYAS PTE, Ltd"),
                    el("p", "Copyright @2022 AYIAS PTE. LTD. ALL RIGHTS RESERVED.")
                ),
            ),
        ));
        select.domElement.value = BrowserInfo.language;
    }

    public set title(title: string) {
        document.title = `Biased Mate - ${title}`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
