import { View, ViewParams } from "skyrouter";
export default class GovernanceDetail implements View {
    private proposalId;
    private container;
    private content;
    private voteForm;
    private timerInterval;
    private wallet;
    private ownedMates;
    private votableMates;
    private selectedMates;
    private mateList;
    constructor(params: ViewParams);
    private load;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=GovernanceDetail.d.ts.map