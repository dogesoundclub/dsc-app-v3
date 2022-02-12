import { ClosableFloatingDomNode, Position } from "@hanul/skynode";
import LanguageSelect from "../../component/user/LanguageSelect";
import menu from "./menu.json";
import MenuTreeBuilder from "./MenuTreeBuilder";

export default class MobileMenu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".mobile-menu");
        this.append(
            MenuTreeBuilder.build(menu.menu),
            new LanguageSelect(),
        );
        this.onDom("click", () => this.delete());
    }
}
