import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class CreateDscFamily implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("DSC_FAMILY_TITLE");
        Layout.current.content.append(this.container = el(".create-dsc-family-view",
            el("header",
                el("h1", msg("DSC_FAMILY_TITLE")),
                el("h2", msg("DSC_FAMILY_DESC")),
            ),
            el("section",
                el("hr"),
                el(".input-container",
                    el("label", msg("DSC_FAMILY_DETAIL_INPUT2")),
                    el("input", { placeholder: msg("DSC_FAMILY_DETAIL_INPUT2") }),
                ),
                el(".introduction-container",
                    el(".input-container",
                        el("label", msg("DSC_FAMILY_DETAIL_TITLE1")),
                        el("input", { placeholder: msg("DSC_FAMILY_DETAIL_TITLE1") }),
                    ),
                    el(".input-container",
                        el("label", "Image"),
                        el("input", { placeholder: msg("DSC_FAMILY_DETAIL_TITLE4"), type: "file" }),
                    ),
                ),
                el(".input-container",
                    el("label", msg("DSC_FAMILY_DETAIL_TITLE3")),
                    el("input", { placeholder: msg("DSC_FAMILY_DETAIL_TITLE2"), type: "text" }),
                ),
                el(".button-wrap",
                    el("button", msg("REGISTER_BUTTON")),
                ),
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}