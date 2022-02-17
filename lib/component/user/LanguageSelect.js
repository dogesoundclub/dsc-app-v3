"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BrowserInfo_1 = __importDefault(require("../../BrowserInfo"));
class LanguageSelect extends skynode_1.DomNode {
    constructor() {
        super(".language-select");
        this.appendText("LANG : ");
        const select = (0, skynode_1.el)("select", (0, skynode_1.el)("option", "한국어", { value: "ko" }), (0, skynode_1.el)("option", "English", { value: "en" }), {
            change: () => {
                BrowserInfo_1.default.changeLanguage(select.domElement.value);
            },
        }).appendTo(this);
        select.domElement.value = BrowserInfo_1.default.language.substring(0, 2);
        this.onDom("click", (event) => event.stopPropagation());
    }
}
exports.default = LanguageSelect;
//# sourceMappingURL=LanguageSelect.js.map