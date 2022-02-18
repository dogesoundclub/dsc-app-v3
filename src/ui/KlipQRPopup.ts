import { DomNode, el, Popup } from "@hanul/skynode";
import msg from "msg.js";

export default class KlipQRPopup extends Popup {

    public content: DomNode;

    constructor(dataURL: string) {
        super(".popup-background");
        this.append(
            this.content = el(".klip-qr-popup",
                el("img.qr", { src: dataURL }),
                el("p", msg("CONNECT_KLIP_QR_DESCRIPTION_1")),
                el("p", msg("CONNECT_KLIP_QR_DESCRIPTION_2")),
                el("p", msg("CONNECT_KLIP_QR_DESCRIPTION_3")),
                el("a.button.cancel-button", msg("CANCEL_BUTTON"), {
                    click: () => this.delete(),
                }),
            ),
        );
    }
}
