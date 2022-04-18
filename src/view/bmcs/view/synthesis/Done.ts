import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BmcsLayout from "../Layout";

export default class SynthesisDone implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = "축하합니다";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-done-view",
                el("section",
                    el("h2", "= 축하합니다 ="),
                    el("p", "#4291 JOhn Bread를\n획득하였습니다"),
                    el("img", { src: "/images/view/bmcs/synthesis/progress.png" }),
                    el("a", "확인"),
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