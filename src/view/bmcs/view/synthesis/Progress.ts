import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BiasCompoundContract from "../../../../contracts/BiasCompoundContract";
import Wallet from "../../../../klaytn/Wallet";
import ViewUtil from "../../../ViewUtil";
import BmcsLayout from "../Layout";

export default class SynthesisProgress implements View {

    private container: DomNode;

    constructor(params: ViewParams) {
        BmcsLayout.current.title = "합성중";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-progress-view",
                el("section",
                    el("img", { src: "/images/view/bmcs/synthesis/progress.png" }),
                    el("h2", "합성중입니다"),
                    el("p", "메이트와 카드를 합성중입니다\n믹스 스테이킹과 카드 사용에 있어 몇 번의\n트랜잭션이 필요할 수 있습니다.\n잠시만 기다려주세요..."),
                ),
            ),
        );
        this.start(parseInt(params.mateId, 10) + 10000, parseInt(params.cardId, 10));
    }

    private async start(biasId: number, cardId: number) {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const results = await (await fetch("https://api.dogesound.club/sign-compound?" + new URLSearchParams({
                owner, biasId: String(biasId), cardId: String(cardId),
            }))).json();
            await BiasCompoundContract.compound(biasId, cardId, results.uri, results.signature);
            setTimeout(() => {
                ViewUtil.go(`/bmcs/done/${biasId}`);
            }, 2000);
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}