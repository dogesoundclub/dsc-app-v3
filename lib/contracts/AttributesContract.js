"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class AttributesContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Attributes, require("./AttributesContractABI.json"));
    }
    async level(mateId) {
        return await this.runMethod("level", mateId);
    }
    async face(mateId) {
        return await this.runMethod("face", mateId);
    }
    async faceDetailA(mateId) {
        return await this.runMethod("faceDetailA", mateId);
    }
    async faceDetailB(mateId) {
        return await this.runMethod("faceDetailB", mateId);
    }
    async neck(mateId) {
        return await this.runMethod("neck", mateId);
    }
    async mouth(mateId) {
        return await this.runMethod("mouth", mateId);
    }
    async eyes(mateId) {
        return await this.runMethod("eyes", mateId);
    }
    async forehead(mateId) {
        return await this.runMethod("forehead", mateId);
    }
    async headwear(mateId) {
        return await this.runMethod("headwear", mateId);
    }
    async headwearDetail(mateId) {
        return await this.runMethod("headwearDetail", mateId);
    }
    async ears(mateId) {
        return await this.runMethod("ears", mateId);
    }
    async items(mateId) {
        return await this.runMethod("items", mateId);
    }
}
exports.default = new AttributesContract();
//# sourceMappingURL=AttributesContract.js.map