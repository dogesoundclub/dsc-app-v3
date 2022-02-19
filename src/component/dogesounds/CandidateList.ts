import { DomNode } from "@hanul/skynode";
import DogeSoundContestV2Contract from "../../contracts/DogeSoundContestV2Contract";
import Candidate from "./Candidate";

interface CandidateInfo {
    index: number,
    dogeSound: string,
    votes: number,
}

export default class CandidateList extends DomNode {

    public selected: number = 0;

    constructor(private round: number, private votable?: boolean) {
        super("ul.candidate-list");
        this.load();
    }

    private async load() {

        const candidateCount = (await DogeSoundContestV2Contract.getCandidateCount(this.round)).toNumber();

        let candidates: CandidateInfo[] = [];
        const promises: Promise<void>[] = [];

        for (let i = 0; i < candidateCount; i += 1) {
            const promise = async (index: number) => {
                let dogeSound = "";
                try {
                    dogeSound = await DogeSoundContestV2Contract.getCandidate(this.round, index);
                } catch (e) {/* ignore. */ }
                const votes = (await DogeSoundContestV2Contract.getVotes(this.round, index)).toNumber();
                candidates.push({ index, dogeSound, votes });
            };
            promises.push(promise(i));
        }

        await Promise.all(promises);

        candidates = candidates.sort((a, b) => {
            return b.votes - a.votes;
        });

        for (const [index, candidate] of candidates.entries()) {
            this.append(new Candidate(this, candidate.index, this.votable === true, candidate.dogeSound, candidate.votes, index === 0));
        }
    }
}
