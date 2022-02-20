import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import RankList from "../component/dogesounds/RankList";
import DogeSoundContestV2Contract from "../contracts/DogeSoundContestV2Contract";
import Layout from "./Layout";

export default class Contest implements View {

    private container: DomNode;
    //private status: DomNode;
    //private remainBlocks: DomNode;
    private form: DomNode | undefined;

    private remainsInterval: any | undefined;

    constructor() {
        Layout.current.title = msg("CONTEST_TITLE1");
        Layout.current.content.append(this.container = el(".contest-view",
            el("header",
                el("h1", msg("CONTEST_TITLE1")),
                el("p", msg("CONTEST_DESC1")),
                el(".warning", msg("CONTEST_DESC2")),
                el("p", msg("CONTEST_DESC3")),
                el(".button-wrap",
                    el("a", msg("CONTEST_BUTTON"), {
                        href: "https://opensea.io/collection/dsc-dogesound-winners",
                        target: "_blank",
                    }),
                ),
            ),
            el("section",
                el("hr"),
                el("h2", msg("CONTEST_TITLE2")),
                el("p", "개소리 투표는 이메이트 클레이튼 체인 마이그레이션 이후 다시 진행됩니다."),
                new RankList(),
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

                /*el("hr"),
                el("h2", msg("CONTEST_TITLE3")),
                el("section.status-board",
                    el("img", { src: "/images/shared/img/dog.png" }),
                    this.status = el("h3"),
                    this.remainBlocks = el(".caption", msg("CONTEST_STATUS_BOARD_DESC1")),
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
                ),*/
            ),
        ));
        this.load();
    }

    private async load() {

        const currentRound = (await DogeSoundContestV2Contract.getRound()).toNumber();
        const period = (await DogeSoundContestV2Contract.getPeriod()).toNumber();
        let remains = (await DogeSoundContestV2Contract.getRemains()).toNumber();

        this.form?.delete();

        /*if (period === DogeSoundContestV2Contract.HOLIDAY_PERIOD) {
            this.status.append(
                el("p", msg("DOGESOUNDS_HOLIDAY_DESCRIPTION").replace(/{number}/, String(currentRound))),
                el("p", msg("DOGESOUNDS_HOLIDAY_DESCRIPTION_2")),
            );
            this.form = new MintForm(currentRound - 1).appendTo(this.container);
        /*}

        else if (period === DogeSoundContestV2Contract.REGISTER_CANDIDATE_PERIOD) {
            this.status.append(el("p", msg("DOGESOUNDS_REGISTER_CANDIDATE_DESCRIPTION").replace(/{round}/, String(currentRound + 1))));
            this.form = new RegisterCandidateForm(currentRound).appendTo(this.container);
        }

        else if (period === DogeSoundContestV2Contract.VOTE_PERIOD) {
            this.status.append(el("p", msg("DOGESOUNDS_VOTE_DESCRIPTION").replace(/{round}/, String(currentRound + 1))));
            this.form = new VoteForm(currentRound).appendTo(this.container);
        }

        const timer = el("p", msg("DOGESOUNDS_TIMER").replace(/{block}/, String(remains))).appendTo(this.status);

        this.remainsInterval = setInterval(() => {
            if (remains <= 1) {
                ViewUtil.waitTransactionAndRefresh();
                clearInterval(this.remainsInterval);
            } else {
                remains -= 1;
                timer.empty().appendText(msg("DOGESOUNDS_TIMER").replace(/{block}/, String(remains)));
            }
        }, 1000);*/
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        if (this.remainsInterval !== undefined) {
            clearInterval(this.remainsInterval);
        }
        this.container.delete();
    }
}