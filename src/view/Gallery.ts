import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Gallery implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "갤러리";
        Layout.current.content.append(this.container = el(".gallery-view",
            el("header",
                el("h1", "GALLERY 🖼🖌"),
            ),
            el("section",
                el("aside",
                    el(".input-container",
                        el("input", { placeholder: "ID/이름 검색" }),
                        el("button", "검색")
                    ),
                    el("select",
                        el("option", "FACE"),
                    ),
                    el("button", "RESET FILTERR SETTING")
                ),
                el("article",
                    el("section",
                        el("img", { src: "/images/shared/img/mate-mock.png" }),
                        el("header", "#1"),
                    ),
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