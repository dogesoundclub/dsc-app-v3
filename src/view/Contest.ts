import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Contest implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("CONTEST_TITLE1");
        Layout.current.content.append(this.container = el(".contest-view",
            el("header",
                el("h1", msg("CONTEST_TITLE1")),
                el("p", msg("CONTEST_DESC1")),
                el(".warning", msg("CONTEST_DESC2")),
                el("p", msg("CONTEST_DESC3")),
                el(".button-wrap",
                    el("button", msg("CONTEST_BUTTON")),
                ),
            ),
            el("section",
                el("hr"),
                el("h2", msg("CONTEST_TITLE2")),
                el("table",
                    el("thead",
                        el("tr",
                            el("td.id", "#"),
                            el("td.votes", "VOTES"),
                            el("td.dogesound", "DOGESOUND"),
                        ),
                    ),
                    el("tbody",
                        el("tr",
                            el("td.id", "100"),
                            el("td.votes", "39,344"),
                            el("td.dogesound", "If your salary is less than your mate's, please vote here."),
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

                el("hr"),
                el("h2", msg("CONTEST_TITLE3")),
                el("section.status-board",
                    el("img", { src: "/images/shared/img/dog.png" }),
                    el("h3", msg("CONTEST_STATUS_BOARD_TITLE1")),
                    el(".caption", msg("CONTEST_STATUS_BOARD_DESC1")),
                    el("p", msg("CONTEST_STATUS_BOARD_DESC2")),
                    el(".submit-container",
                        el(".input-container",
                            el("input"),
                            el("label", msg("CONTEST_STATUS_BOARD_DESC3")),
                        ),
                        el("button", msg("CONTEST_STATUS_BOARD_BUTTON")),
                    ),
                ),
                el("h3", msg("CONTEST_STATUS_TITLE")),
                el("table",
                    el("thead",
                        el("tr",
                            el("td.action", "ACTION"),
                            el("td.votes", "VOTES"),
                            el("td.dogesound", "DOGESOUND"),
                        ),
                    ),
                    el("tbody",
                        el("tr",
                            el("td.action",
                                el("input", { type: "checkbox" }),
                            ),
                            el("td.votes", "39,344"),
                            el("td.dogesound", msg("CONTEST_STATUS_TABLE_DESC2")),
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