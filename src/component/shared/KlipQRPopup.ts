import { DomNode, el, Popup } from "@hanul/skynode";
import msg from "msg.js";

export default class KlipQRPopup extends Popup {

    public content: DomNode;

    constructor(dataURL: string) {
        super(".popup-background");
        this.append(
            this.content = el(".klip-qr-popup",
                el("h2", msg("KLIP_POPUP_TITLE")),
                el(".qr", el("img", { src: dataURL })),
                el("p", msg("KLIP_POPUP_DESC1")),
                el("p", msg("KLIP_POPUP_DESC2")),
                el("p", msg("KLIP_POPUP_DESC3")),
                el(".button-container",
                    el("button", msg("CONFIRM_BUTTON"), {
                        click: () => this.delete(),
                    }),
                ),
            ),
        );
    }
}
