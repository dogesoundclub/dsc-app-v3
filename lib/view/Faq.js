"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const CollapsibleItem_1 = __importDefault(require("../component/shared/CollapsibleItem"));
const Layout_1 = __importDefault(require("./Layout"));
class Faq {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("FAQ_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".faq-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("FAQ_TITLE"))), new CollapsibleItem_1.default((0, msg_js_1.default)("FAQ_TITLE1"), (0, msg_js_1.default)("FAQ_DESC1")), new CollapsibleItem_1.default((0, msg_js_1.default)("FAQ_TITLE2"), (0, msg_js_1.default)("FAQ_DESC2")), new CollapsibleItem_1.default((0, msg_js_1.default)("FAQ_TITLE3"), (0, msg_js_1.default)("FAQ_DESC3")), new CollapsibleItem_1.default((0, msg_js_1.default)("FAQ_TITLE4"), (0, msg_js_1.default)("FAQ_DESC4")), new CollapsibleItem_1.default((0, msg_js_1.default)("FAQ_TITLE5"), (0, msg_js_1.default)("FAQ_DESC5")), new CollapsibleItem_1.default((0, msg_js_1.default)("FAQ_TITLE6"), (0, msg_js_1.default)("FAQ_DESC6")), new CollapsibleItem_1.default((0, msg_js_1.default)("FAQ_TITLE7"), (0, msg_js_1.default)("FAQ_DESC7"))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Faq;
//# sourceMappingURL=Faq.js.map