"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CommonUtil_1 = __importDefault(require("../../../CommonUtil"));
const Alert_1 = __importDefault(require("../../shared/Alert"));
const BiasMetadataLoader_1 = __importDefault(require("./BiasMetadataLoader"));
class CycleOfCraftCard extends skynode_1.DomNode {
    constructor(type, id, currentBlock, startBlock, level, claimableCount) {
        super(".cycle-of-craft-card");
        const metadata = BiasMetadataLoader_1.default.load(type, id);
        let speed = 0;
        if (level === 1) {
            speed = 1;
        }
        else if (level === 2) {
            speed = 2;
        }
        else if (level === 3) {
            speed = 3;
        }
        else if (level === 4) {
            speed = 4;
        }
        else if (level === 5) {
            speed = 5;
        }
        else if (level === 6) {
            speed = 10;
        }
        const pointPerEngine = 30 * 86400;
        const acc = (currentBlock - startBlock) * speed % pointPerEngine;
        let bar;
        this.append((0, skynode_1.el)(".info-container", (0, skynode_1.el)("img", { src: metadata.image, alt: "bmcs" }), (0, skynode_1.el)(".title", metadata.name), (0, skynode_1.el)("a", "엔진 받기", {
            click: () => {
                new Alert_1.default("엔진 받기가 아직 활성화되지 않았습니다.");
            },
        })), (0, skynode_1.el)(".progress-container", (0, skynode_1.el)("img", { src: "/images/view/bmcs/cycle-of-craft/loading.png", alt: "loading" }), (0, skynode_1.el)(".progress", bar = (0, skynode_1.el)(".bar")), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "휙득까지 남은 Block"), (0, skynode_1.el)("p", CommonUtil_1.default.numberWithCommas(String((pointPerEngine - acc) / speed))), (0, skynode_1.el)(".title", "제작 완료된 엔진 수"), (0, skynode_1.el)("p", CommonUtil_1.default.numberWithCommas(String(claimableCount))))));
        bar.style({
            width: `${acc / pointPerEngine * 100}%`,
        });
    }
}
exports.default = CycleOfCraftCard;
//# sourceMappingURL=CycleOfCraftCard.js.map