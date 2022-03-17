import { DomNode, Popup } from "@hanul/skynode";
export default class MintingPopup extends Popup {
    content: DomNode;
    private interval;
    private notSaleStatus;
    private presaleStatus;
    private public1Status;
    private public2Status;
    private ticketStatus;
    private walletAddress;
    private presaleBar;
    private public1Bar;
    private public2Bar;
    private ticketBar;
    private amountDisplay;
    private price;
    private limitPerTransaction;
    private amountInput;
    private step;
    constructor();
    private loadStatus;
    private addMintAmount;
    private subMintAmount;
    private connectHandler;
    private loadAddress;
    private progress;
    delete(): void;
}
//# sourceMappingURL=MintingPopup.d.ts.map