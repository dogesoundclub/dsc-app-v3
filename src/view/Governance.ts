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
                el("table",
                    el("thead",
                        el("tr",
                            el("td.proposal", "PROPOSAL"),
                            el("td.dogesound", "DOGESOUND"),
                        ),
                    ),
                    el("tbody",
                        el("tr",
                            el("td.agreement", "AGREEMENT"),
                            el("td.dogesound", "DIP-19: We would like to enter into a partnership with the rice mill community."),
                        ),
                        el("tr",
                            el("td.opposition", "OPPOSITION"),
                            el("td.dogesound", "DIP-19: We would like to enter into a partnership with the rice mill community."),
                        ),
                        el("tr",
                            el("td.cancellation", "CANCELLATION"),
                            el("td.cancellation-dogesound", "DIP-19: We would like to enter into a partnership with the rice mill community."),
                        ),
                    ),
                ),
                el(".pagination",
                    el("a", "<<"),
                    el("a", "<"),
                    el("a.active", "1"),
                    el("a", "2"),
                    el("a", "3"),
                    el("a", "4"),
                    el("a", "5"),
                    el("a", ">"),
                    el("a", ">>"),
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