import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class DscFamily implements View {
    private container: DomNode;
    // private collapsible: DomNode;

    constructor() {
        Layout.current.title = msg("DSC_FAMILY_TITLE");
        Layout.current.content.append(this.container = el(".dsc-family-view",
            el("header",
                el("h1", msg("DSC_FAMILY_TITLE")),
                el("h2", msg("DSC_FAMILY_DESC")),
                el("button", msg("REGISTER_BUTTON")),
            ),
            el("section",
                el("hr"),
                el("header",
                    el("button", "My Channel"),
                    el("h2", "Ohlollydayofficial"),
                    el("a", "Edit"),
                ),
                el("article",
                    el("img", { src: "/images/shared/img/mate-mock.png" }),
                    el(".content",
                        el(".icon-container",
                            el("img", { src: "/images/shared/icn/icn_kakaotalk_color.svg", alt: "kakaotalk" }),
                            el("img", { src: "/images/shared/icn/icn_twitter_color.svg", alt: "twitter" }),
                            el("img", { src: "/images/shared/icn/icn_instagram_color.svg", alt: "instagram" }),
                            el("img", { src: "/images/shared/icn/icn_discord_color.svg", alt: "discord" }),
                            el("img", { src: "/images/shared/icn/icn_telegram_color.svg", alt: "telegram" }),
                        ),
                        el("p", "This is DSC_JOKER. I am continuing my space trip to the meme project Mint Chocolate Club with two writers, Artist JoyJo and Sujincho. I think there will be much more people who don't know what our Mint Chocolate Squad is or where it originated yet. Through this article, I would like to introduce a little bit and share my thoughts on what we want to do in the future."),
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