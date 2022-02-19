"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const AttributesContract_1 = __importDefault(require("../contracts/AttributesContract"));
const ImageContract_1 = __importDefault(require("../contracts/ImageContract"));
const Layout_1 = __importDefault(require("./Layout"));
class FullyOn {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("FULLY_ON_CHAIN_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".fully-on-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("FULLY_ON_CHAIN_TITLE"))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", (0, msg_js_1.default)("FULLY_ON_CHAIN_TITLE1")), (0, skynode_1.el)("p", (0, msg_js_1.default)("FULLY_ON_CHAIN_DESC1"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("h2", (0, msg_js_1.default)("FULLY_ON_CHAIN_TITLE2")), (0, skynode_1.el)("p", (0, msg_js_1.default)("FULLY_ON_CHAIN_DESC2")), (0, skynode_1.el)(".form", this.idInput = (0, skynode_1.el)("input", { placeholder: "검색" }), (0, skynode_1.el)("button", "보기", {
            click: () => {
                this.load(parseInt(this.idInput.domElement.value, 10));
            },
        })), (0, skynode_1.el)(".mate-container", this.image = (0, skynode_1.el)("img"), this.attributeDisplay = (0, skynode_1.el)("p", "Level 5, Frightened Mouth, Tiger, Silver Chain, Green hair in Purple Cap, Red Cross Earring, Cigarette"))))));
        this.load(0);
    }
    async load(id) {
        const image = await ImageContract_1.default.image(id);
        this.image.domElement.src = image;
        const attributes = {};
        const promises = [];
        promises.push((async () => {
            attributes.level = `Level ${await AttributesContract_1.default.level(id)}`;
        })());
        promises.push((async () => {
            attributes.face = await AttributesContract_1.default.face(id);
        })());
        promises.push((async () => {
            attributes.faceDetailA = await AttributesContract_1.default.faceDetailA(id);
        })());
        promises.push((async () => {
            attributes.faceDetailB = await AttributesContract_1.default.faceDetailB(id);
        })());
        promises.push((async () => {
            attributes.neck = await AttributesContract_1.default.neck(id);
        })());
        promises.push((async () => {
            attributes.mouth = await AttributesContract_1.default.mouth(id);
        })());
        promises.push((async () => {
            attributes.eyes = await AttributesContract_1.default.eyes(id);
        })());
        promises.push((async () => {
            attributes.forehead = await AttributesContract_1.default.forehead(id);
        })());
        promises.push((async () => {
            attributes.headwear = await AttributesContract_1.default.headwear(id);
        })());
        promises.push((async () => {
            attributes.headwearDetail = await AttributesContract_1.default.headwearDetail(id);
        })());
        promises.push((async () => {
            attributes.ears = await AttributesContract_1.default.ears(id);
        })());
        promises.push((async () => {
            attributes.items = await AttributesContract_1.default.items(id);
        })());
        await Promise.all(promises);
        this.attributeDisplay.empty().appendText(Object.values(attributes).filter((v) => v !== "").join(", "));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = FullyOn;
//# sourceMappingURL=FullyOn.js.map