import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BmcsLayout from "../Layout";

export default class SynthesisProgress implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = "합성중";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-progress-view",
                el("section",
                    el("img", { src: "/images/view/bmcs/synthesis/progress.png" }),
                    el("h2", "합성중입니다"),
                    el("p", "메이트와 카드를 합성중입니다\n잠시만 기다려주세요..."),
                ),
            ),
        );
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}