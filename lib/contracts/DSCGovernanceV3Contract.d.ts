import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import Contract from "./Contract";
export interface ProposalInfo {
    proposer: string;
    title: string;
    summary: string;
    content: string;
    note: string;
    blockNumber: number;
    proposeMates: string;
    votePeriod: number;
    canceled: boolean;
    executed: boolean;
}
declare class DSCGovernanceV3Contract extends Contract {
    readonly VOTING = 0;
    readonly CANCELED = 1;
    readonly RESULT_SAME = 2;
    readonly RESULT_FOR = 3;
    readonly RESULT_AGAINST = 4;
    readonly AVOID = 5;
    constructor();
    getMinProposePeriod(): Promise<BigNumber>;
    getMaxProposePeriod(): Promise<BigNumber>;
    getProposeMateCount(): Promise<BigNumber>;
    propose(title: string, summary: string, content: string, note: string, votePeriod: BigNumberish, mates: string, mateIds: BigNumberish[]): Promise<void>;
    getProposalCount(): Promise<number>;
    getMateVoted(proposalId: BigNumberish, mates: string, mateId: number): Promise<boolean>;
    getProposal(proposalId: BigNumberish): Promise<ProposalInfo>;
    voteFor(proposalId: BigNumberish, mates: string, mateIds: BigNumberish[]): Promise<void>;
    voteAgainst(proposalId: BigNumberish, mates: string, mateIds: BigNumberish[]): Promise<void>;
    cancel(proposalId: BigNumberish): Promise<void>;
    execute(proposalId: BigNumberish): Promise<void>;
    getBackMates(proposalId: BigNumberish): Promise<void>;
    matesBacked(proposalId: BigNumberish): Promise<boolean>;
    getResult(proposalId: BigNumberish): Promise<number>;
    getForVotes(proposalId: BigNumberish): Promise<number>;
    getAgainstVotes(proposalId: BigNumberish): Promise<number>;
}
declare const _default: DSCGovernanceV3Contract;
export default _default;
//# sourceMappingURL=DSCGovernanceV3Contract.d.ts.map