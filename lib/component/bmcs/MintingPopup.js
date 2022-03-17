"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BiasMinterContract_1 = __importDefault(require("../../contracts/BiasMinterContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
class MintingPopup extends skynode_1.Popup {
    constructor() {
        super(".popup-background");
        this.step = 0;
        this.append(this.content = (0, skynode_1.el)(".dialogue.bmcs-minting-popup", (0, skynode_1.el)("section", (0, skynode_1.el)("header", (0, skynode_1.el)("h3", "NFT Remaining Quantity"), (0, skynode_1.el)("a", { click: () => { this.delete(); } }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_close.svg" }))), (0, skynode_1.el)(".progress-info", (0, skynode_1.el)(".progress-text", "Pre Sale"), (0, skynode_1.el)(".progress-text", "1st Public"), (0, skynode_1.el)(".progress-text", "2st Public"), (0, skynode_1.el)(".progress-text", "확정권 Sale")), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)("", "0"), (0, skynode_1.el)("section", (0, skynode_1.el)(".progress.presale", this.presaleBar = (0, skynode_1.el)(".bar")), (0, skynode_1.el)(".progress.public1", this.public1Bar = (0, skynode_1.el)(".bar")), (0, skynode_1.el)(".progress.public2", this.public2Bar = (0, skynode_1.el)(".bar")), (0, skynode_1.el)(".progress.ticket", this.ticketBar = (0, skynode_1.el)(".bar"))), (0, skynode_1.el)("", "9400")), this.amountDisplay = (0, skynode_1.el)(".amount", "AMOUNT ...")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section", (0, skynode_1.el)(".status-container", this.notSaleStatus = (0, skynode_1.el)("p.not-sale", "Not Yet on Sale"), this.presaleStatus = (0, skynode_1.el)("p.pre-sale", "Pre Sale"), this.public1Status = (0, skynode_1.el)("p.first-sale", "1st Public Sale"), this.public2Status = (0, skynode_1.el)("p.second-sale", "2nd Public Sale"), this.ticketStatus = (0, skynode_1.el)("p.ticket-sale", "확정권 Sale")), (0, skynode_1.el)(".price-container", (0, skynode_1.el)(".title", "Price"), (0, skynode_1.el)(".klay-container", (0, skynode_1.el)("img"), this.price = (0, skynode_1.el)("p", "..."), (0, skynode_1.el)("p", "Klay")), this.limitPerTransaction = (0, skynode_1.el)("p", "Per Transaction : ...개")), (0, skynode_1.el)(".amount-container", (0, skynode_1.el)(".title", "Amount"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("button", "-", {
            click: () => {
                this.subMintAmount();
            }
        }), this.amountInput = (0, skynode_1.el)("input", { type: "number", value: "1", readonly: "" }), (0, skynode_1.el)("button", "+", {
            click: () => {
                this.addMintAmount();
            }
        }))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", "MINT", {
            click: async () => {
                await BiasMinterContract_1.default.mint(this.amountInput.domElement.valueAsNumber);
            },
        })), this.walletAddress = (0, skynode_1.el)(".address", "Wallet Address : "))));
        this.loadStatus();
        Wallet_1.default.on("connect", this.connectHandler);
        this.interval = setInterval(() => this.progress(), 1000);
        this.progress();
    }
    async loadStatus() {
        this.step = (await BiasMinterContract_1.default.step()).toNumber();
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
        }
        else if (this.step === 1) {
            this.amountInput.domElement.max = "5";
            this.limitPerTransaction.empty().appendText("Per Transaction : 5개");
            this.price.empty().appendText("330");
            this.presaleStatus.style({ color: "#FFDF13" });
        }
        else if (this.step === 2) {
            this.amountInput.domElement.max = "10";
            this.limitPerTransaction.empty().appendText("Per Transaction : 10개");
            this.price.empty().appendText("350");
            this.public1Status.style({ color: "#FFDF13" });
        }
        else if (this.step === 3) {
            this.amountInput.domElement.max = "10";
            this.limitPerTransaction.empty().appendText("Per Transaction : 10개");
            this.price.empty().appendText("380");
            this.public2Status.style({ color: "#FFDF13" });
        }
        else if (this.step === 4) {
            this.amountInput.domElement.max = "1";
            this.limitPerTransaction.empty().appendText("Per Transaction : 1개");
            this.price.empty().appendText("330");
            this.ticketStatus.style({ color: "#FFDF13" });
        }
    }
    addMintAmount() {
        if (this.step <= 1) {
            if (this.amountInput.domElement.value >= "5") {
                this.amountInput.domElement.valueAsNumber += 0;
            }
            else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber += 2;
            }
            else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber += 2;
            }
            else {
                this.amountInput.domElement.valueAsNumber += 1;
            }
        }
        else if (this.step <= 3) {
            if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber += 2;
            }
            else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber += 2;
            }
            else if (this.amountInput.domElement.value === "5") {
                this.amountInput.domElement.valueAsNumber += 5;
            }
            else if (this.amountInput.domElement.value >= "10") {
                this.amountInput.domElement.valueAsNumber += 0;
            }
            else {
                this.amountInput.domElement.valueAsNumber += 1;
            }
        }
        else if (this.step === 4) {
            this.amountInput.domElement.valueAsNumber = 1;
        }
    }
    subMintAmount() {
        if (this.step <= 1) {
            if (this.amountInput.domElement.value <= "1") {
                this.amountInput.domElement.valueAsNumber -= 0;
            }
            else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber -= 1;
            }
            else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber -= 2;
            }
            else if (this.amountInput.domElement.value === "5") {
                this.amountInput.domElement.valueAsNumber -= 2;
            }
        }
        else if (this.step <= 3) {
            if (this.amountInput.domElement.value <= "1") {
                this.amountInput.domElement.valueAsNumber -= 0;
            }
            else if (this.amountInput.domElement.value === "1") {
                this.amountInput.domElement.valueAsNumber -= 1;
            }
            else if (this.amountInput.domElement.value === "3") {
                this.amountInput.domElement.valueAsNumber -= 2;
            }
            else if (this.amountInput.domElement.value === "5") {
                this.amountInput.domElement.valueAsNumber -= 2;
            }
            else if (this.amountInput.domElement.value === "10") {
                this.amountInput.domElement.valueAsNumber -= 5;
            }
            else {
                this.amountInput.domElement.valueAsNumber -= 1;
            }
        }
        else if (this.step === 4) {
            this.amountInput.domElement.valueAsNumber = 1;
        }
    }
    connectHandler() {
        this.loadAddress();
    }
    async loadAddress() {
        const address = await Wallet_1.default.loadAddress();
        if (address !== undefined) {
            this.walletAddress.empty().appendText("Wallet Address : " + address);
        }
    }
    async progress() {
        this.loadStatus();
        this.loadAddress();
        const currentId = (await BiasMinterContract_1.default.currentId()).toNumber();
        this.amountDisplay.empty().appendText("AMOUNT " + String(currentId - 600));
        const presaleLimit = 4000;
        const presaleRemains = (await BiasMinterContract_1.default.presaleCount()).toNumber();
        const presaleD = presaleLimit - presaleRemains > presaleLimit ? presaleLimit : presaleLimit - presaleRemains;
        this.presaleBar.style({ width: `${presaleD / presaleLimit * 100}%` });
        const public1Limit = 2570;
        const public1Remains = (await BiasMinterContract_1.default.public1Count()).toNumber();
        const public1D = public1Limit - public1Remains > public1Limit ? public1Limit : public1Limit - public1Remains;
        this.public1Bar.style({ width: `${public1D / public1Limit * 100}%` });
        const public2Limit = 2600;
        const public2Remains = (await BiasMinterContract_1.default.public2Count()).toNumber();
        const public2D = public2Limit - public2Remains > public2Limit ? public2Limit : public2Limit - public2Remains;
        this.public2Bar.style({ width: `${public2D / public2Limit * 100}%` });
        const ticketLimit = 230;
        const ticketRemains = (await BiasMinterContract_1.default.ticketCount()).toNumber();
        const ticketD = ticketLimit - ticketRemains > ticketLimit ? ticketLimit : ticketLimit - ticketRemains;
        this.ticketBar.style({ width: `${ticketD / ticketLimit * 100}%` });
    }
    delete() {
        Wallet_1.default.off("connect", this.connectHandler);
        clearInterval(this.interval);
        super.delete();
    }
}
exports.default = MintingPopup;
//# sourceMappingURL=MintingPopup.js.map