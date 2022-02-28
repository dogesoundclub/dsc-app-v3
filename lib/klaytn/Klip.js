"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const qrcode_1 = __importDefault(require("qrcode"));
const KlipQRPopup_1 = __importDefault(require("../component/shared/KlipQRPopup"));
const Store_1 = __importDefault(require("../Store"));
const klipSDK = require("klip-sdk");
class Klip extends eventcontainer_1.default {
    constructor() {
        super(...arguments);
        this.store = new Store_1.default("klip-store");
    }
    get address() {
        return this.store.get("address");
    }
    set address(address) {
        this.store.set("address", address, true);
    }
    async request(res) {
        let qrPopup;
        klipSDK.request(res.request_key, async () => {
            const qr = await qrcode_1.default.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`);
            qrPopup = new KlipQRPopup_1.default(qr);
        });
        return new Promise((resolve) => {
            const interval = setInterval(async () => {
                const result = await klipSDK.getResult(res.request_key);
                if (result.result !== undefined) {
                    qrPopup?.delete();
                    clearInterval(interval);
                    setTimeout(() => resolve(result.result), 2000);
                }
            }, 1000);
        });
    }
    get connected() {
        return this.address !== undefined;
    }
    async connect() {
        const res = await klipSDK.prepare.auth({ bappName: Klip.BAPP_NAME });
        this.address = (await this.request(res)).klaytn_address;
        this.fireEvent("connect");
    }
    async runContractMethod(address, abi, _params, value) {
        const params = [];
        for (const param of _params) {
            if (Array.isArray(param) === true) {
                const ps = [];
                for (const p of param) {
                    if (p instanceof bignumber_1.BigNumber) {
                        ps.push(p.toString());
                    }
                    else {
                        ps.push(p);
                    }
                }
                params.push(ps);
            }
            else if (param instanceof bignumber_1.BigNumber) {
                params.push(param.toString());
            }
            else {
                params.push(param);
            }
        }
        const res = await klipSDK.prepare.executeContract({
            bappName: Klip.BAPP_NAME,
            to: address,
            abi: JSON.stringify(abi),
            params: JSON.stringify(params),
            value: (value === undefined ? 0 : value).toString(),
        });
        await this.request(res);
    }
    async disconnect() {
        this.address = undefined;
        location.reload();
    }
}
Klip.BAPP_NAME = "Klubs";
exports.default = new Klip();
//# sourceMappingURL=Klip.js.map