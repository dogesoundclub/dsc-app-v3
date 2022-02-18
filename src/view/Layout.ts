import { BodyNode, DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
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
                            el("a",
                                el("img", { src: "images/view/layout/discord.svg" }),
                                {
                                    href: "https://discord.com/invite/79CqdTdu8w",
                                    target: "_blank",
                                },
                            ),
                            el("a",
                                el("img", { src: "images/view/layout/twitter.svg" }),
                                {
                                    href: "https://twitter.com/dogesoundclub",
                                    target: "_blank",
                                },
                            ),
                        ),
                    ),
                ),
                el(".provider",
                    el("img", { src: "images/view/layout/logo.svg" }),
                    el("p", msg("FOOTER_DESC")),
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
