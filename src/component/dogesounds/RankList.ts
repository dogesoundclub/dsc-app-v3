import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import DogeSoundContestV2Contract from "../../contracts/DogeSoundContestV2Contract";
import RankV1 from "./RankV1";
import RankV2 from "./RankV2";

export default class RankList extends DomNode {

    private rankList: DomNode;

    constructor() {
        super(".dogesounds-rank-list");
        this.append(
            el("table",
                el("thead",
                    el("tr",
                        el("th", "#", { width: "10%" }),
                        el("th", "VOTES", { width: "15%" }),
                        el("th", "DOGESOUND", { width: "75%" }),
                    ),
                ),
                this.rankList = el("tbody"),
            ),
        );
        this.loadMessages();
    }

    private async loadMessages() {
        const currentRound = (await DogeSoundContestV2Contract.getRound()).toNumber();
        SkyUtil.repeat(currentRound > 100 ? 100 : currentRound, (index) => {
            const round = currentRound - index - 1;
            if (round < 2) { // V1
                this.rankList.append(new RankV1(round));
            } else { // V2
                this.rankList.append(new RankV2(round));
            }
        });
    }
}
