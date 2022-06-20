"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BiasContract_1 = __importDefault(require("../../../contracts/BiasContract"));
const CycleContract_1 = __importDefault(require("../../../contracts/CycleContract"));
const Klaytn_1 = __importDefault(require("../../../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../../../klaytn/Wallet"));
const CycleOfCraftCard_1 = __importDefault(require("../component/CycleOfCraftCard"));
const Layout_1 = __importDefault(require("./Layout"));
class CycleOfCraft {
    constructor() {
        this.totalClaimableCount = 0;
        Layout_1.default.current.title = "CycleOfCraft";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".cycle-of-craft-view", (0, skynode_1.el)("aside", (0, skynode_1.el)(".warning-container", (0, skynode_1.el)("p", "주의 : 바이어스를 전송 또는 판매할 경우, 클레임되지 않은 엔진들은 모두 분해됩니다.")), (0, skynode_1.el)("h1", "CYCLE OF CRAFT"), (0, skynode_1.el)(".claim-container", (0, skynode_1.el)(".title", "Accumulated Engines"), this.totalClaimableCountDisplay = (0, skynode_1.el)(".account", "... EA"), (0, skynode_1.el)("a", "모든 엔진 수령하기"))), (0, skynode_1.el)("article", (0, skynode_1.el)(".warning-container", (0, skynode_1.el)("p", "주의 : 바이어스를 전송 또는 판매할 경우, 클레임되지 않은 엔진들은 모두 분해됩니다.")), this.list = (0, skynode_1.el)(".card-list"))));
        this.load();
    }
    changeParams(params, uri) {
    }
    async load() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const currentBlock = await Klaytn_1.default.loadBlockNumber();
            const balance = (await BiasContract_1.default.balanceOf(walletAddress)).toNumber();
            this.totalClaimableCount = 0;
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const biasId = await BiasContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    const startBlocks = await CycleContract_1.default.startBlocks(biasId);
                    const level = await CycleContract_1.default.levels(biasId);
                    const claimableCount = await CycleContract_1.default.claimableCount(biasId);
                    this.totalClaimableCount += claimableCount.toNumber();
                    const uri = await BiasContract_1.default.tokenURI(biasId);
                    const json = await (await fetch(uri)).json();
                    new CycleOfCraftCard_1.default(biasId.toNumber(), json, currentBlock, startBlocks.toNumber(), level.toNumber(), claimableCount.toNumber()).appendTo(this.list);
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.totalClaimableCountDisplay.empty().appendText(`${this.totalClaimableCount} EA`);
        }
    }
    close() {
        this.container.delete();
    }
}
exports.default = CycleOfCraft;
//# sourceMappingURL=CycleOfCraft.js.map