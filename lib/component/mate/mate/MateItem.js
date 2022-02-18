"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const rarity_json_1 = __importDefault(require("../../rarity.json"));
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const ViewUtil_1 = __importDefault(require("../../view/ViewUtil"));
class MateItem extends skynode_1.DomNode {
    constructor(list, id, name, selectable, showingRarity) {
        super(`a.mate-item${list.votedMates.includes(id) === true ? ".off" : ""}`);
        this.style({
            backgroundImage: `url(https://storage.googleapis.com/dsc-mate/336/dscMate-${id}.png)`,
        });
        this.append((0, skynode_1.el)("span.id", `#${id}`));
        if (showingRarity === true) {
            (0, skynode_1.el)("span.score", CommonUtil_1.default.numberWithCommas(String(rarity_json_1.default.scores[id]))).appendTo(this);
        }
        else if (selectable === true) {
            if (list.votedMates.includes(id) !== true) {
                this.checkbox = (0, skynode_1.el)("input", {
                    type: "checkbox",
                    click: (event) => event.stopPropagation(),
                    change: () => {
                        if (this.checkbox !== undefined) {
                            if (this.checkbox.domElement.checked === true) {
                                if (list.selectedMateIds.includes(id) !== true) {
                                    list.selectedMateIds.push(id);
                                }
                            }
                            else {
                                skyutil_1.default.pull(list.selectedMateIds, id);
                            }
                            list.fireEvent("selectMate");
                        }
                    }
                }).appendTo(this);
                this.checkbox.domElement.checked = list.selectedMateIds.includes(id);
            }
        }
        else {
            (0, skynode_1.el)("span.name", name).appendTo(this);
        }
        this.onDom("click", () => {
            if (selectable === true) {
                if (this.checkbox !== undefined) {
                    this.checkbox.domElement.checked = this.checkbox.domElement.checked !== true;
                    if (this.checkbox.domElement.checked === true) {
                        if (list.selectedMateIds.includes(id) !== true) {
                            list.selectedMateIds.push(id);
                        }
                    }
                    else {
                        skyutil_1.default.pull(list.selectedMateIds, id);
                    }
                    list.fireEvent("selectMate");
                }
            }
            else {
                ViewUtil_1.default.go(`/mates/${id}`);
            }
        });
    }
}
exports.default = MateItem;
//# sourceMappingURL=MateItem.js.map