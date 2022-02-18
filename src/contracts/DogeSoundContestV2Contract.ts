import { BigNumber } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class DogeSoundContestContractV2 extends Contract {

    public readonly HOLIDAY_PERIOD = 0;
    public readonly REGISTER_CANDIDATE_PERIOD = 1;
    public readonly VOTE_PERIOD = 2;

    constructor() {
        super(Config.contracts.DogeSoundContestV2, require("./DogeSoundContestV2ABI.json"));
    }

    public async getCheckpoint(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("checkpoint"));
    }

    public async getHolidayInterval(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("holidayInterval"));
    }

    public async getRound(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("round"));
    }

    public async getRoundBlock(round: number): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("roundBlock", round));
    }

    public async getPeriod(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("period"));
    }

    public async getRemains(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("remains"));
    }

    public async getCandidateMateCount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("candidateMateCount"));
    }

    public async getUserVotes(round: number, user: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("userVotes", round, user));
    }

    public async getCandidateCount(round: number): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("candidateCount", round));
    }

    public async getCandidate(round: number, index: number): Promise<string> {
        return await this.runMethod("candidate", round, index);
    }

    public async getCandidateRegister(round: number, index: number): Promise<string> {
        return await this.runMethod("candidateRegister", round, index);
    }

    public async getVotes(round: number, candidate: number): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("votes", round, candidate));
    }

    public async getMateVoted(round: number, mates: string, mateId: number): Promise<boolean> {
        return await this.runMethod("mateVoted", round, mates, mateId);
    }

    public async registerCandidate(dogeSound: string, mates: string, mateIds: number[]): Promise<void> {
        await this.runWalletMethod("registerCandidate", dogeSound, mates, mateIds);
    }

    public async vote(candidate: number, mates: string, mateIds: number[]): Promise<void> {
        await this.runWalletMethod("vote", candidate, mates, mateIds);
    }

    public async getElected(round: number): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("elected", round));
    }

    public async mintWinnerNFT(round: number): Promise<void> {
        await this.runWalletMethod("mintWinnerNFT", round);
    }
}

export default new DogeSoundContestContractV2();
