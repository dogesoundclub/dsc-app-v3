import { DomNode, el } from "@hanul/skynode";
import DogeSoundContestV2Contract from "../../contracts/DogeSoundContestV2Contract";

export default class RankV2 extends DomNode {

    constructor(private round: number) {
        super("tr");
        this.load();
    }

    private async load() {

        const elected = (await DogeSoundContestV2Contract.getElected(this.round)).toNumber();

        let dogesound = "";
        try {
            dogesound = await DogeSoundContestV2Contract.getCandidate(this.round, elected);
        } catch (e) {/* ignore. */ }

        const votes = (await DogeSoundContestV2Contract.getVotes(this.round, elected)).toNumber();

        this.append(
            el("td.id", String(this.round + 1)),
            el("td.votes", String(votes)),
            el("td.dogesound", dogesound),
        );
    }
}
