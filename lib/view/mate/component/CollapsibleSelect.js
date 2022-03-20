"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class CollapsibleSelect extends skynode_1.DomNode {
    constructor(title, onClick) {
        super(".collapsible-select");
        this.append((0, skynode_1.el)("section", this.popup = (0, skynode_1.el)(".popup"), (0, skynode_1.el)(".select-container", this.select = (0, skynode_1.el)("button.collapsible", title, {
            click: () => {
                if (this.content.domElement.style.display === "block") {
                    this.content.style({
                        display: "none",
                    });
                    this.popup.style({
                        height: "0%",
                    });
                }
                else {
                    this.content.style({
                        display: "block",
                    });
                    this.popup.style({
                        height: "100%",
                    });
                }
            }
        })), this.content = (0, skynode_1.el)(".content", (0, skynode_1.el)("section", {
            click: () => {
                this.setChannel('discord');
            }
        }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_discord_color.svg" }), (0, skynode_1.el)("p", "Discord")), (0, skynode_1.el)("section", {
            click: () => {
                this.setChannel('twitter');
            }
        }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_twitter_color.svg" }), (0, skynode_1.el)("p", "Twitter")), (0, skynode_1.el)("section", {
            click: () => {
                this.setChannel('telegram');
            }
        }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_telegram_color.svg" }), (0, skynode_1.el)("p", "Telegram")), (0, skynode_1.el)("section", {
            click: () => {
                this.setChannel('instagram');
            }
        }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_instagram_color.svg" }), (0, skynode_1.el)("p", "Instagram")), (0, skynode_1.el)("section", {
            click: () => {
                this.setChannel('kakaotalk');
            }
        }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_kakaotalk_color.svg" }), (0, skynode_1.el)("p", "Kakaotalk")))));
    }
    setChannel(name) {
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
exports.default = CollapsibleSelect;
//# sourceMappingURL=CollapsibleSelect.js.map