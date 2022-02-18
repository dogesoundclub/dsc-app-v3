import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Activities implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("ACTIVITIES_TITLE");
        Layout.current.content.append(this.container = el(".activities-view",
            el("header",
                el("h1", msg("ACTIVITIES_TITLE")),
                el("h2", msg("ACTIVITIES_DESC")),
            ),
            el("section",
                el(".certification-container",
                    el("h2", "HOLDER CERTIFICATION WITH DISCORD"),
                    el("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."),
                    el("button", "CERTIFICATION"),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE1")),
                    el("p", msg("ACTIVITIES_DESC1")),
                    el("button", msg("ENTER_BUTTON")),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE2")),
                    el("p", msg("ACTIVITIES_DESC2")),
                    el("button", msg("ENTER_BUTTON")),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE3")),
                    el("p", msg("ACTIVITIES_DESC3")),
                    el("button", msg("ENTER_BUTTON")),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("ACTIVITIES_TITLE4")),
                    el("p", msg("ACTIVITIES_DESC4")),
                    el("button", msg("ENTER_BUTTON")),
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