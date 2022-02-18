import Bowser from "bowser";
import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import Store from "./Store";

class BrowserInfo {

    private readonly bowser: Bowser.Parser.Parser = Bowser.getParser(window.navigator.userAgent);
    private store = new Store("__BROWSER_INFO_STORE");

    public get language() {
        let language = this.store.get<string | undefined>("lang");
        if (language === undefined) {
            language = navigator.language;
        }
        if (language.indexOf("-") !== -1 && language !== "zh-TC" && language !== "zh-SC") {
            language = language.substring(0, language.indexOf("-"));
        }
        return language;
    }

    public set language(language: string) {
        this.store.set("lang", language);
        msg.language = language;
    }

    public changeLanguage(language: string) {
        this.language = language;
        SkyRouter.refresh();
    }
}

export default new BrowserInfo();