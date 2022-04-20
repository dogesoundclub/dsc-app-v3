import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import ViewUtil from "../../../ViewUtil";
import BMCSConfirm from "../../component/BMCSConfirm";
import BmcsLayout from "../Layout";

export default class SelectedMate implements View {

    private container: DomNode;

    constructor(params: ViewParams) {

        let cardName = "";
        if (params.cardId === "0") {
            cardName = "루비";
        } else if (params.cardId === "1") {
            cardName = "사파이어";
        } else if (params.cardId === "2") {
            cardName = "독약";
        } else if (params.cardId === "3") {
            cardName = "심해수";
        }

        BmcsLayout.current.title = "카드 합성";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-select-mate-view",
                el("section",
                    el("h2", "선택하신 메이트와 카드가 합성됩니다"),
                    el(".synthesis-container",
                        el(".mate-container",
                            el("img.mate", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${params.mateId}.png`, alt: "mate" }),
                            el("p", `#${params.mateId}`),
                        ),
                        el("img", { src: "/images/view/bmcs/home/add.svg" }),
                        el(".card-container",
                            el("img.card", { src: `/images/view/bmcs/home/vibe${params.cardId}.png`, alt: "vide-card" }),
                            el("p", `${cardName} 카드 1개`),
                        ),
                    ),
                    el(".warning", "* BIAS 카드 합성을 통해 생성될 BIAS PFP-NFT는 합성시에\n400 MIX가 스테이킹 됩니다. 스테이킹된 믹스는\n6개월 후 400 MIX를 그대로 돌려받으실 수 있습니다"),
                    el(".button-container",
                        el("a.outline", "돌아가기"),
                        el("a", "합성", {
                            click: () => {
                                new BMCSConfirm("합성에는 400 MIX 스테이킹이 필요합니다. 합성하시겠습니까?", "합성 시작", () => {
                                    ViewUtil.go(`/bmcs/progress/${params.mateId}/${params.cardId}`);
                                });
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