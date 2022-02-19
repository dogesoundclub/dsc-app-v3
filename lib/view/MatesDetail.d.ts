import { View, ViewParams } from "skyrouter";
export default class MatesDetail implements View {
    private id;
    private container;
    private nameDisplay;
    private mixDisplay;
    private snsDisplay;
    private messageList;
    constructor(params: ViewParams);
    private load;
    private loadSNS;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=MatesDetail.d.ts.map