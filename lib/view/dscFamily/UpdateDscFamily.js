"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const DSCFamilyContract_1 = __importDefault(require("../../contracts/DSCFamilyContract"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class UpdateDscFamily {
    constructor(params) {
        this.id = parseInt(params.id, 10);
        Layout_1.default.current.title = (0, msg_js_1.default)("DSC_FAMILY_TITLE");
        let preview;
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".create-dsc-family-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("DSC_FAMILY_TITLE")), (0, skynode_1.el)("h2", (0, msg_js_1.default)("DSC_FAMILY_DESC"))), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_INPUT2")), this.linkInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_INPUT2") })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE1")), this.nameInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE1") })), (0, skynode_1.el)(".introduction-container", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE3")), this.descriptionInput = (0, skynode_1.el)("textarea", { placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE2") })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("label", "Image"), preview = (0, skynode_1.el)("img"), (0, skynode_1.el)("input.image-input", {
            placeholder: (0, msg_js_1.default)("DSC_FAMILY_DETAIL_TITLE4"),
            type: "file",
            change: (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.addEventListener("load", async () => {
                    const result = await fetch(`https://api.dogesound.club/dscfamily/uploadimage`, {
                        method: "POST",
                        body: reader.result,
                    });
                    this.image = await result.text();
                    preview.domElement.src = this.image;
                }, false);
                if (file) {
                    reader.readAsDataURL(file);
                }
            },
        }))), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "수정하기", {
            click: async () => {
                await DSCFamilyContract_1.default.update(this.id, {
                    link: this.linkInput.domElement.value,
                    name: this.nameInput.domElement.value,
                    image: this.image,
                    description: this.descriptionInput.domElement.value,
                });
                setTimeout(() => ViewUtil_1.default.go("/dscFamily"), 2000);
            },
        }), (0, skynode_1.el)("a", "삭제하기", {
            click: async () => {
                await DSCFamilyContract_1.default.remove(this.id);
                setTimeout(() => ViewUtil_1.default.go("/dscFamily"), 2000);
            },
        })))));
        this.load();
    }
    async load() {
        const data = await DSCFamilyContract_1.default.get(this.id);
        this.linkInput.domElement.value = data.link;
        this.nameInput.domElement.value = data.name;
        this.descriptionInput.domElement.value = data.description;
        this.image = data.image;
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = UpdateDscFamily;
//# sourceMappingURL=UpdateDscFamily.js.map