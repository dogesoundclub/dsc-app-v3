"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const Klaytn_1 = __importDefault(require("../klaytn/Klaytn"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const BiasMinter_json_1 = __importDefault(require("./abi/bias/artifacts/contracts/BiasMinter.sol/BiasMinter.json"));
const Contract_1 = __importDefault(require("./Contract"));
class BiasMinterContract extends Contract_1.default {
    constructor() {
        super("0x320d5525059E0916F310e87619C5dc91081B49f9", BiasMinter_json_1.default.abi);
    }
    async step() {
        return ethers_1.BigNumber.from(await this.runMethod("step"));
    }
    async presalePrice() {
        return ethers_1.BigNumber.from(await this.runMethod("presalePrice"));
    }
    async public1Price() {
        return ethers_1.BigNumber.from(await this.runMethod("public1Price"));
    }
    async public2Price() {
        return ethers_1.BigNumber.from(await this.runMethod("public2Price"));
    }
    async ticketPrice() {
        return ethers_1.BigNumber.from(await this.runMethod("ticketPrice"));
    }
    async calculatedPrice() {
        const step = (await this.step()).toNumber();
        if (step <= 1) {
            return await this.presalePrice();
        }
        else if (step === 2) {
            return await this.public1Price();
        }
        else if (step === 3) {
            return await this.public2Price();
        }
        else if (step === 4) {
            return await this.ticketPrice();
        }
        else {
            return ethers_1.BigNumber.from(0);
        }
    }
    async currentId() {
        return ethers_1.BigNumber.from(await this.runMethod("currentId"));
    }
    async presaleCount() {
        return ethers_1.BigNumber.from(await this.runMethod("presaleCount"));
    }
    async public1Count() {
        return ethers_1.BigNumber.from(await this.runMethod("public1Count"));
    }
    async public2Count() {
        return ethers_1.BigNumber.from(await this.runMethod("public2Count"));
    }
    async ticketCount() {
        return ethers_1.BigNumber.from(await this.runMethod("ticketCount"));
    }
    async presaleWhitelist(user) {
        return await this.runMethod("presaleWhitelist", user);
    }
    async ticketWhitelist(user) {
        return await this.runMethod("ticketWhitelist", user);
    }
    async mint(count) {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            new Alert_1.default("현재 민팅 진행중이 아닙니다. 민팅은 3월 17일 밤 8시부터 시작됩니다.");
        }
        else {
            const address = await Wallet_1.default.loadAddress();
            if (address !== undefined) {
                let price;
                let amount;
                if (step === 1) {
                    price = (await this.presalePrice()).mul(count);
                    amount = await this.presaleCount();
                }
                else if (step === 2) {
                    price = (await this.public1Price()).mul(count);
                    amount = await this.public1Count();
                }
                else if (step === 3) {
                    price = (await this.public2Price()).mul(count);
                    amount = await this.public2Count();
                }
                else if (step === 4) {
                    price = (await this.ticketPrice()).mul(count);
                    amount = await this.ticketCount();
                }
                if (amount.lt(count)) {
                    new Alert_1.default(`현재 Round에서 남은 개수는 ${amount}개입니다.`);
                }
                else if (step === 1 &&
                    await this.presaleWhitelist(address) !== true) {
                    new Alert_1.default("화이트리스트 대상이 아닙니다.");
                }
                else if (step === 4 &&
                    await this.ticketWhitelist(address) !== true) {
                    new Alert_1.default("화이트리스트 대상이 아닙니다.");
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
exports.default = new BiasMinterContract();
//# sourceMappingURL=BiasMinterContract.js.map