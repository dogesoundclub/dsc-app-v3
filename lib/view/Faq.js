"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class Faq {
    constructor() {
        Layout_1.default.current.title = "FAQ";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".faq-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "FAQ 👑😛😍")), (0, skynode_1.el)("section", this.collapsible = (0, skynode_1.el)("button.collapsible", "What is Doji Sound Club?", {
            click: () => {
            }
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)("p", "As its name suggests, Doji Sound Club is Gaesori Club. Anyone who has an admission ticket can freely come in and talk about various thoughts.\nMate and Rocket Gicks are 10, 000 Generative Art NFTs that serve as tickets for the provincial governor's sound club."))), (0, skynode_1.el)("section", this.collapsible = (0, skynode_1.el)("button.collapsible", "What is the difference between Mate and Rocket Gigs?", {
            click: () => {
            }
        }))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Faq;
//# sourceMappingURL=Faq.js.map