import { ScrollableDomNode } from "@hanul/skynode";
import SkyUtil from "skyutil";
import superagent from "superagent";
import MateLine from "./MateLine";

export default class MateList extends ScrollableDomNode<number[]> {

    public selectedMateIds: number[] = [];
    public votedMates: number[] = [];

    private drawingMates: number[] = [];
    private mateNames: { [id: number]: string } = {};

    constructor(selectable: boolean, rarity: boolean) {
        super(
            (() => {
                const dom = document.createElement("div");
                dom.className = "mate-list"
                return dom;
            })(),
            { childTag: "div", baseChildHeight: window.innerWidth < 800 ? 64 : 90 },
            (ids) => new MateLine(this, ids, this.mateNames, selectable, rarity),
        );
        if (window.innerWidth >= 800) {
            this.style({
                width: 740
            });
        }
    }

    public async load(mates: number[], votedMates: number[] = []) {

        this.drawingMates = mates;
        this.votedMates = votedMates;

        const result = await superagent.get("https://api.dogesound.club/mate/names");
        this.mateNames = result.body;

        let index = 0;
        const mateData: number[][] = [];
        SkyUtil.repeat(window.innerWidth < 800 ? Math.ceil(mates.length / 5) : Math.ceil(mates.length / 8), () => {
            const ids: number[] = [];
            SkyUtil.repeat(window.innerWidth < 800 ? 5 : 8, () => {
                ids.push(mates[index]);
                index += 1;
                if (index === mates.length) {
                    return false;
                }
            });
            mateData.push(ids);
            if (index === mates.length) {
                return false;
            }
        });

        this.init(mateData);
    }

    public maxSelect(maxCount = 50) {
        this.selectedMateIds = [];
        let count = 0;
        for (const mateId of this.drawingMates) {
            if (this.votedMates.includes(mateId) !== true) {
                this.selectedMateIds.push(mateId);
                count += 1;
                if (count === maxCount) {
                    break;
                }
            }
        }
        this.load(this.drawingMates, this.votedMates);
        this.fireEvent("selectMate");
    }

    public deselect() {
        this.selectedMateIds = [];
        this.load(this.drawingMates, this.votedMates);
        this.fireEvent("selectMate");
    }
}
