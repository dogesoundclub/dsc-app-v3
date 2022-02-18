import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class FullyOn implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "Fully On";
        Layout.current.content.append(this.container = el(".fully-on-view",
            el("header",
                el("h1", "Fully on - Chain 🚀"),
            ),
            el("section",
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", "DSC Family"),
                    el("p", "DSC actively encourages and supports holders to build and grow their own independent communities or channels. The list below is the channel list of holders registered so far."),
                    el("button", "ENTER", {
                        click: () => ViewUtil.go("/dscFamily"),
                    }),
                ),
                el("hr"),
                el("article",
                    el(".mate-container",
                        el("img", { src: "/images/shared/img/mate-mock.png" }),
                        el("p", "Level 5, Frightened Mouth, Tiger, Silver Chain, Green hair in Purple Cap, Red Cross Earring, Cigarette"),
                    ),
                    el("h2", "Demo"),
                    el("p", "The images and characteristics brought up below are recorded in the Clayton chain."),
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