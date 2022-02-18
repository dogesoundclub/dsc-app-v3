"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
class ExtWallet extends eventcontainer_1.default {
    constructor() {
        super();
        this.klaytn = window.klaytn;
        this.caver = window.caver;
        this.checkConnected();
    }
    get installed() {
        return this.klaytn !== undefined && this.caver !== undefined;
    }
    async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }
    async loadAddress() {
        return this.caver === undefined ? undefined : (await this.caver.klay.getAccounts())[0];
    }
    async loadChainId() {
        return this.caver === undefined ? -1 : await this.caver.klay.getChainId();
    }
    async loadBlockNumber() {
        return this.caver === undefined ? -1 : await this.caver.klay.getBlockNumber();
    }
    async balanceOf(address) {
        return this.caver === undefined ? undefined : bignumber_1.BigNumber.from(await this.caver.klay.getBalance(address));
    }
    async loadBalance() {
        const address = await this.loadAddress();
        return address === undefined ? bignumber_1.BigNumber.from(0) : await this.balanceOf(address);
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        await this.klaytn?.enable();
        this.checkConnected();
    }
    createContract(address, abi) {
        return this.caver === undefined ? undefined : new this.caver.klay.Contract(abi, address);
    }
    addToken(address, symbol, decimals, image) {
        this.klaytn?.sendAsync({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: { address, symbol, decimals, image },
            },
            id: Math.round(Math.random() * 100000),
        });
    }
    async signMessage(message) {
        const address = await this.loadAddress();
        return address === undefined ? undefined : this.caver?.klay.sign(message, address);
    }
}
exports.default = new ExtWallet();
//# sourceMappingURL=ExtWallet.js.map