import { DomNode } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
export default class BmcsLayout implements View {
    static current: BmcsLayout;
    private container;
    content: DomNode;
    constructor();
    set title(title: string);
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Layout.d.ts.map