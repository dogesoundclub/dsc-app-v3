import { ClosableFloatingDomNode, Position } from "@hanul/skynode";
import LanguageSelect from "../../component/user/LanguageSelect";
import ViewUtil from "../../view/ViewUtil";
import menu from "./menu.json";
import MenuTreeBuilder from "./MenuTreeBuilder";

export default class MobileMenu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".mobile-menu");

        (menu.menu[1] as any).click = () => {
            ViewUtil.go("/");
            window.scrollTo(0, document.getElementsByClassName("team")[0].getClientRects()[0].top - 100);
        };

        this.append(
            MenuTreeBuilder.build(menu.menu),
        );
        this.onDom("click", () => this.delete());
    }
}
