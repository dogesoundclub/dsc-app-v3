import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class CreateGovernance implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "거버넌스 제안";
        Layout.current.content.append(this.container = el(".create-governance-view",
            el("header",
                el("h1", "GOVERNANCE 🐙🌵🌞"),
                el("h2", "Mate represents the voting rights of the governor's sound club governance. You can make a proposal or vote as much as you have a mate for or against a registered proposal. In order to create a proposal, 800 mixes per case must be incinerated, and if the turnout does not exceed 30%, the agenda will be invalidated regardless of the pros and cons ratio."),
            ),
            el("section",
                el("hr"),
                el(".input-container",
                    el("label", "Suggestion generation tool."),
                    el("input", { placeholder: "Please enter the title of the suggestion." }),
                ),
                el(".input-container",
                    el("label", "Voting period."),
                    el("input", { placeholder: "Please enter the voting period in blocks." }),
                ),
                el(".input-container",
                    el("label", "Summary"),
                    el("input.summary", { placeholder: "Please write down the key part of the proposal.", type: "text" }),
                ),
                el(".input-container",
                    el("label", "Text"),
                    el("label", "You can use the grammar that's like mark."),
                    el("input.text", { placeholder: "Please explain the suggestion.", type: "text" }),
                ),
                el(".input-container",
                    el("label", "Remarks"),
                    el("input"),
                ),
                el("hr"),
                el(".proposer-container",
                    el("h3", "Proposer"),
                    el(".address", "0x5768218dae8c5658d0B1e466c07199393B089078"),
                    el("p", "- Wallet Address: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D\n- Number of mates you have: 3300.\n- Available mates: 110.\n* Relax! Participation in voting does not affect your ownership at all.")
                ),
                el("hr"),
                el(".mate-container",
                    el("h3", "Choose your mate."),
                    el("p", "Number of mates chosen: 3."),
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", "Sellect All")
                    ),
                ),
                el("hr"),
                el(".checkbox-container",
                    el("input", { type: "checkbox" }),
                    el("label", "I agree that the submitted proposal can be canceled, but it cannot be modified. I agree that the mate will be kept at the governance contract address during the period of the proposal. This interface is just a convenient tool of your choice for governance, and I agree that the owner of the wallet who signed it is responsible for the consequences of all transactions under the signature.")
                ),
                el(".submit-container",
                    el(".checkbox-container",
                        el("input", { id: "check", type: "checkbox" }),
                        el("label", { for: "check" }),
                        el("label", "FOR")
                    ),
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", "AGAINST")
                    ),
                ),
                el(".button-wrap",
                    el("button", "VOTE"),
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