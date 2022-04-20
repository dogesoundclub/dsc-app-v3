"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Alert_1 = __importDefault(require("../view/shared/Alert"));
const BiasCompound_json_1 = __importDefault(require("./abi/bias/artifacts/contracts/BiasCompound.sol/BiasCompound.json"));
const BiasCardsContract_1 = __importDefault(require("./BiasCardsContract"));
const Contract_1 = __importDefault(require("./Contract"));
const MixContract_1 = __importDefault(require("./MixContract"));
class BiasContractContract extends Contract_1.default {
    constructor() {
        super("0xEe002D60f61097fcf02886EE9103962AadBAeEA8", BiasCompound_json_1.default.abi);
    }
    async mixPrice() {
        return ethers_1.BigNumber.from(await this.runMethod("mixPrice"));
    }
    async compound(biasId, cardId, uri, signature) {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if ((await BiasCardsContract_1.default.balanceOf(owner, cardId)).eq(0)) {
                new Alert_1.default("오류", "합성에 필요한 카드가 부족합니다.");
                return false;
            }
            const mixPrice = await this.mixPrice();
            if ((await MixContract_1.default.balanceOf(owner)).lt(mixPrice)) {
                new Alert_1.default("오류", "합성 시 스테이킹에 필요한 MIX가 부족합니다.");
                return false;
            }
            if (await BiasCardsContract_1.default.isApprovedForAll(owner, this.address) !== true) {
                await BiasCardsContract_1.default.setApprovalForAll(this.address, true);
                setTimeout(async () => {
                    if ((await MixContract_1.default.allowance(owner, this.address)).lt(mixPrice)) {
                        await MixContract_1.default.approve(this.address, ethers_1.constants.MaxUint256);
                        setTimeout(async () => {
                            await this.runWalletMethodWithLargeGas("compound", biasId, cardId, uri, signature);
                        }, 2000);
                    }
                }, 2000);
            }
            else {
                if ((await MixContract_1.default.allowance(owner, this.address)).lt(mixPrice)) {
                    await MixContract_1.default.approve(this.address, ethers_1.constants.MaxUint256);
                    setTimeout(async () => {
                        await this.runWalletMethodWithLargeGas("compound", biasId, cardId, uri, signature);
                    }, 2000);
                }
                else {
                    await this.runWalletMethodWithLargeGas("compound", biasId, cardId, uri, signature);
                }
            }
        }
        return true;
    }
}
exports.default = new BiasContractContract();
//# sourceMappingURL=BiasCompoundContract.js.map