import { DomNode, el, Popup } from "@hanul/skynode";
import msg from "msg.js";

export default class Alert extends Popup {

    public content: DomNode;

    constructor(
        message: string,
        confirmTitle?: string,
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.alert",
                el("p", message),
                el(".button-container",
                    el("button", confirmTitle === undefined ? msg("CONFIRM_BUTTON") : confirmTitle, {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
    }
}
