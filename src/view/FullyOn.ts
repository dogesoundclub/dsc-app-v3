import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class FullyOn implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("FULLY_ON_CHAIN_TITLE");
        Layout.current.content.append(this.container = el(".fully-on-view",
            el("header",
                el("h1", msg("FULLY_ON_CHAIN_TITLE")),
            ),
            el("section",
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("FULLY_ON_CHAIN_TITLE1")),
                    el("p", msg("FULLY_ON_CHAIN_DESC1")),
                    el("button", msg("ENTER_BUTTON"), {
                        click: () => ViewUtil.go("/dscFamily"),
                    }),
                ),
                el("hr"),
                el("article",
                    el(".mate-container",
                        el("img", { src: "/images/shared/img/mate-mock.png" }),
                        el("p", "Level 5, Frightened Mouth, Tiger, Silver Chain, Green hair in Purple Cap, Red Cross Earring, Cigarette"),
                    ),
                    el("h2", msg("FULLY_ON_CHAIN_TITLE2")),
                    el("p", msg("FULLY_ON_CHAIN_DESC2")),
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