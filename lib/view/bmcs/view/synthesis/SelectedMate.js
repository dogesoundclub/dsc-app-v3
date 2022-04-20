"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("../../../ViewUtil"));
const BMCSConfirm_1 = __importDefault(require("../../component/BMCSConfirm"));
const Layout_1 = __importDefault(require("../Layout"));
class SelectedMate {
    constructor(params) {
        let cardName = "";
        if (params.cardId === "0") {
            cardName = "루비";
        }
        else if (params.cardId === "1") {
            cardName = "사파이어";
        }
        else if (params.cardId === "2") {
            cardName = "독약";
        }
        else if (params.cardId === "3") {
            cardName = "심해수";
        }
        Layout_1.default.current.title = "카드 합성";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".synthesis-select-mate-view", (0, skynode_1.el)("section", (0, skynode_1.el)("h2", "선택하신 메이트와 카드가 합성됩니다"), (0, skynode_1.el)(".synthesis-container", (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("img.mate", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${params.mateId}.png`, alt: "mate" }), (0, skynode_1.el)("p", `#${params.mateId}`)), (0, skynode_1.el)("img", { src: "/images/view/bmcs/home/add.svg" }), (0, skynode_1.el)(".card-container", (0, skynode_1.el)("img.card", { src: `/images/view/bmcs/home/vibe${params.cardId}.png`, alt: "vide-card" }), (0, skynode_1.el)("p", `${cardName} 카드 1개`))), (0, skynode_1.el)(".warning", "* BIAS 카드 합성을 통해 생성될 BIAS PFP-NFT는 합성시에\n400 MIX가 스테이킹 됩니다. 스테이킹된 믹스는\n6개월 후 400 MIX를 그대로 돌려받으실 수 있습니다"), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a.outline", "돌아가기"), (0, skynode_1.el)("a", "합성", {
            click: () => {
                new BMCSConfirm_1.default("합성에는 400 MIX 스테이킹이 필요합니다. 합성하시겠습니까?", "합성 시작", () => {
                    ViewUtil_1.default.go(`/bmcs/progress/${params.mateId}/${params.cardId}`);
                });
            }
        })))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = SelectedMate;
//# sourceMappingURL=SelectedMate.js.map