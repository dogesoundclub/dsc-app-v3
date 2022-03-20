import { ScrollItemDomNode } from "@hanul/skynode";
import MateList from "./MateList";
export default class MateLine extends ScrollItemDomNode<number[]> {
    private ids;
    get nodeData(): number[];
    constructor(list: MateList, ids: number[], names: {
        [id: number]: string;
    }, selectable: boolean, rarity: boolean);
}
//# sourceMappingURL=MateLine.d.ts.map