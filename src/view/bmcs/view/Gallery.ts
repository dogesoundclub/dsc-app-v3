import { BodyNode, DomNode } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Gallery implements View {

    // private container: DomNode;

    constructor() {
        BodyNode.append(
        )
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        // this.container.delete();
    }
}