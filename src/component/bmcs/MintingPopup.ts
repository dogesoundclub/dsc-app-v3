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
    private wlBar: DomNode;
    private preBar: DomNode;
    private firstBar: DomNode;
    private secondBar: DomNode;
    private amountInput: DomNode<HTMLInputElement>;
    private status: string;

    constructor(
    ) {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.bmcs-minting-popup",
                el("section",
                    el("header",
                        el("h3", "NFT Remaining Quantity"),
                        el("a", { click: () => { this.delete() } },
                            el("img", { src: "/images/shared/icn/icn_close.svg" })
                        ),
                    ),
                    el(".progress-info",
                        el(".progress-text", "W.L Sale"),
                        el(".progress-text", "Pre Sale"),
                        el(".progress-text", "1st Public"),
                        el(".progress-text", "2st Public"),
                    ),
                    el(".progress-container",
                        el("", "0"),
                        el("section",
                            this.wlBar = el(".progress.start"),
                            this.preBar = el(".progress.pre"),
                            this.firstBar = el(".progress.first"),
                            this.secondBar = el(".progress.end"),
                        ),
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
                            el("button", "-", {
                                click: () => {
                                    this.subMintAmount();
                                }
                            }),
                            this.amountInput = el("input", { type: "number", value: "1", readonly: "" }),
                            el("button", "+", {
                                click: () => {
                                    this.addMintAmount();
                                }
                            }),
                        ),
                    ),
                    el(".button-wrap",
                        el("a", "MINT"),
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
        });

        this.loadStatus();
    }

    private loadStatus() {
        this.status = "public";

        if (this.status === "whitelist") {
            this.amountInput.domElement.max = "5";
        } else if (this.status === "public") {
            this.amountInput.domElement.max = "10";
        }
    }

    private addMintAmount() {
        if (this.status === "whitelist") {
            if (this.amountInput.domElement.value >= "5") {
                this.amountInput.domElement.valueAsNumber += 0;
            } else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber += 2;
            } else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber += 2;
            } else {
                this.amountInput.domElement.valueAsNumber += 1;
            }
        } else {
            if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber += 2;
            } else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber += 2;
            } else if (this.amountInput.domElement.value === "5") {
                this.amountInput.domElement.valueAsNumber += 5;
            } else if (this.amountInput.domElement.value >= "10") {
                this.amountInput.domElement.valueAsNumber += 0;
            } else {
                this.amountInput.domElement.valueAsNumber += 1;
            }
        }
    }

    private subMintAmount() {
        if (this.status === "whitelist") {
            if (this.amountInput.domElement.value <= "1") {
                this.amountInput.domElement.valueAsNumber -= 0;
            } else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber -= 1;
            } else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber -= 2;
            } else if (this.amountInput.domElement.value === "5") {
                this.amountInput.domElement.valueAsNumber -= 2;
            }
        } else {
            if (this.amountInput.domElement.value <= "1") {
                this.amountInput.domElement.valueAsNumber -= 0;
            } else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber -= 1;
            } else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber -= 2;
            } else if (this.amountInput.domElement.value === "5") {
                this.amountInput.domElement.valueAsNumber -= 2;
            } else if (this.amountInput.domElement.value === "10") {
                this.amountInput.domElement.valueAsNumber -= 5;
            } else {
                this.amountInput.domElement.valueAsNumber -= 1;
            }
        }
    }
}
