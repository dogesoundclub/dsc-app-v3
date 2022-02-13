import { DomNode, el, Popup } from "@hanul/skynode";

export default class Confirm extends Popup {

    public content: DomNode;

    constructor(
        message: string,
        confirmTitle: string,
        confirm: () => void,
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.confirm",
                el("p", message),
                el(".button-container",
                    el("button.cancel", "Cancel", {
                        click: () => this.delete(),
                    }),
                    el("button.confirm", confirmTitle, {
                        click: () => {
                            confirm();
                            this.delete();
                        },
                    }),
                ),
            ),
        );
    }
}
