import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class FollowMe implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("HOLDER_DISCORD_CERTIFICATION_BUTTON");
        Layout.current.content.append(this.container = el(".holder-view",
            el("section",
                el("img", { src: "/images/shared/img/mate-mock.png" }),
                el("h1", msg("HOLDER_TITLE1")),
                el(".button-container",
                    el("a", msg("YES_BUTTON")),
                    el("a", msg("NO_BUTTON")),
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