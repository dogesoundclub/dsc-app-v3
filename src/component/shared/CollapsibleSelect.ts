import { DomNode, el } from "@hanul/skynode";

export default class CollapsibleSelect extends DomNode {
    private content: DomNode;
    private popup: DomNode;
    private select: DomNode;

    constructor(title: string, onClick?: any) {
        super(".collapsible-select");
        this.append(
            el("section",
                this.popup = el(".popup"),
                el(".select-container",
                    this.select = el("button.collapsible", title,
                        {
                            click: () => {
                                if (this.content.domElement.style.display === "block") {
                                    this.content.style({
                                        display: "none",
                                    });
                                    this.popup.style({
                                        height: "0%",
                                    });
                                } else {
                                    this.content.style({
                                        display: "block",
                                    });
                                    this.popup.style({
                                        height: "100%",
                                    });
                                }
                            }
                        }),
                ),
                this.content = el(".content",
                    el("section", {
                        click: () => {
                            this.setChannel('discord');
                        }
                    },
                        el("img", { src: "/images/shared/icn/icn_discord_color.svg" }),
                        el("p", "Discord"),
                    ),
                    el("section", {
                        click: () => {
                            this.setChannel('twitter');
                        }
                    },
                        el("img", { src: "/images/shared/icn/icn_twitter_color.svg" }),
                        el("p", "Twitter"),
                    ),
                    el("section", {
                        click: () => {
                            this.setChannel('telegram');
                        }
                    },
                        el("img", { src: "/images/shared/icn/icn_telegram_color.svg" }),
                        el("p", "Telegram"),
                    ),
                    el("section", {
                        click: () => {
                            this.setChannel('instagram');
                        }
                    },
                        el("img", { src: "/images/shared/icn/icn_instagram_color.svg" }),
                        el("p", "Instagram"),
                    ),
                    el("section", {
                        click: () => {
                            this.setChannel('kakaotalk');
                        }
                    },
                        el("img", { src: "/images/shared/icn/icn_kakaotalk_color.svg" }),
                        el("p", "Kakaotalk"),
                    ),
                ),
            ),
        );
    }

    private setChannel(name: string): void {
        this.content.style({
            display: "none",
        });
        this.popup.style({
            height: "0%",
            padding: 0,
        });
        this.select.empty().appendText(name);
    }
}
