import { DomNode } from "@hanul/skynode";
import Lottie from "lottie-web";

export default class CraftLoading extends DomNode {

    constructor() {
        super(".craft-loading");
        const animation = Lottie.loadAnimation({
            container: this.domElement,
            loop: true,
            autoplay: true,
            animationData: require("./craft-loading.json"),
        });
        animation.setSpeed(3);
        this.style({
            display: "inline-block",
            width: 100,
            height: 100,
        });
    }
}