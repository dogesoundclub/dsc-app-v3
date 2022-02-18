import { DomNode, el, Popup } from "@hanul/skynode";
import msg from "msg.js";
import Klip from "../klaytn/Klip";

export default class ConnectWalletPopup extends Popup {

    public content: DomNode;

    constructor(callback: () => void) {
        super(".popup-background");
        this.append(
            this.content = el(".connect-wallet-popup",
                el("img.talker", { src: "https://storage.googleapis.com/dsc-mate/336/dscMate-1.png" }),
                el("p", msg("CONNECT_WALLET_POPUP_DESCRIPTION")),
                el("a.button.connect-kaikas-button",
                    el("img", { src: "/images/logo/kaikas.svg" }),
                    msg("CONNECT_KAIKAS_BUTTON"),
                    { href: "https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi", target: "_blank" },
                ),
                el("a.button.connect-klip-button",
                    el("img", { src: "/images/logo/klip.svg" }),
                    msg("CONNECT_KLIP_BUTTON"),
                    {
                        click: async () => {
                            await Klip.connect();
                            callback();
                            this.delete();
                        },
                    },
                ),
                el("a.button.cancel-button", msg("CANCEL_CONNECT_BUTTON"), {
                    click: () => this.delete(),
                }),
            ),
        );
    }
}
