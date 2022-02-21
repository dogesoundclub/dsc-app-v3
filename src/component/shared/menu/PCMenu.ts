import { DomNode } from "@hanul/skynode";
import ViewUtil from "../../../view/ViewUtil";
import menu from "./menu.json";
import MenuTreeBuilder from "./MenuTreeBuilder";

export default class PCMenu extends DomNode {

    constructor() {
        super(".pc-menu");

        (menu.menu[1] as any).click = () => {
            ViewUtil.go("/");
            window.scrollTo(0, document.getElementsByClassName("team")[0].getClientRects()[0].top - 100);
        };

        this.append(
            MenuTreeBuilder.build(menu.menu),
            // new LanguageSelect(),
        );
    }
}
