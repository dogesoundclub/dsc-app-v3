import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import PCMenu from "../ui/menu/PCMenu";
import ViewUtil from "./ViewUtil";

export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(this.container = el(".layout",
            el("header",
                el("a", { click: () => ViewUtil.go("/") },
                    el("img", { src: "/images/logo.svg", alt: "logo" }),
                ),
                new PCMenu(),
            ),
            el("main",
                this.content = el(".content"),
            ),
            el("footer",
                el(".sidebar",
                    el(".content",
                        el(".term"),
                        el(".social",
                            el("a", el("img", { src: "images/view/layout/discord.svg" })),
                            el("a", el("img", { src: "images/view/layout/twitter.svg" })),
                            el("a", el("img", { src: "images/view/layout/kakao.svg" })),
                            el("a", el("img", { src: "images/view/layout/gitbook.svg" })),
                        ),
                    ),
                ),
                el(".provider",
                    el("img", { src: "images/view/layout/logo.svg" }),
                    el("p", "주식회사 디에스씨레이블 | 대표이사 :권태홍 | 사업자번호 :838-86-02498 | 개인정보보호책임자:권태홍\n주소: 대전광역시 유성구 대학로 82, 5층 505호 | business@ayias.io"),
                    el("p", "Copyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED.")
                ),
            ),
        ));
    }

    public set title(title: string) {
        document.title = `Doge Sound Club - ${title}`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
