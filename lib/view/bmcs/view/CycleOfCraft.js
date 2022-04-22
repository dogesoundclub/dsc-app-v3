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
const Alert_1 = __importDefault(require("../../shared/Alert"));
const CycleOfCraftCard_1 = __importDefault(require("../component/CycleOfCraftCard"));
const Layout_1 = __importDefault(require("./Layout"));
class CycleOfCraft {
    constructor() {
        Layout_1.default.current.title = "CycleOfCraft";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".cycle-of-craft-view", (0, skynode_1.el)("aside", (0, skynode_1.el)("h1", "CYCLE OF CRAFT"), (0, skynode_1.el)(".claim-container", (0, skynode_1.el)(".title", "Accumulated Engines"), this.totalClaimableCount = (0, skynode_1.el)(".account", "... EA"), (0, skynode_1.el)("a", "모든 엔진 수령하기", {
            click: () => {
                new Alert_1.default("엔진 받기가 아직 활성화되지 않았습니다.");
            },
        }))), this.list = (0, skynode_1.el)("article")));
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
            let totalClaimableCount = 0;
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const biasId = await BiasContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    const startBlocks = await CycleContract_1.default.startBlocks(biasId);
                    const level = await CycleContract_1.default.levels(biasId);
                    const claimableCount = await CycleContract_1.default.claimableCount(biasId);
                    totalClaimableCount += claimableCount.toNumber();
                    const uri = await BiasContract_1.default.tokenURI(biasId);
                    const json = await (await fetch(uri)).json();
                    new CycleOfCraftCard_1.default(biasId.toNumber(), json, currentBlock, startBlocks.toNumber(), level.toNumber(), claimableCount.toNumber()).appendTo(this.list);
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.totalClaimableCount.empty().appendText(`${totalClaimableCount} EA`);
        }
    }
    close() {
        this.container.delete();
    }
}
exports.default = CycleOfCraft;
//# sourceMappingURL=CycleOfCraft.js.map