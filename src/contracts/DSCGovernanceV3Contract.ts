import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Config from "../Config";
import Contract from "./Contract";

export interface ProposalInfo {
    proposer: string,
    title: string,
    summary: string,
    content: string,
    note: string,
    blockNumber: number,
    proposeMates: string,
    votePeriod: number,
    canceled: boolean,
    executed: boolean,
}

class DSCGovernanceV3Contract extends Contract {

    public readonly VOTING = 0;
    public readonly CANCELED = 1;
    public readonly RESULT_SAME = 2;
    public readonly RESULT_FOR = 3;
    public readonly RESULT_AGAINST = 4;
    public readonly AVOID = 5;

    constructor() {
        super(Config.contracts.GovernanceV3, require("./DSCGovernanceV3ABI.json"));
    }

    public async getMinProposePeriod(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("minProposePeriod"));
    }

    public async getMaxProposePeriod(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("maxProposePeriod"));
    }

    public async getProposeMateCount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("proposeMateCount"));
    }

    public async getProposePrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("proposePrice"));
    }

    public async propose(

        title: string,
        summary: string,
        content: string,
        note: string,
        votePeriod: BigNumberish,

        mates: string,
        mateIds: BigNumberish[],

    ): Promise<void> {
        await this.runWalletMethodWithLargeGas("propose",

            title,
            summary,
            content,
            note,
            votePeriod,

            mates,
            mateIds,
        );
    }

    public async getProposalCount(): Promise<number> {
        return await this.runMethod("proposalCount");
    }

    public async getMateVoted(proposalId: BigNumberish, mates: string, mateId: number): Promise<boolean> {
        return await this.runMethod("mateVoted", proposalId, mates, mateId);
    }

    public async getProposal(proposalId: BigNumberish): Promise<ProposalInfo> {
        const result = await this.runMethod("proposals", proposalId);
        return {
            proposer: result[0],
            title: result[1],
            summary: result[2],
            content: result[3],
            note: result[4],
            blockNumber: parseInt(result[5], 10),
            proposeMates: result[6],
            votePeriod: parseInt(result[7], 10),
            canceled: result[8],
            executed: result[9],
        };
    }

    public async voteFor(proposalId: BigNumberish, mates: string, mateIds: BigNumberish[]): Promise<void> {
        await this.runWalletMethod("voteFor", proposalId, mates, mateIds);
    }

    public async voteAgainst(proposalId: BigNumberish, mates: string, mateIds: BigNumberish[]): Promise<void> {
        await this.runWalletMethod("voteAgainst", proposalId, mates, mateIds);
    }

    public async cancel(proposalId: BigNumberish): Promise<void> {
        await this.runWalletMethod("cancel", proposalId);
    }

    public async execute(proposalId: BigNumberish): Promise<void> {
        await this.runWalletMethod("execute", proposalId);
    }

    public async getBackMates(proposalId: BigNumberish): Promise<void> {
        await this.runWalletMethodWithLargeGas("getBackMates", proposalId);
    }

    public async matesBacked(proposalId: BigNumberish): Promise<boolean> {
        return await this.runMethod("matesBacked", proposalId);
    }

    public async getResult(proposalId: BigNumberish): Promise<number> {
        return parseInt(await this.runMethod("result", proposalId), 10);
    }

    public async getForVotes(proposalId: BigNumberish): Promise<number> {
        return parseInt(await this.runMethod("forVotes", proposalId), 10);
    }

    public async getAgainstVotes(proposalId: BigNumberish): Promise<number> {
        return parseInt(await this.runMethod("againstVotes", proposalId), 10);
    }
}

export default new DSCGovernanceV3Contract();
