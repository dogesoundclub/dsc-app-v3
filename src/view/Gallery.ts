import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import GalleryMateItem from "../component/mate/GalleryMateItem";
import Layout from "./Layout";

export default class Gallery implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = msg("GALLERY_TITLE");
        Layout.current.content.append(this.container = el(".gallery-view",
            el("header",
                el("h1", msg("GALLERY_TITLE")),
            ),
            el("section",
                el("aside",
                    el(".input-container",
                        el("input", { placeholder: msg("GALLERY_SEARCH_INPUT") }),
                        el("button", msg("GALLERY_SEARCH_BUTTON"))
                    ),
                    el("select",
                        el("option", "FACE"),
                    ),
                    el("button", msg("GALLERY_FILTER_BUTTON"))
                ),
                el("article",
                    new GalleryMateItem(1, "/images/shared/img/mate-mock.png"),
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