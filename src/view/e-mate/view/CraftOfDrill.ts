import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BmcsLayout from "./Layout";

export default class CraftOfDrill implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = "CraftOfDrill";
        BmcsLayout.current.content.append(
            this.container = el(".craft-of-drill-view",
                el("aside",
                    el("h1", "CYCLE OF CRAFT"),
                    el(".block-container",
                        el(".content",
                            el(".title", "Current Cycle"),
                            el("p", "2,592,000 Block"),
                        ),
                        el("hr"),
                        el(".content",
                            el(".title", "Remain Next Half-Life"),
                            el("p", "7,776,000 Block"),
                        ),
                    ),
                    el(".claim-container",
                        el(".title", "Accumulated Drill"),
                        el(".account", "6 EA"),
                        el("a", "모든 드릴 수령하기"),
                    ),
                ),
                el("article",
                    el(".card",
                        el(".info-container",
                            el("img", { src: "/images/view/bmcs/cycle-of-craft/bmcs-mock.png", alt: "bmcs" }),
                            el(".title", "#12 Andrew John"),
                            el("a", "드릴 받기"),
                        ),
                        el(".progress-container",
                            el("img", { src: "/images/view/bmcs/cycle-of-craft/loading.png", alt: "loading" }),
                            el(".progress",
                                el(".bar"),
                            ),
                            el(".content",
                                el(".title", "휙득까지 남은 Block"),
                                el("p", "1,296,000"),
                            ),
                        ),
                    ),
                    el(".card",
                        el(".info-container",
                            el("img", { src: "/images/view/bmcs/cycle-of-craft/bmcs-mock.png", alt: "bmcs" }),
                            el(".title", "#12 Andrew John"),
                            el("a", "드릴 받기"),
                        ),
                        el(".progress-container",
                            el("img", { src: "/images/view/bmcs/cycle-of-craft/loading.png", alt: "loading" }),
                            el(".progress",
                                el(".bar"),
                            ),
                            el(".content",
                                el(".title", "휙득까지 남은 Block"),
                                el("p", "1,296,000"),
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