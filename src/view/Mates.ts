import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Mates implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("MATE_TITLE");
        Layout.current.content.append(this.container = el(".mates-view",
            el("header",
                el("h1", msg("MATE_TITLE")),
                el("img.mate", { src: "/images/shared/img/mate-mock.png" }),
                el("h2", msg("MATES_TITLE1")),
                el("p", msg("MATES_DESC1")),
            ),
            el("section",
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("MATES_TITLE2")),
                    el("p", msg("MATES_DESC2")),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("MATES_TITLE3")),
                    el("p", msg("MATES_DESC3")),
                ),
                el(".button-wrap",
                    el("button", msg("MATES_BUTTON"), { click: () => ViewUtil.go("/gallery") }),
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