"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BiasCardsContract_1 = __importDefault(require("../../../../contracts/BiasCardsContract"));
const BiasContract_1 = __importDefault(require("../../../../contracts/BiasContract"));
const MateContract_1 = __importDefault(require("../../../../contracts/MateContract"));
const Wallet_1 = __importDefault(require("../../../../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("../../../ViewUtil"));
const CardItem_1 = __importDefault(require("../../component/synthesis/CardItem"));
const MateItem_1 = __importDefault(require("../../component/synthesis/MateItem"));
const Layout_1 = __importDefault(require("../Layout"));
class Preparation {
    constructor() {
        Layout_1.default.current.title = "메이트 선택";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".synthesis-preparation-view", (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "합성가능 메이트"), this.mateList = (0, skynode_1.el)(".mate-container"), (0, skynode_1.el)("hr"), (0, skynode_1.el)("h2", "보유한 카드"), this.cardList = (0, skynode_1.el)(".card-container"), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", "합성하기", {
            click: () => {
                if (this.selectedMateItem !== undefined && this.selectedCardItem !== undefined) {
                    ViewUtil_1.default.go(`/bmcs/selected-mate/${this.selectedMateItem.id}/${this.selectedCardItem.id}`);
                }
            },
        })))));
        this.load();
    }
    async load() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const balance = (await MateContract_1.default.balanceOf(walletAddress)).toNumber();
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const mateId = await MateContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    const exists = await BiasContract_1.default.exists(mateId.toNumber() + 10000);
                    if (exists !== true) {
                        const mateItem = new MateItem_1.default(mateId.toNumber()).appendTo(this.mateList);
                        mateItem.on("selected", () => {
                            this.selectedMateItem?.deselect();
                            this.selectedMateItem = mateItem;
                        });
                        mateItem.on("deselected", () => {
                            if (this.selectedMateItem === mateItem) {
                                this.selectedMateItem = undefined;
                            }
                        });
                    }
                };
                promises.push(promise(i));
            }
            for (let i = 0; i < 4; i += 1) {
                const promise = async (id) => {
                    const balance = await BiasCardsContract_1.default.balanceOf(walletAddress, id);
                    if (balance.gt(0)) {
                        const cardItem = new CardItem_1.default(id).appendTo(this.cardList);
                        cardItem.on("selected", () => {
                            this.selectedCardItem?.deselect();
                            this.selectedCardItem = cardItem;
                        });
                        cardItem.on("deselected", () => {
                            if (this.selectedCardItem === cardItem) {
                                this.selectedCardItem = undefined;
                            }
                        });
                    }
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
        }
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Preparation;
//# sourceMappingURL=Preparation.js.map