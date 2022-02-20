import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import ProposalList from "../component/governance/ProposalList";
import Alert from "../component/shared/dialogue/Alert";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class Governance implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = msg("GOVERNANCE_TITLE1");
        Layout.current.content.append(this.container = el(".governance-view",
            el("header",
                el("h1", msg("GOVERNANCE_TITLE1")),
                el("h2", msg("GOVERNANCE_DESC1")),
                el(".button-wrap",
                    el("button", msg("GOVERNANCE_BUTTON"), {
                        click: () => {
                            new Alert("이메이트 클레이튼 체인 마이그레이션 이후 해당 기능이 열립니다.", msg("CONFIRM_BUTTON"));
                        }
                        // ViewUtil.go("/governance/create"),
                    }),
                ),
            ),
            el("section",
                el("hr"),
                el("h2", msg("GOVERNANCE_TITLE2")),
                el("table",
                    el("thead",
                        el("tr",
                            el("td.dogesound", "DOGESOUND"),
                            el("td.proposal", "PROPOSAL"),
                        ),
                    ),
                    new ProposalList(),
                ),
                /*el(".pagination",
                    el("a", "<<"),
                    el("a", "<"),
                    el("a.active", "1"),
                    el("a", "2"),
                    el("a", "3"),
                    el("a", "4"),
                    el("a", "5"),
                    el("a", ">"),
                    el("a", ">>"),
                ),*/
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}