import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BMCSConfirm from "../../component/BMCSConfirm";
import BmcsLayout from "../Layout";

export default class SelectedMate implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = "카드 합성";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-select-mate-view",
                el("section",
                    el("h2", "선택하신 메이트와 카드가 합성됩니다"),
                    el(".synthesis-container",
                        el(".mate-container",
                            el("img.mate", { src: "/images/shared/img/img_mate-mock.png", alt: "mate" }),
                            el("p", "#1"),
                        ),
                        el("img", { src: "/images/view/bmcs/home/add.svg" }),
                        el(".card-container",
                            el("img.card", { src: "/images/view/bmcs/home/vibe1.png", alt: "vide-card" }),
                            el("p", "사피이어 0EA"),
                        ),
                    ),
                    el(".warning", "* BIAS 카드 합성을 통해 생성될 BIAS PFP-NFT는 합성시에\n200 MIX가 스테이킹 됩니다. 스테이킹된 믹스는\n6개월 후 200 MIX를 그대로 돌려받으실 수 있습니다"),
                    el(".button-container",
                        el("a.outline", "돌아가기"),
                        el("a", "합성", {
                            click: () => {
                                new BMCSConfirm("합성에는 200 MIX가 필요합니다. 합성하시겠습니까?");
                            }
                        }),
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