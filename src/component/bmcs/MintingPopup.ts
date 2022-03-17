import { DomNode, el, Popup } from "@hanul/skynode";
import BiasMinterContract from "../../contracts/BiasMinterContract";
import Wallet from "../../klaytn/Wallet";

export default class MintingPopup extends Popup {

    public content: DomNode;
    private interval: any;

    private notSaleStatus: DomNode;
    private presaleStatus: DomNode;
    private public1Status: DomNode;
    private public2Status: DomNode;
    private ticketStatus: DomNode;

    private walletAddress: DomNode;

    private presaleBar: DomNode;
    private public1Bar: DomNode;
    private public2Bar: DomNode;
    private ticketBar: DomNode;

    private amountDisplay: DomNode;
    private price: DomNode;
    private limitPerTransaction: DomNode;
    private amountInput: DomNode<HTMLInputElement>;

    private step = 0;

    constructor() {
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
                        el(".progress-text", "Pre Sale"),
                        el(".progress-text", "1st Public"),
                        el(".progress-text", "2st Public"),
                        el(".progress-text", "확정권 Sale"),
                    ),
                    el(".progress-container",
                        el("", "0"),
                        el("section",
                            el(".progress.presale",
                                this.presaleBar = el(".bar"),
                            ),
                            el(".progress.public1",
                                this.public1Bar = el(".bar"),
                            ),
                            el(".progress.public2",
                                this.public2Bar = el(".bar"),
                            ),
                            el(".progress.ticket",
                                this.ticketBar = el(".bar"),
                            ),
                        ),
                        el("", "9400"),
                    ),
                    this.amountDisplay = el(".amount", "AMOUNT ...")
                ),
                el("hr"),
                el("section",
                    el(".status-container",
                        this.notSaleStatus = el("p.not-sale", "Not Yet on Sale"),
                        this.presaleStatus = el("p.pre-sale", "Pre Sale"),
                        this.public1Status = el("p.first-sale", "1st Public Sale"),
                        this.public2Status = el("p.second-sale", "2nd Public Sale"),
                        this.ticketStatus = el("p.ticket-sale", "확정권 Sale"),
                    ),
                    el(".price-container",
                        el(".title", "Price"),
                        el(".klay-container",
                            el("img"),
                            this.price = el("p", "..."),
                            el("p", "Klay"),
                        ),
                        this.limitPerTransaction = el("p", "Per Transaction : ...개")
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
                        el("a", "MINT", {
                            click: async () => {
                                await BiasMinterContract.mint(this.amountInput.domElement.valueAsNumber);
                            },
                        }),
                    ),
                    this.walletAddress = el(".address", "Wallet Address : "),
                ),
            ),
        );

        this.loadStatus();
        Wallet.on("connect", this.connectHandler);
        this.interval = setInterval(() => this.progress(), 1000);
        this.progress();
    }

    private async loadStatus() {
        this.step = (await BiasMinterContract.step()).toNumber();

        this.notSaleStatus.style({ color: "#fff" });
        this.presaleStatus.style({ color: "#fff" });
        this.public1Status.style({ color: "#fff" });
        this.public2Status.style({ color: "#fff" });
        this.ticketStatus.style({ color: "#fff" });

        if (this.step === 0) {
            this.amountInput.domElement.max = "5";
            this.limitPerTransaction.empty().appendText("Per Transaction : 5개");
            this.price.empty().appendText("330");
            this.notSaleStatus.style({ color: "#FFDF13" });
        } else if (this.step === 1) {
            this.amountInput.domElement.max = "5";
            this.limitPerTransaction.empty().appendText("Per Transaction : 5개");
            this.price.empty().appendText("330");
            this.presaleStatus.style({ color: "#FFDF13" });
        } else if (this.step === 2) {
            this.amountInput.domElement.max = "10";
            this.limitPerTransaction.empty().appendText("Per Transaction : 10개");
            this.price.empty().appendText("350");
            this.public1Status.style({ color: "#FFDF13" });
        } else if (this.step === 3) {
            this.amountInput.domElement.max = "10";
            this.limitPerTransaction.empty().appendText("Per Transaction : 10개");
            this.price.empty().appendText("380");
            this.public2Status.style({ color: "#FFDF13" });
        } else if (this.step === 4) {
            this.amountInput.domElement.max = "1";
            this.limitPerTransaction.empty().appendText("Per Transaction : 1개");
            this.price.empty().appendText("330");
            this.ticketStatus.style({ color: "#FFDF13" });
        }
    }

    private addMintAmount() {
        if (this.step <= 1) {
            if (this.amountInput.domElement.value >= "5") {
                this.amountInput.domElement.valueAsNumber += 0;
            } else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber += 2;
            } else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber += 2;
            } else {
                this.amountInput.domElement.valueAsNumber += 1;
            }
        } else if (this.step <= 3) {
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
        } else if (this.step === 4) {
            this.amountInput.domElement.valueAsNumber = 1;
        }
    }

    private subMintAmount() {
        if (this.step <= 1) {
            if (this.amountInput.domElement.value <= "1") {
                this.amountInput.domElement.valueAsNumber -= 0;
            } else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber -= 1;
            } else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber -= 2;
            } else if (this.amountInput.domElement.value === "5") {
                this.amountInput.domElement.valueAsNumber -= 2;
            }
        } else if (this.step <= 3) {
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
        } else if (this.step === 4) {
            this.amountInput.domElement.valueAsNumber = 1;
        }
    }

    private connectHandler() {
        this.loadAddress();
    }

    private async loadAddress() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText("Wallet Address : " + address);
        }
    }

    private async progress() {
        this.loadStatus();
        this.loadAddress();

        const currentId = (await BiasMinterContract.currentId()).toNumber();
        this.amountDisplay.empty().appendText("AMOUNT " + String(currentId - 600));

        const presaleLimit = 4000;
        const presaleRemains = (await BiasMinterContract.presaleCount()).toNumber();
        const presaleD = presaleLimit - presaleRemains > presaleLimit ? presaleLimit : presaleLimit - presaleRemains;
        this.presaleBar.style({ width: `${presaleD / presaleLimit * 100}%` });

        const public1Limit = 2570;
        const public1Remains = (await BiasMinterContract.public1Count()).toNumber();
        const public1D = public1Limit - public1Remains > public1Limit ? public1Limit : public1Limit - public1Remains;
        this.public1Bar.style({ width: `${public1D / public1Limit * 100}%` });

        const public2Limit = 2600;
        const public2Remains = (await BiasMinterContract.public2Count()).toNumber();
        const public2D = public2Limit - public2Remains > public2Limit ? public2Limit : public2Limit - public2Remains;
        this.public2Bar.style({ width: `${public2D / public2Limit * 100}%` });

        const ticketLimit = 230;
        const ticketRemains = (await BiasMinterContract.ticketCount()).toNumber();
        const ticketD = ticketLimit - ticketRemains > ticketLimit ? ticketLimit : ticketLimit - ticketRemains;
        this.ticketBar.style({ width: `${ticketD / ticketLimit * 100}%` });
    }

    public delete(): void {
        Wallet.off("connect", this.connectHandler);
        clearInterval(this.interval);
        super.delete();
    }
}
