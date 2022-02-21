import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import BrowserInfo from "../BrowserInfo";
import MobileMenu from "../component/shared/menu/MobileMenu";
import PCMenu from "../component/shared/menu/PCMenu";
import ViewUtil from "./ViewUtil";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        let select: DomNode<HTMLSelectElement>;
        BodyNode.append(this.container = el(".layout",
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
                    el("img", { src: "/images/logo.svg", alt: "logo" }),
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
                        el(".term"),
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
        ));
        select.domElement.value = BrowserInfo.language;
    }

    public set title(title: string) {
        document.title = `Doge Sound Club - ${title}`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
