"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BiasMinterV2Contract_1 = __importDefault(require("../../../contracts/BiasMinterV2Contract"));
const Wallet_1 = __importDefault(require("../../../klaytn/Wallet"));
class MintingPopup extends skynode_1.Popup {
    constructor() {
        super(".popup-background");
        this.append(this.content = (0, skynode_1.el)(".dialogue.bmcs-minting-popup", (0, skynode_1.el)("section", (0, skynode_1.el)("header", (0, skynode_1.el)("h3", "Sale Progress"), (0, skynode_1.el)("a", { click: () => { this.delete(); } }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_close.svg" }))), (0, skynode_1.el)(".progress-container", this.amount = (0, skynode_1.el)("p", "0"), (0, skynode_1.el)("section", (0, skynode_1.el)(".progress", this.saleBar = (0, skynode_1.el)(".bar"))), (0, skynode_1.el)("p", "10000")), this.amountDisplay = (0, skynode_1.el)(".amount", "AMOUNT ...")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section", (0, skynode_1.el)(".status-container", this.notOnSale = (0, skynode_1.el)("p.not", "Not on Sale"), this.onSale = (0, skynode_1.el)("p", "On Sale")), (0, skynode_1.el)(".price-container", this.wlPanel = (0, skynode_1.el)(".content.disable", (0, skynode_1.el)(".title", "WL Price"), (0, skynode_1.el)(".klay-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_klay.svg", alt: "Klaytn" }), this.WLprice = (0, skynode_1.el)("p", "..."), (0, skynode_1.el)("p", "Klay")), (0, skynode_1.el)("p", "Per Transaction : Unlimited")), (0, skynode_1.el)("hr"), this.publicPanel = (0, skynode_1.el)(".content.disable", (0, skynode_1.el)(".title", "None WL Price"), (0, skynode_1.el)(".klay-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_klay.svg", alt: "Klaytn" }), this.price = (0, skynode_1.el)("p", "..."), (0, skynode_1.el)("p", "Klay")), (0, skynode_1.el)("p", "Per Transaction : Unlimited"))), (0, skynode_1.el)(".amount-container", this.wlCaption = (0, skynode_1.el)("p.caption", "..."), (0, skynode_1.el)(".title", "Amount"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("button", "-", {
            click: () => {
                this.subMintAmount();
            }
        }), this.amountInput = (0, skynode_1.el)("input", { type: "number", value: "1", readonly: "" }), (0, skynode_1.el)("button", "+", {
            click: () => {
                this.addMintAmount();
            }
        }))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", "MINT", {
            click: async () => {
                await BiasMinterV2Contract_1.default.mint(this.amountInput.domElement.valueAsNumber);
            },
        })), this.walletAddress = (0, skynode_1.el)(".address", "Wallet Address : "))));
        this.loadStatus();
        Wallet_1.default.on("connect", this.connectHandler);
        this.interval = setInterval(() => this.progress(), 1000);
        this.progress();
    }
    async loadStatus() {
        const step = (await BiasMinterV2Contract_1.default.step()).toNumber();
        if (step === 0) {
            this.notOnSale.style({ color: "#FFDF13" });
            this.onSale.style({ color: "#999999" });
        }
        else {
            this.notOnSale.style({ color: "#999999" });
            this.onSale.style({ color: "#FFDF13" });
        }
        this.amountInput.domElement.max = "1";
        this.price.empty().appendText("185");
        this.WLprice.empty().appendText("165");
    }
    addMintAmount() {
        this.amountInput.domElement.valueAsNumber += 1;
    }
    subMintAmount() {
        if (this.amountInput.domElement.valueAsNumber === 0) {
            this.amountInput.domElement.valueAsNumber -= 0;
        }
        else {
            this.amountInput.domElement.valueAsNumber -= 1;
        }
    }
    connectHandler() {
        this.loadAddress();
    }
    async loadAddress() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText("Wallet Address : " + address);
            if (await BiasMinterV2Contract_1.default.discountList(address) === true) {
                this.wlPanel.deleteClass("disable");
                this.publicPanel.addClass("disable");
                this.wlCaption.empty().appendText("You are whitelisted");
            }
            else {
                this.wlPanel.addClass("disable");
                this.publicPanel.deleteClass("disable");
                this.wlCaption.empty().appendText("You are not whitelisted");
            }
        }
    }
    async progress() {
        this.loadStatus();
        this.loadAddress();
        const currentId = (await BiasMinterV2Contract_1.default.currentId()).toNumber();
        this.amount.empty().appendText(String(currentId));
        this.amountDisplay.empty().appendText("AMOUNT " + String(currentId));
        const limit = 10000;
        const remains = (await BiasMinterV2Contract_1.default.amount()).toNumber();
        const d = limit - remains > limit ? limit : limit - remains;
        this.saleBar.style({ width: `${d / limit * 100}%` });
    }
    delete() {
        Wallet_1.default.off("connect", this.connectHandler);
        clearInterval(this.interval);
        super.delete();
    }
}
exports.default = MintingPopup;
//# sourceMappingURL=MintingPopup.js.map