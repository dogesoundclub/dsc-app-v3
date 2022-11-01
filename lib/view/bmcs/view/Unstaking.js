"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CommonUtil_1 = __importDefault(require("../../../CommonUtil"));
const BiasCompoundContract_1 = __importDefault(require("../../../contracts/BiasCompoundContract"));
const BiasContract_1 = __importDefault(require("../../../contracts/BiasContract"));
const Klaytn_1 = __importDefault(require("../../../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../../../klaytn/Wallet"));
const ViewUtil_1 = __importDefault(require("../../ViewUtil"));
const BMCSItem_1 = __importDefault(require("../component/synthesis/BMCSItem"));
const Layout_1 = __importDefault(require("./Layout"));
class Unstaking {
    constructor() {
        Layout_1.default.current.title = "BMCS 선택";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".synthesis-preparation-view", (0, skynode_1.el)("section", (0, skynode_1.el)("header", (0, skynode_1.el)(".title", (0, skynode_1.el)("h2", "언스테이킹 가능한 BMCS"), this.mateBalance = (0, skynode_1.el)("p")), (0, skynode_1.el)("a", {
            click: () => {
                ViewUtil_1.default.go("/bmcs");
            }
        }, (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_close.svg" }))), this.mateList = (0, skynode_1.el)(".mate-container"), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".detail", (0, skynode_1.el)("h2", "1 메이트 당 언스테이킹 가능 믹스 수량"), this.mixPrice = (0, skynode_1.el)(".price", "...")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", "언스테이킹", {
            click: async () => {
                if (this.selectedMateItem !== undefined) {
                    await BiasCompoundContract_1.default.withdrawMix(this.selectedMateItem.id);
                    ViewUtil_1.default.waitTransactionAndRefresh();
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
            const balance = (await BiasContract_1.default.balanceOf(walletAddress)).toNumber();
            let synthesizableBalance = balance;
            const currentBlock = await Klaytn_1.default.loadBlockNumber();
            const returnMixTime = (await BiasCompoundContract_1.default.returnMixTime()).toNumber();
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const bmcsId = await BiasContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    if (bmcsId.gte(10000)) {
                        const compoundBlocks = (await BiasCompoundContract_1.default.compoundBlocks(bmcsId.toNumber())).toNumber();
                        if (compoundBlocks != 0 && currentBlock - compoundBlocks >= returnMixTime) {
                            const mateItem = new BMCSItem_1.default(bmcsId.toNumber()).appendTo(this.mateList);
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
                        else {
                            console.log("else", i, synthesizableBalance);
                            synthesizableBalance--;
                        }
                    }
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            if (synthesizableBalance < 0) {
                synthesizableBalance = 0;
            }
            this.mateBalance.appendText(synthesizableBalance.toString());
            const mixPrice = await BiasCompoundContract_1.default.mixPrice();
            this.mixPrice.empty().appendText(CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(mixPrice)));
        }
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Unstaking;
//# sourceMappingURL=Unstaking.js.map