"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
class EthereumNetworkProvider extends eventcontainer_1.default {
    constructor() {
        super();
        this.provider = new ethers_1.ethers.providers.WebSocketProvider("wss://mainnet.infura.io/ws/v3/79f21bf16c274c27ac12b933724380a3");
        this.signer = this.provider.getSigner(ethers_1.ethers.constants.AddressZero);
    }
    async getBlockNumber() {
        return await this.provider.getBlockNumber();
    }
    async getBalance(address) {
        return await this.provider.getBalance(address);
    }
}
exports.default = new EthereumNetworkProvider();
//# sourceMappingURL=EthereumNetworkProvider.js.map