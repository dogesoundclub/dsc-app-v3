import { DomNode, el } from "@hanul/skynode";
import BrowserInfo from "../../../BrowserInfo";

export default class LanguageSelect extends DomNode {

    constructor() {
        super(".language-select");
        this.appendText("LANG : ");
        const select = el<HTMLSelectElement>("select",
            el("option", "한국어", { value: "ko" }),
            el("option", "English", { value: "en" }),
            {
                change: () => {
                    BrowserInfo.changeLanguage(select.domElement.value);
                },
            },
        ).appendTo(this);
        select.domElement.value = BrowserInfo.language.substring(0, 2);
        this.onDom("click", (event) => event.stopPropagation());
    }
}
