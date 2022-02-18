"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bowser_1 = __importDefault(require("bowser"));
const msg_js_1 = __importDefault(require("msg.js"));
const skyrouter_1 = require("skyrouter");
const Store_1 = __importDefault(require("./Store"));
class BrowserInfo {
    constructor() {
        this.bowser = bowser_1.default.getParser(window.navigator.userAgent);
        this.store = new Store_1.default("__BROWSER_INFO_STORE");
    }
    get language() {
        let language = this.store.get("lang");
        if (language === undefined) {
            language = navigator.language;
        }
        if (language.indexOf("-") !== -1 && language !== "zh-TC" && language !== "zh-SC") {
            language = language.substring(0, language.indexOf("-"));
        }
        return language;
    }
    set language(language) {
        this.store.set("lang", language);
        msg_js_1.default.language = language;
    }
    changeLanguage(language) {
        this.language = language;
        skyrouter_1.SkyRouter.refresh();
    }
}
exports.default = new BrowserInfo();
//# sourceMappingURL=BrowserInfo.js.map