import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BmcsLayout from "./Layout";

export default class CycleOfCraft implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = "CycleOfCraft";
        BmcsLayout.current.content.append(
            this.container = el(".cycle-of-craft-view",
                el("aside",
                    el("h1", "CYCLE OF CRAFT"),
                    el(".claim-container",
                        el(".title", "Accumulated Engines"),
                        el(".account", "6 EA"),
                        el("a", "모든 엔진 수령하기"),
                    ),
                ),
                el("article",
                    el(".card",
                        el(".info-container",
                            el("img", { src: "/images/view/bmcs/cycle-of-craft/bmcs-mock.png", alt: "bmcs" }),
                            el(".title", "#12 Andrew John"),
                            el("a", "엔진 받기"),
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
                            el("a", "엔진 받기"),
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