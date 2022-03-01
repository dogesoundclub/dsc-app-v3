import { DomNode } from "@hanul/skynode";
import ViewUtil from "../../../view/ViewUtil";
import menu from "./menu.json";
import MenuTreeBuilder from "./MenuTreeBuilder";

export default class PCMenu extends DomNode {

    constructor() {
        super(".bmcs-pc-menu");

        this.append(
            MenuTreeBuilder.build(menu.menu),
        );
    }
}