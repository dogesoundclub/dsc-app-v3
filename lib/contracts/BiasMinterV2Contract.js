"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Alert_1 = __importDefault(require("../view/shared/Alert"));
const BiasMinterV2_json_1 = __importDefault(require("./abi/bias/artifacts/contracts/BiasMinterV2.sol/BiasMinterV2.json"));
const Contract_1 = __importDefault(require("./Contract"));
class BiasMinterV2Contract extends Contract_1.default {
    constructor() {
        super("0x402843d978202915b75dBF142De9821a4eaF43A9", BiasMinterV2_json_1.default.abi);
    }
    async step() {
        return ethers_1.BigNumber.from(await this.runMethod("step"));
    }
    async discountPrice() {
        return ethers_1.BigNumber.from(await this.runMethod("discountPrice"));
    }
    async price() {
        return ethers_1.BigNumber.from(await this.runMethod("price"));
    }
    async currentId() {
        return ethers_1.BigNumber.from(await this.runMethod("currentId"));
    }
    async amount() {
        return ethers_1.BigNumber.from(await this.runMethod("amount"));
    }
    async discountList(user) {
        return await this.runMethod("discountList", user);
    }
    async mint(count) {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            new Alert_1.default("현재 민팅 진행중이 아닙니다. 민팅은 3월 21일 밤 8시부터 시작됩니다.");
        }
        else {
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                let price;
                let amount = await this.amount();
                if (await this.discountList(address) === true) {
                    price = (await this.discountPrice()).mul(count);
                }
                else {
                    price = (await this.price()).mul(count);
                }
                if (amount.lt(count)) {
                    new Alert_1.default(`현재 Round에서 남은 개수는 ${amount}개입니다.`);
                }
                else {
                    const balance = await Klaytn_1.default.balanceOf(address);
                    if (balance === undefined || balance.lt(price)) {
                        new Alert_1.default("Klay가 부족합니다.");
                    }
                    else {
                        await this.runWalletMethodWithValue(price, "mint", count);
                        new Alert_1.default("축하합니다! 민팅에 성공하셨습니다!");
                    }
                }
            }
        }
    }
}
exports.default = new BiasMinterV2Contract();
//# sourceMappingURL=BiasMinterV2Contract.js.map