import { ClosableFloatingDomNode, el, Position } from "@hanul/skynode";
import LanguageSelect from "../../../shared/LanguageSelect";
import ViewUtil from "../../../ViewUtil";
import menu from "./menu.json";
import MenuTreeBuilder from "./MenuTreeBuilder";

export default class MobileMenu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".mobile-menu");

        this.append(
            MenuTreeBuilder.build(menu.menu),
            el("a.bmcs", "Go to BMCS >", {
                click: () => {
                    ViewUtil.go("/bmcs");
                }
            }),
        );
        this.onDom("click", () => this.delete());
    }
}
