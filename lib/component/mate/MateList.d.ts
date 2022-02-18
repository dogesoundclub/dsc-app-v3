import { ScrollableDomNode } from "@hanul/skynode";
export default class MateList extends ScrollableDomNode<number[]> {
    selectedMateIds: number[];
    votedMates: number[];
    private drawingMates;
    private mateNames;
    constructor(selectable: boolean, rarity: boolean);
    load(mates: number[], votedMates?: number[]): Promise<void>;
    maxSelect(maxCount?: number): void;
    deselect(): void;
}
//# sourceMappingURL=MateList.d.ts.map