import { DomNode, el, Popup } from "@hanul/skynode";
import BiasMinterV2Contract from "../../../contracts/BiasMinterV2Contract";
import Wallet from "../../../klaytn/Wallet";

export default class MintingPopup extends Popup {

    public content: DomNode;
    private interval: any;

    private walletAddress: DomNode;

    private saleBar: DomNode;

    private amountDisplay: DomNode;
    private WLprice: DomNode;
    private price: DomNode;
    private amountInput: DomNode<HTMLInputElement>;

    private notOnSale: DomNode;
    private onSale: DomNode;

    private wlPanel: DomNode;
    private publicPanel: DomNode;
    private wlCaption: DomNode;

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
                        el("p", "8068"),
                    ),
                    this.amountDisplay = el(".amount", "AMOUNT ...")
                ),
                el("hr"),
                el("section",
                    el(".status-container",
                        this.notOnSale = el("p.not", "Not on Sale"),
                        this.onSale = el("p", "On Sale"),
                    ),
                    el(".price-container",
                        this.wlPanel = el(".content.disable",
                            el(".title", "WL Price"),
                            el(".klay-container",
                                el("img", { src: "/images/shared/icn/icn_klay.svg", alt: "Klaytn" }),
                                this.WLprice = el("p", "..."),
                                el("p", "Klay"),
                            ),
                            el("p", "Per Transaction : Unlimited")
                        ),
                        el("hr"),
                        this.publicPanel = el(".content.disable",
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
                        this.wlCaption = el("p.caption", "..."),
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
                                await BiasMinterV2Contract.mint(this.amountInput.domElement.valueAsNumber);
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
        const step = (await BiasMinterV2Contract.step()).toNumber();
        if (step === 0) {
            this.notOnSale.style({ color: "#FFDF13" });
            this.onSale.style({ color: "#999999" });
        } else {
            this.notOnSale.style({ color: "#999999" });
            this.onSale.style({ color: "#FFDF13" });
        }
        this.amountInput.domElement.max = "1";
        this.price.empty().appendText("185");
        this.WLprice.empty().appendText("165");
    }

    private addMintAmount() {
        this.amountInput.domElement.valueAsNumber += 1;
    }

    private subMintAmount() {
        if (this.amountInput.domElement.valueAsNumber === 0) {
            this.amountInput.domElement.valueAsNumber -= 0;
        } else {
            this.amountInput.domElement.valueAsNumber -= 1;
        }
    }

    private connectHandler() {
        this.loadAddress();
    }

    private async loadAddress() {
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText("Wallet Address : " + address);

            if (await BiasMinterV2Contract.discountList(address) === true) {
                this.wlPanel.deleteClass("disable");
                this.publicPanel.addClass("disable");
                this.wlCaption.empty().appendText("You are whitelisted");
            } else {
                this.wlPanel.addClass("disable");
                this.publicPanel.deleteClass("disable");
                this.wlCaption.empty().appendText("You are not whitelisted");
            }
        }
    }

    private async progress() {
        this.loadStatus();
        this.loadAddress();

        const currentId = (await BiasMinterV2Contract.currentId()).toNumber();
        this.amountDisplay.empty().appendText("AMOUNT " + String(currentId - 1932));

        const limit = 8068;
        const remains = (await BiasMinterV2Contract.amount()).toNumber();
        const d = limit - remains > limit ? limit : limit - remains;
        this.saleBar.style({ width: `${d / limit * 100}%` });
    }

    public delete(): void {
        Wallet.off("connect", this.connectHandler);
        clearInterval(this.interval);
        super.delete();
    }
}
