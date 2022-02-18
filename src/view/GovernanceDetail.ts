import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class GovernanceDetail implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("GOVERNANCE_TITLE1");
        Layout.current.content.append(this.container = el(".governance-detail-view",
            el("header",
                el("h1", msg("GOVERNANCE_TITLE1")),
            ),
            el("hr"),
            el("section",
                el("article",
                    el("header",
                        el("h2", "DIP-17: Management of Mate Price Stabilization Fund (tentative name)"),
                        el("p", "0 block left until the voting is over."),
                        el(".caption-container",
                            el(".status", "Proposal result: Orientation"),
                            el("p", "Agreement 1766"),
                            el("p", "Opposition 521"),
                        ),
                    ),
                    el("hr"),
                    el(".content",
                        el(".tool-container",
                            el("h3", "Suggestion generation tool:"),
                            el("p", "A fund management proposal to purchase the mate of the largest holder through a block deal."),
                        ),
                        el(".body-container",
                            el("h3", "Body:"),
                            el("p", "A fund management proposal to purchase the mate of the largest holder through a block deal."),
                        ),
                        el(".remarks", "Remarks:"),
                    ),
                ),
                el("hr"),
                el(".proposer-container",
                    el("h3", msg("GOVERNANCE_CREATE_TITLE1")),
                    el(".address", "0x5768218dae8c5658d0B1e466c07199393B089078"),
                    el("p", "- Wallet Address: 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D")
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
                el(".submit-container",
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", msg("GOVERNANCE_TABLE_VOTE_DESC2"))
                    ),
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", msg("GOVERNANCE_TABLE_VOTE_DESC2"))
                    ),
                ),
                el(".button-wrap",
                    el("button", msg("VOTE_BUTTON")),
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