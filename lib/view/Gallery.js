"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const superagent_1 = __importDefault(require("superagent"));
const MateList_1 = __importDefault(require("../component/mate/MateList"));
const Layout_1 = __importDefault(require("./Layout"));
const MateParts_json_1 = __importDefault(require("./MateParts.json"));
const Mates_json_1 = __importDefault(require("./Mates.json"));
class Gallery {
    constructor() {
        this.selects = [];
        this.filter = {};
        this.windowResizeHandler = () => {
            this.mateList.style({ height: window.innerHeight - 135 });
        };
        Layout_1.default.current.title = (0, msg_js_1.default)("GALLERY_TITLE");
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".gallery-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", (0, msg_js_1.default)("GALLERY_TITLE"))), (0, skynode_1.el)("section", (0, skynode_1.el)(".filter", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("input", {
            placeholder: (0, msg_js_1.default)("GALLERY_SEARCH_INPUT"),
            change: (event, input) => {
                this.query = input.domElement.value.trim();
                if (this.query === "") {
                    this.query = undefined;
                }
                this.loadMates();
            },
        }), (0, skynode_1.el)("button", (0, msg_js_1.default)("GALLERY_SEARCH_BUTTON"))), ...Object.entries(MateParts_json_1.default).map(([key, values]) => {
            const select = (0, skynode_1.el)("select", {
                placeholder: key,
                change: (event, select) => {
                    const value = select.domElement.value;
                    Object.assign(this.filter, { [key]: value });
                    if (value === "") {
                        delete this.filter[key];
                    }
                    this.loadMates();
                },
            }, (0, skynode_1.el)("option", key, { value: "" }), key === "Face" ? undefined : (0, skynode_1.el)("option", "None", { value: "None" }), ...values.map((value) => (0, skynode_1.el)("option", value, { value })));
            this.selects.push(select);
            return select;
        }), (0, skynode_1.el)("a.reset-button", (0, msg_js_1.default)("GALLERY_RESET_FILTER_BUTTON"), {
            click: () => {
                this.filter = {};
                for (const select of this.selects) {
                    select.domElement.value = "";
                }
                this.query = undefined;
                this.loadMates();
            },
        })), (0, skynode_1.el)("article", this.mateList = new MateList_1.default(false, false)))));
        this.windowResizeHandler();
        this.loadMates();
        window.addEventListener("resize", this.windowResizeHandler);
    }
    async loadMates() {
        const mates = [];
        const result = await superagent_1.default.get("https://api.dogesound.club/mate/names");
        const mateNames = result.body;
        for (const [id, token] of Mates_json_1.default.collection.entries()) {
            if (this.query !== undefined) {
                let queryId = parseInt(this.query, 10);
                queryId = isNaN(queryId) === true ? undefined : queryId;
                if (id === queryId || mateNames[id].replace(/ /g, "").toLowerCase().indexOf(this.query.replace(/ /g, "").toLowerCase()) !== -1) {
                    mates.push(id);
                }
            }
            else {
                let pass = true;
                if (Object.keys(this.filter).length > 0) {
                    for (const [key, value] of Object.entries(this.filter)) {
                        if (token.properties[key] !== value && (value !== "None" ||
                            token.properties[key] !== undefined)) {
                            pass = false;
                        }
                    }
                }
                if (pass === true) {
                    mates.push(id);
                }
            }
        }
        this.mateList.load(mates);
    }
    changeParams(params, uri) { }
    close() {
        window.removeEventListener("resize", this.windowResizeHandler);
        this.container.delete();
    }
}
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map