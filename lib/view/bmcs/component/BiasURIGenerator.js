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
class BiasURIGenerator {
    generate(type, id) {
        const ms = metadatas[type] === undefined ? [] : metadatas[type];
        const metadata = ms.find((m) => m.tokenId === id);
        if (metadata !== undefined) {
            const clone = Object.assign({}, metadata);
            let data = fs.readFileSync(`./bias-images/${type}/bia-${id}.svg`, "utf8").toString();
            data = data.replace(/ fill-opacity:1.000; stroke:none;/g, "");
            data = data.replace(/ width=\"1\"/g, ' width="1.05"');
            data = data.replace(/ height=\"1\"/g, ' height="1.05"');
            const result = optimize(data, { multipass: true });
            const optimizedSvgString = result.data.replace('width="25" height="25"', 'preserveAspectRatio="xMinYMin meet" viewBox="0 0 24 24"');
            const image = Buffer.from(optimizedSvgString).toString("base64");
            clone.image = "data:image/svg+xml;base64," + image;
            const str = Buffer.from(JSON.stringify(clone)).toString("base64");
            return "data:application/json;base64," + str;
        }
    }
}
exports.default = new BiasURIGenerator();
//# sourceMappingURL=BiasURIGenerator.js.map