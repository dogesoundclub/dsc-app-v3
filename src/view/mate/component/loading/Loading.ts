import { DomNode } from "@hanul/skynode";
import Lottie from "lottie-web";

export default class Loading extends DomNode {

    constructor() {
        super(".loading");
        const animation = Lottie.loadAnimation({
            container: this.domElement,
            loop: true,
            autoplay: true,
            animationData: require("./loading.json"),
        });
        animation.setSpeed(3);
        this.style({
            display: "inline-block",
            width: 60,
            height: 30,
        });
    }
}
