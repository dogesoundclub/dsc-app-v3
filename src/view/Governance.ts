import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Governance implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "거버넌스";
        Layout.current.content.append(this.container = el(".governance-view",
            el("header",
                el("h1", "GOVERNANCE 🐙🌵🌞"),
                el("h2", "Mate represents the voting rights of the governor's sound club governance. You can make a proposal or vote as much as you have a mate for or against a registered proposal. In order to create a proposal, 800 mixes per case must be incinerated, and if the turnout does not exceed 30%, the agenda will be invalidated regardless of the pros and cons ratio."),
                el(".button-wrap",
                    el("button", "Create suggestions"),
                ),
            ),
            el("section",
                el("hr"),
                el("h2", "Suggestions 👑🚀✌️"),
                el("", "테이블"),
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}