import { BigNumber } from "ethers";
import Contract from "./Contract";
declare class DogeSoundContestContract extends Contract {
    readonly HOLIDAY_PERIOD = 0;
    readonly REGISTER_CANDIDATE_PERIOD = 1;
    readonly VOTE_PERIOD = 2;
    constructor();
    getCheckpoint(): Promise<BigNumber>;
    getHolidayInterval(): Promise<BigNumber>;
    getRound(): Promise<BigNumber>;
    getRoundBlock(round: number): Promise<BigNumber>;
    getPeriod(): Promise<BigNumber>;
    getRemains(): Promise<BigNumber>;
    getCandidateMateCount(): Promise<BigNumber>;
    getUserVotes(round: number, user: string): Promise<BigNumber>;
    getCandidateCount(round: number): Promise<BigNumber>;
    getCandidate(round: number, index: number): Promise<string>;
    getCandidateRegister(round: number, index: number): Promise<string>;
    getVotes(round: number, candidate: number): Promise<BigNumber>;
    registerCandidate(dogeSound: string, count: number): Promise<void>;
    vote(candidate: number, count: number): Promise<void>;
    getElected(round: number): Promise<BigNumber>;
}
declare const _default: DogeSoundContestContract;
export default _default;
//# sourceMappingURL=DogeSoundContestContract.d.ts.map