import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import BmcsLayout from "./Layout";

export default class BmcsGallery implements View {

    private container: DomNode;

    constructor() {
        BmcsLayout.current.title = "BMCS GALLERY";
        BmcsLayout.current.content.append(
            this.container = el(".bmcs-gallery-view",
            ))
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}