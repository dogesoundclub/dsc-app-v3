"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const DSCFamilyContract_1 = __importDefault(require("../../../../contracts/DSCFamilyContract"));
const Wallet_1 = __importDefault(require("../../../../klaytn/Wallet"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../../../ViewUtil"));
class DscFamily {
    constructor() {
        Layout_1.default.current.title = (0, msg_js_1.default)("DSC_FAMILY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".dsc-family-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("DSC_FAMILY_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("DSC_FAMILY_DESC")), (0, skynode_1.el)("button", (0, msg_js_1.default)("REGISTER_BUTTON"), {
            click: () => ViewUtil_1.default.go("/dscFamily/create"),
        }))));
        this.load();
    }
    async load() {
        const owner = await Wallet_1.default.loadAddress();
        const count = (await DSCFamilyContract_1.default.count()).toNumber();
        for (let id = 0; id < count; id += 1) {
            const data = await DSCFamilyContract_1.default.get(id);
            if (data !== undefined) {
                this.container.append((0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("header", data.owner === owner ? (0, skynode_1.el)("button", "My Channel") : undefined, (0, skynode_1.el)("h2", data.name), data.owner === owner ? (0, skynode_1.el)("a", "Edit", {
                    click: () => ViewUtil_1.default.go(`/dscFamily/${id}/update`),
                }) : undefined), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: data.image }), (0, skynode_1.el)(".content", (0, skynode_1.el)("a", data.link, { href: data.link, target: "_blank" }), (0, skynode_1.el)("p", data.description)))));
            }
        }
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = DscFamily;
//# sourceMappingURL=DscFamily.js.map