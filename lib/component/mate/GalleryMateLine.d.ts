import { ScrollItemDomNode } from "@hanul/skynode";
import GalleryMateList from "./GalleryMateList";
export default class GalleryMateLine extends ScrollItemDomNode<number[]> {
    private ids;
    get nodeData(): number[];
    constructor(list: GalleryMateList, ids: number[], names: {
        [id: number]: string;
    }, selectable: boolean, rarity: boolean);
}
//# sourceMappingURL=GalleryMateLine.d.ts.map