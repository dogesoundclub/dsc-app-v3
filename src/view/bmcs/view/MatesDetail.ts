import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import CommonUtil from "../../../CommonUtil";
import BiasContract from "../../../contracts/BiasContract";
import BiasPoolContract from "../../../contracts/BiasPoolContract";
import BiasMetadataLoader from "../component/BiasMetadataLoader";
import BmcsLayout from "./Layout";

export default class BmcsMatesDetail implements View {

    private id: number;
    private container: DomNode;

    private nameDisplay: DomNode;
    private imageDisplay: DomNode<HTMLImageElement>;
    private mixDisplay: DomNode;
    private lockableMateDisplay: DomNode;

    constructor(params: ViewParams) {
        this.id = parseInt(params.id, 10);
        BmcsLayout.current.title = msg("MATES_DETAIL_TITLE").replace(/{id}/, String(this.id));
        BmcsLayout.current.content.append(this.container = el(".bmcs-mates-detail-view",
            el("header",
                this.nameDisplay = el("h1"),
                this.imageDisplay = el("img.mate"),
                el("p", "Bias에 쌓여있는 MIX :", this.mixDisplay = el("span")),
                el("a", "오픈씨 확인하기", { href: `https://opensea.io/assets/klaytn/0xdedd727ab86bce5d416f9163b2448860bbde86d4/${this.id}`, target: "_blank" }),
            ),
            el("section",
                el("hr"),
                el("section.lockable-container",
                    el("h2", msg("LOCKABLE_TITLE")),
                    el("p", msg("LOCKABLE_DESC1")),
                    el(".content",
                        el(".lock-container",
                            this.lockableMateDisplay = el(".lock-wrap",
                                el("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" }),
                            ),
                            el("p", msg("LOCKABLE_TITLE1")),
                        ),
                        el(".lock-container",
                            el(".lock-wrap",
                                el("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" }),
                            ),
                            el("p", msg("LOCKABLE_TITLE2")),
                        ),
                        el(".lock-container",
                            el(".lock-wrap",
                                el("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" }),
                            ),
                            el("p", msg("LOCKABLE_TITLE3")),
                        ),
                    ),
                ),
            ),
        ));

        this.load();
    }

    private async load() {
        const claimable = await BiasPoolContract.claimableOf(this.id);
        this.mixDisplay.empty().appendText(CommonUtil.numberWithCommas(utils.formatEther(claimable)));

        const metadata = await (await fetch(`https://api.dogesound.club/bmcs/${this.id}`)).json();

        this.imageDisplay.domElement.src = metadata.image;
        this.nameDisplay.empty().appendText(metadata.name);

        const type = BiasMetadataLoader.findType(this.id, metadata.name);
        console.log(type);

        this.lockableMateDisplay.empty();
        const mates = el(".mates").appendTo(this.lockableMateDisplay);
        const l = 27;
        const t = 5;
        const w = 22;
        const h = 32;
        mates.style({
            backgroundImage: type === "bmcs" ? `url(https://storage.googleapis.com/dsc-bias/character/ayias_pixel-${this.id}.png)` : `url(https://storage.googleapis.com/dsc-bias/character/${type}/ayias_pixel-${this.id}.png)`,
            width: w,
            height: h,
        });
        const frames = [
            [l, t, w, h], [l + w, t, w, h], [l + w * 2, t, w, h],
            [l, t + h, w, h], [l + w, t + h, w, h], [l + w * 2, t + h, w, h],
            [l, t + h * 2, w, h], [l + w, t + h * 2, w, h], [l + w * 2, t + h * 2, w, h],
        ];
        const sprite = new (window as any).Sprite(mates.domElement, frames);
        sprite.play({ fps: 3 });
    }

    public changeParams(params: ViewParams, uri: string): void {
        BmcsLayout.current.title = msg("MATES_DETAIL_TITLE").replace(/{id}/, params.id);
    }

    public close(): void {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}