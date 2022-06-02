"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bmcs_json_1 = __importDefault(require("./bias-metadata/bmcs.json"));
const deepsea_json_1 = __importDefault(require("./bias-metadata/deepsea.json"));
const poison_json_1 = __importDefault(require("./bias-metadata/poison.json"));
const ruby_json_1 = __importDefault(require("./bias-metadata/ruby.json"));
const sapphire_json_1 = __importDefault(require("./bias-metadata/sapphire.json"));
const metadatas = {
    bmcs: bmcs_json_1.default,
    deepsea: deepsea_json_1.default,
    poison: poison_json_1.default,
    ruby: ruby_json_1.default,
    sapphire: sapphire_json_1.default,
};
class BiasMetadataLoader {
    load(type, id) {
        const ms = metadatas[type] === undefined ? [] : metadatas[type];
        const metadata = ms.find((m) => m.tokenId === id);
        if (metadata !== undefined) {
            const clone = Object.assign({}, metadata);
            clone.image = `https://storage.googleapis.com/dsc-bias/bias/${type}/bia-${id}.png`;
            return clone;
        }
    }
    findType(id, name) {
        const types = Object.keys(metadatas);
        for (const type of types) {
            const ms = metadatas[type] === undefined ? [] : metadatas[type];
            const metadata = ms.find((m) => m.tokenId === id && m.name === name);
            if (metadata !== undefined) {
                return type;
            }
        }
    }
}
exports.default = new BiasMetadataLoader();
//# sourceMappingURL=BiasMetadataLoader.js.map