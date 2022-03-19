import { DomNode, el, Popup } from "@hanul/skynode";
import BiasMinterContract from "../../contracts/BiasMinterContract";
import Wallet from "../../klaytn/Wallet";

export default class MintingPopup extends Popup {

    public content: DomNode;
    private interval: any;

    private walletAddress: DomNode;

    private saleBar: DomNode;

    private amountDisplay: DomNode;
    private WLprice: DomNode;
    private price: DomNode;
    private amountInput: DomNode<HTMLInputElement>;

    private step = 0;

    constructor() {
        super(".popup-background");
        this.append(
            this.content = el(".dialogue.bmcs-minting-popup",
                el("section",
                    el("header",
                        el("h3", "Sale Progress"),
                        el("a", { click: () => { this.delete() } },
                            el("img", { src: "/images/shared/icn/icn_close.svg" })
                        ),
                    ),
                    el(".progress-container",
                        el("p", "0"),
                        el("section",
                            el(".progress",
                                this.saleBar = el(".bar"),
                            ),
                        ),
                        el("p", "9400"),
                    ),
                    this.amountDisplay = el(".amount", "AMOUNT ...")
                ),
                el("hr"),
                el("section",
                    el(".status-container",
                        el("p.not", "Not on Sale"),
                        el("p", "On Sale"),
                    ),
                    el(".price-container",
                        el(".content",
                            el(".title", "WL Price"),
                            el(".klay-container",
                                el("img", { src: "/images/shared/icn/icn_klay.svg", alt: "Klaytn" }),
                                this.WLprice = el("p", "..."),
                                el("p", "Klay"),
                            ),
                            el("p", "Per Transaction : Unlimited")
                        ),
                        el("hr"),
                        el(".content",
                            el(".title", "None WL Price"),
                            el(".klay-container",
                                el("img", { src: "/images/shared/icn/icn_klay.svg", alt: "Klaytn" }),
                                this.price = el("p", "..."),
                                el("p", "Klay"),
                            ),
                            el("p", "Per Transaction : Unlimited")
                        ),
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
        // Wallet.on("connect", this.connectHandler);
        // this.interval = setInterval(() => this.progress(), 1000);
        // this.progress();
    }

    private async loadStatus() {
        this.step = (await BiasMinterContract.step()).toNumber();

        this.saleBar.style({ color: "#fff" });

        this.amountInput.domElement.max = "1";
        this.price.empty().appendText("185");
        this.WLprice.empty().appendText("165");
    }

    private addMintAmount() {
        this.amountInput.domElement.valueAsNumber += 1;
    }

    private subMintAmount() {
        this.amountInput.domElement.valueAsNumber -= 1;
    }

    // private connectHandler() {
    //     this.loadAddress();
    // }

    // private async loadAddress() {
    //     const address = await Wallet.loadAddress();
    //     if (address !== undefined) {
    //         this.walletAddress.empty().appendText("Wallet Address : " + address);
    //     }
    // }

    // private async progress() {
    //     this.loadStatus();
    //     this.loadAddress();

    //     const currentId = (await BiasMinterContract.currentId()).toNumber();
    //     this.amountDisplay.empty().appendText("AMOUNT " + String(currentId - 600));

    //     const presaleLimit = 4000;
    //     const presaleRemains = (await BiasMinterContract.presaleCount()).toNumber();
    //     const presaleD = presaleLimit - presaleRemains > presaleLimit ? presaleLimit : presaleLimit - presaleRemains;
    //     this.presaleBar.style({ width: `${presaleD / presaleLimit * 100}%` });

    //     const public1Limit = 2570;
    //     const public1Remains = (await BiasMinterContract.public1Count()).toNumber();
    //     const public1D = public1Limit - public1Remains > public1Limit ? public1Limit : public1Limit - public1Remains;
    //     this.public1Bar.style({ width: `${public1D / public1Limit * 100}%` });

    //     const public2Limit = 2600;
    //     const public2Remains = (await BiasMinterContract.public2Count()).toNumber();
    //     const public2D = public2Limit - public2Remains > public2Limit ? public2Limit : public2Limit - public2Remains;
    //     this.public2Bar.style({ width: `${public2D / public2Limit * 100}%` });

    //     const ticketLimit = 230;
    //     const ticketRemains = (await BiasMinterContract.ticketCount()).toNumber();
    //     const ticketD = ticketLimit - ticketRemains > ticketLimit ? ticketLimit : ticketLimit - ticketRemains;
    //     this.ticketBar.style({ width: `${ticketD / ticketLimit * 100}%` });
    // }

    public delete(): void {
        // Wallet.off("connect", this.connectHandler);
        clearInterval(this.interval);
        super.delete();
    }
}
