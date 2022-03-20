import { ScrollItemDomNode } from "@hanul/skynode";
import MateItem from "./MateItem";
import MateList from "./MateList";

export default class MateLine extends ScrollItemDomNode<number[]> {

    public get nodeData() { return this.ids; }

    constructor(list: MateList, private ids: number[], names: { [id: number]: string }, selectable: boolean, rarity: boolean) {
        super((() => {
            const dom = document.createElement("div");
            dom.className = "mate-line"
            return dom;
        })());
        for (const id of ids) {
            this.append(new MateItem(list, id, names[id], selectable, rarity));
        }
    }
}
