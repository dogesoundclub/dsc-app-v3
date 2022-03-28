import { DomNode, el } from "@hanul/skynode";
import CommonUtil from "../../../CommonUtil";
import Alert from "../../shared/Alert";
import BiasMetadataLoader from "./BiasMetadataLoader";


export default class CycleOfCraftCard extends DomNode {

    constructor(type: string, id: number, currentBlock: number, startBlock: number, level: number, claimableCount: number) {
        super(".cycle-of-craft-card");
        const metadata = BiasMetadataLoader.load(type, id);

        let speed = 0;
        if (level === 1) {
            speed = 1;
        } else if (level === 2) {
            speed = 2;
        } else if (level === 3) {
            speed = 3;
        } else if (level === 4) {
            speed = 4;
        } else if (level === 5) {
            speed = 5;
        } else if (level === 6) {
            speed = 10;
        }

        const pointPerEngine = 30 * 86400;
        const acc = (currentBlock - startBlock) * speed % pointPerEngine;

        let bar;
        this.append(
            el(".info-container",
                el("img", { src: metadata.image, alt: "bmcs" }),
                el(".title", metadata.name),
                el("a", "엔진 받기", {
                    click: () => {
                        new Alert("엔진 받기가 아직 활성화되지 않았습니다.");
                    },
                }),
            ),
            el(".progress-container",
                el("img", { src: "/images/view/bmcs/cycle-of-craft/loading.png", alt: "loading" }),
                el(".progress",
                    bar = el(".bar"),
                ),
                el(".content",
                    el(".title", "휙득까지 남은 Block"),
                    el("p", CommonUtil.numberWithCommas(String((pointPerEngine - acc) / speed))),
                    el(".title", "제작 완료된 엔진 수"),
                    el("p", CommonUtil.numberWithCommas(String(claimableCount))),
                ),
            ),
        );

        bar.style({
            width: `${acc / pointPerEngine * 100}%`,
        });
    }
}
