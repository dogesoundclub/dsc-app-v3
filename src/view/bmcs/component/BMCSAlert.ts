import { DomNode, el, Popup } from "@hanul/skynode";
import msg from "msg.js";

export default class BMCSAlert extends Popup {

    public content: DomNode;

    constructor(
        title: string,
        message: string,
        confirmTitle?: string,
        confirm?: () => void,
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.bmcs-alert",
                el(".content",
                    el(".title", title),
                    el("p", message),
                ),
                el(".button-container",
                    el("button", confirmTitle === undefined ? msg("CONFIRM_BUTTON") : confirmTitle, {
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
