import { DomNode, el } from "@hanul/skynode";
import DogeSoundContestContract from "../../contracts/DogeSoundContestContract";

export default class RankV1 extends DomNode {

    constructor(private round: number) {
        super("tr");
        this.load();
    }

    private async load() {

        const elected = (await DogeSoundContestContract.getElected(this.round)).toNumber();

        let dogesound = "";
        try {
            dogesound = await DogeSoundContestContract.getCandidate(this.round, elected);
        } catch (e) {/* ignore. */ }

        const votes = (await DogeSoundContestContract.getVotes(this.round, elected)).toNumber();

        this.append(
            el("td", String(this.round + 1)),
            el("td", String(votes)),
            el("td", dogesound),
        );
    }
}
