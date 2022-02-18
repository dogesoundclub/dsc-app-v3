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
            window.scrollTo(0, 3600);
        };

        this.append(
            MenuTreeBuilder.build(menu.menu),
            new LanguageSelect(),
        );
        this.onDom("click", () => this.delete());
    }
}
