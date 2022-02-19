import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class CreateGovernance implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("GOVERNANCE_TITLE1");
        Layout.current.content.append(this.container = el(".create-governance-view",
            el("header",
                el("h1", msg("GOVERNANCE_TITLE1")),
                el("h2", msg("GOVERNANCE_DESC1")),
            ),
            el("section",
                el("hr"),
                el(".input-container",
                    el("label", msg("GOVERNANCE_CREATE_INPUT_TITLE1")),
                    el("input", { placeholder: msg("GOVERNANCE_CREATE_INPUT_DESC1") }),
                ),
                el(".input-container",
                    el("label", msg("GOVERNANCE_CREATE_INPUT_TITLE2")),
                    el("input", { placeholder: msg("GOVERNANCE_CREATE_INPUT_DESC2") }),
                ),
                el(".input-container",
                    el("label", "Summary"),
                    el("textarea.summary", { placeholder: msg("GOVERNANCE_CREATE_INPUT_TITLE3"), type: "text" }),
                ),
                el(".input-container",
                    el("label", "Text"),
                    el("label", msg("GOVERNANCE_CREATE_INPUT_TITLE4")),
                    el("textarea.text", { placeholder: msg("GOVERNANCE_CREATE_INPUT_DESC3"), type: "text" }),
                ),
                el(".input-container",
                    el("label", msg("GOVERNANCE_CREATE_INPUT_DESC7")),
                    el("textarea"),
                ),
                el("hr"),
                el(".proposer-container",
                    el("h3", msg("GOVERNANCE_CREATE_TITLE1")),
                    el(".address", "0x5768218dae8c5658d0B1e466c07199393B089078"),
                    el("p", msg("GOVERNANCE_CREATE_DESC8")),
                ),
                el("hr"),
                el(".mate-container",
                    el("h3", msg("GOVERNANCE_CREATE_SELECT_TITLE1")),
                    el("p", msg("GOVERNANCE_CREATE_SELECT_TITLE2")),
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", msg("GOVERNANCE_CREATE_SELECT_TITLE3"))
                    ),
                ),
                el("hr"),
                el(".checkbox-container",
                    el("input", { type: "checkbox" }),
                    el("label", msg("GOVERNANCE_CREATE_CHECKBOX_DESC")),
                ),
                el(".button-wrap",
                    el("button", msg("REGISTER_BUTTON")),
                ),
            ),
        ),
        )
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}