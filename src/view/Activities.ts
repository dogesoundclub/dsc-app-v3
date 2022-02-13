import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Activities implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "액티비티";
        Layout.current.content.append(this.container = el(".activities-view",
            el("header",
                el("h1", "ACTIVITIES 📑🗂💼"),
                el("h2", "DSC provides club activities suitable for DSC identity. We are making fresh attempts using the issued NFT."),
            ),
            el("section",
                el(".certification-container",
                    el("h2", "HOLDER CERTIFICATION WITH DISCORD"),
                    el("p", "Mate can be purchased at OPENSEA, the world's largest NFT exchange. It can also be purchased at KLUBB, a domestic MIX-based exchange."),
                    el("button", "CERTIFICATION"),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", "DSC Family"),
                    el("p", "DSC actively encourages and supports holders to build and grow their own independent communities or channels. The list below is the channel list of holders registered so far."),
                    el("button", "ENTER"),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", "My MATES"),
                    el("p", "Please give your mate a name your mate. If you don't have a name for your mate yet, you can only pay for the gas and name it."),
                    el("button", "ENTER"),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", "Dogesound Competition"),
                    el("p", "Mate represents the voting rights of the governor's Soundcolub governance. You can make a proposal or vote as many times as you have a mate for or against a registered proposal."),
                    el("button", "ENTER"),
                ),
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", "Governance"),
                    el("p", "Mate represents the voting rights of the governor's Soundcolub governance. You can make a proposal or vote as many times as you have a mate for or against a registered proposal."),
                    el("button", "ENTER"),
                ),
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}