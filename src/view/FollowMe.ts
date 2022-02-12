import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class FollowMe implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "Follow Me";
        Layout.current.content.append(this.container = el(".follow-me-view",
            el("header",
                el("h1", "FOLLOW ME 💗😍"),
                el("h2", "If you leave a Twitter or Instagram ID for your mate, they will be registered on the list below. Change your social media profile picture to Mate, and follow the Twitter list below. They will recognize that you are part of the same community and will follow you back to help you adapt on social media."),
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