import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class FollowMe implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("FOLLOW_ME_TITLE");
        Layout.current.content.append(this.container = el(".follow-me-view",
            el("header",
                el("h1", msg("FOLLOW_ME_TITLE")),
                el("h2", msg("FOLLOW_ME_DESC")),
            ),
            el("section",
                el("section",
                    el("img", { src: "/images/shared/img/mate-mock.png" }),
                    el("article",
                        el(".content-container",
                            el("img", { src: "/images/shared/icn/icn_twitter.svg" }),
                            el("p", "@kakun1992"),
                        ),
                        el(".content-container",
                            el("img", { src: "/images/shared/icn/icn_instagram.svg" }),
                            el("p", "@kakun1992"),
                        ),
                    ),
                ),
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}