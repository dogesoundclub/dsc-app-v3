import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";
import ViewUtil from "../ViewUtil";

export default class EmateHome implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = msg("BAPP_TITLE");
        Layout.current.content.append(this.container = el(".emate-home-view",
            el("header",
                el(".content",
                    el(".intro", "Welcome to Doge Sound Club!"),
                    el(".description", "Doge Sound Club is a social gathering of NFT collectors\noperated by NFT governance. You can use MATES to join the club and vote."),
                    el("button", "Connect Wallet", { click: () => ViewUtil.go("/mates") }),
                ),
            ),
            el("section",
                el(".buy-emate-container",
                    el("img", { src: "/images/view/emate/home/buy-emate.png", alt: "buy-emate" }),
                    el(".card-view",
                        el("h2", "BUY E-MATE"),
                        el("p", "Mate can be purchased at OPENSA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."),
                        el("a", "OPENSEA", { href: "https://opensea.io/collection/dogesoundclub-mates", target: "_blank" }),
                    ),
                    el(".warning", "Recently, there are many false NFTs that replicate mates. The official OpenC address is https://opensea.io/collection/dogesoundclub-mates.\nPlease make sure to check the address and be careful about the fraudulent project."),
                ),
                el("hr"),
                el(".story-container",
                    el("h2", "Story of Rocket Geeks"),
                    el("p", "Recently, there are many false NFTs that replicate mates. The official OpenC address is https://opensea.io/collection/dogesoundclub-mates.Please make sure to check the address and be careful about the fraudulent project. Recently, there are many false NFTs that replicate mates. The official OpenC address is https://opensea.io/collection/dogesoundclub-mates. Please make sure to check the address and be careful about the fraudulent project."),
                    el(".content",
                        el("img", { src: "/images/view/emate/home/story1.png", alt: "story1" }),
                        el("img", { src: "/images/view/emate/home/story2.png", alt: "story2" }),
                        el("img", { src: "/images/view/emate/home/story3.png", alt: "story3" }),
                    ),
                ),
                el("hr"),
                el(".roadmap-container",
                    el("h2", "Roadmap"),
                    el("p", "Recently, there are many false NFTs that replicate mates. The official OpenC address is https://opensea.io/collection/dogesoundclub-mates.\nPlease make sure to check the address and be careful about the fraudulent project. Recently, there are many false NFTs that replicate mates. "),
                    el(".content",),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}