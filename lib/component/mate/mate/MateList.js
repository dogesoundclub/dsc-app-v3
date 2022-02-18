"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const superagent_1 = __importDefault(require("superagent"));
const MateLine_1 = __importDefault(require("./MateLine"));
class MateList extends skynode_1.ScrollableDomNode {
    constructor(selectable, rarity) {
        super((() => {
            const dom = document.createElement("div");
            dom.className = "mate-list";
            return dom;
        })(), { childTag: "div", baseChildHeight: window.innerWidth < 800 ? 64 : 90 }, (ids) => new MateLine_1.default(this, ids, this.mateNames, selectable, rarity));
        this.selectedMateIds = [];
        this.votedMates = [];
        this.drawingMates = [];
        this.mateNames = {};
        if (window.innerWidth >= 800) {
            this.style({
                width: 740
            });
        }
    }
    async load(mates, votedMates = []) {
        this.drawingMates = mates;
        this.votedMates = votedMates;
        const result = await superagent_1.default.get("https://api.dogesound.club/mate/names");
        this.mateNames = result.body;
        let index = 0;
        const mateData = [];
        skyutil_1.default.repeat(window.innerWidth < 800 ? Math.ceil(mates.length / 5) : Math.ceil(mates.length / 8), () => {
            const ids = [];
            skyutil_1.default.repeat(window.innerWidth < 800 ? 5 : 8, () => {
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
    maxSelect(maxCount = 50) {
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
    deselect() {
        this.selectedMateIds = [];
        this.load(this.drawingMates, this.votedMates);
        this.fireEvent("selectMate");
    }
}
exports.default = MateList;
//# sourceMappingURL=MateList.js.map