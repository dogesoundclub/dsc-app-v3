import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import VideCardItem from "../../component/synthesis/CardItem";
import MateItem from "../../component/synthesis/MateItem";
import BmcsLayout from "../Layout";

export default class Preparation implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = "메이트 선택";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-preparation-view",
                el("section",
                    el("h2", "합성가능 메이트"),
                    el(".mate-container",
                        new MateItem(1),
                        new MateItem(2),
                        new MateItem(3),
                    ),
                    el("hr"),
                    el("h2", "보유한 카드"),
                    el(".card-container",
                        new VideCardItem(1),
                        new VideCardItem(2),
                        new VideCardItem(3),
                        new VideCardItem(4),
                        new VideCardItem(1),
                    ),
                    el(".button-wrap",
                        el("a", "합성하기"),
                    ),
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