import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class DscFamily implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "DSC Family";
        Layout.current.content.append(this.container = el(".dsc-family-view",
            el("header",
                el("h1", "DSC Family 👩‍❤️‍💋‍"),
                el("h2", "Dsc, holder, or channel to build and grow their own independent community is strongly recommended and support to.Channel list of the registered holder, so far is the list below."),
            ),
            el("section",
                el("hr"),
                el(".input-container",
                    el("label", "The channel name"),
                    el("input", { placeholder: "name" }),
                ),
                el(".channel-container",
                    el(".input-container",
                        el("label", "Channel"),
                        el("input", { placeholder: "Channel" }),
                    ),
                    el(".input-container",
                        el("label", "Channel Link"),
                        el("input", { placeholder: "Link" }),
                    ),
                ),
                el(".introduction-container",
                    el(".input-container",
                        el("label", "Channel introduction"),
                        el("input", { placeholder: "Channel", type: "text" }),
                    ),
                    el(".input-container",
                        el("label", "Image"),
                        el("input", { placeholder: "Link", type: "file" }),
                    ),
                ),
                el(".input-container",
                    el("label", "Channel Link"),
                    el("input", { placeholder: "Link" }),
                ),
                el(".button-wrap",
                    el("button", "REGISTER"),
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