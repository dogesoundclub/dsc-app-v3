import { DomNode, el, Popup } from "@hanul/skynode";
import msg from "msg.js";

export default class BMCSConfirm extends Popup {

    public content: DomNode;

    constructor(
        message: string,
        confirmTitle?: string,
        confirm?: () => void,
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.bmcs-confirm",
                el(".close-container", { click: () => this.delete(), },
                    el("img", { src: "/images/shared/icn/icn_close.svg", alt: "close" }),
                ),
                el(".content",
                    el("p", message),
                ),
                el(".button-container",
                    el("button.cancel", "Cancel", {
                        click: () => {
                            this.delete();
                        },
                    }),
                    el("button.ok", confirmTitle === undefined ? "OK" : confirmTitle, {
                        click: () => {
                            if (confirm !== undefined) {
                                confirm();
                            }
                            this.delete();
                        },
                    }),
                ),
            ),
        );
    }
}
