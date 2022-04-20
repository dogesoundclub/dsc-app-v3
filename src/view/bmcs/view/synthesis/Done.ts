import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BiasContract from "../../../../contracts/BiasContract";
import ViewUtil from "../../../ViewUtil";
import BiasMetadataLoader from "../../component/BiasMetadataLoader";
import BmcsLayout from "../Layout";

export default class SynthesisDone implements View {

    private container: DomNode;
    private cong: DomNode;
    private image: DomNode<HTMLImageElement>;

    constructor(params: ViewParams) {
        BmcsLayout.current.title = "축하합니다";
        BmcsLayout.current.content.append(
            this.container = el(".synthesis-done-view",
                el("section",
                    el("h2", "= 축하합니다 ="),
                    this.cong = el("p", "... 를\n획득하였습니다"),
                    this.image = el("img", { src: "/images/view/bmcs/synthesis/progress.png" }),
                    el("a.opensea", "오픈씨에서 보기", {
                        click: () => open(`https://opensea.io/assets/klaytn/0xdedd727ab86bce5d416f9163b2448860bbde86d4/${params.biasId}`),
                    }),
                    el("a.confirm", "확인", {
                        click: () => ViewUtil.go(`/bmcs/preparation`),
                    }),
                ),
            ),
        );
        this.load(parseInt(params.biasId, 10));
    }

    private async load(biasId: number) {
        const uri = await BiasContract.tokenURI(biasId);
        const json = await (await fetch(uri)).json();
        this.cong.empty().appendText(`${json.name} 를\n획득하였습니다.`);
        this.image.domElement.src = json.image;
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}