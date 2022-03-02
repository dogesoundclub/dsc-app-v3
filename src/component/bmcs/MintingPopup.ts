import { DomNode, el, Popup } from "@hanul/skynode";
import msg from "msg.js";

export default class MintingPopup extends Popup {

    public content: DomNode;
    private notSaleStatus: DomNode;
    private whitelistSaleStatus: DomNode;
    private preSaleStatus: DomNode;
    private firstSaleStatus: DomNode;
    private secondSaleStatus: DomNode;
    private walletAddress: DomNode;
    private bar: DomNode;

    constructor(
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.bmcs-minting-popup",
                el("section",
                    el("h3", "NFT Remaining Quantity"),
                    el(".progress-info",
                        el(".progress-text", "W.L Sale"),
                        el(".progress-text", "Pre Sale"),
                        el(".progress-text", "1st Public"),
                        el(".progress-text", "2st Public"),
                    ),
                    el(".progress-container",
                        el("", "0"),
                        this.bar = el(".progress"),
                        el("", "9400"),
                    ),
                    el(".amount", "AMOUNT 9400")
                ),
                el("hr"),
                el("section",
                    el(".status-container",
                        this.notSaleStatus = el("p.not-sale", "Not Yet on Sale"),
                        this.whitelistSaleStatus = el("p.whitelist-sale", "Whitelist Sale"),
                        this.preSaleStatus = el("p.pre-sale", "Pre Sale"),
                        this.firstSaleStatus = el("p.first-sale", "1st Public Sale"),
                        this.secondSaleStatus = el("p.second-sale", "2nd Public Sale"),
                    ),
                    el(".price-container",
                        el(".title", "Price"),
                        el(".klay-container",
                            el("img"),
                            el("p", "300"),
                            el("p", "Klay"),
                        ),
                        el("p", "Per Transaction : 5개")
                    ),
                    el(".amount-container",
                        el(".title", "Amount"),
                        el(".input-container",
                            el("button",),
                            el("input", { type: "number", value: 1 }),
                            el("button",),
                        ),
                    ),
                    el(".button-wrap",
                        el("a", "MINTING"),
                    ),
                    this.walletAddress = el(".address", "Wallet Address : "),
                ),
            ),
        );
        this.init();
    }

    private init(): void {
        this.notSaleStatus.style({
            color: "#FFDF13",
        })
    }
}
