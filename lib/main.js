"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg_js_1 = __importDefault(require("msg.js"));
const skyrouter_1 = require("skyrouter");
const superagent_1 = __importDefault(require("superagent"));
const BrowserInfo_1 = __importDefault(require("./BrowserInfo"));
const Activities_1 = __importDefault(require("./view/Activities"));
const BuyMate_1 = __importDefault(require("./view/BuyMate"));
const Contest_1 = __importDefault(require("./view/Contest"));
const CreateGovernance_1 = __importDefault(require("./view/CreateGovernance"));
const CreateDscFamily_1 = __importDefault(require("./view/CreateDscFamily"));
const Faq_1 = __importDefault(require("./view/Faq"));
const FollowMe_1 = __importDefault(require("./view/FollowMe"));
const FullyOn_1 = __importDefault(require("./view/FullyOn"));
const Gallery_1 = __importDefault(require("./view/Gallery"));
const Governance_1 = __importDefault(require("./view/Governance"));
const GovernanceDetail_1 = __importDefault(require("./view/GovernanceDetail"));
const Holder_1 = __importDefault(require("./view/Holder"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const Mates_1 = __importDefault(require("./view/Mates"));
const MatesDetail_1 = __importDefault(require("./view/MatesDetail"));
const Member_1 = __importDefault(require("./view/Member"));
const MyMate_1 = __importDefault(require("./view/MyMate"));
const Terms_1 = __importDefault(require("./view/Terms"));
const DscFamily_1 = __importDefault(require("./view/DscFamily"));
(async () => {
    msg_js_1.default.language = BrowserInfo_1.default.language;
    msg_js_1.default.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skyrouter_1.SkyRouter.route("**", Layout_1.default);
    skyrouter_1.SkyRouter.route("", Home_1.default);
    skyrouter_1.SkyRouter.route("gallery", Gallery_1.default);
    skyrouter_1.SkyRouter.route("followMe", FollowMe_1.default);
    skyrouter_1.SkyRouter.route("holder", Holder_1.default);
    skyrouter_1.SkyRouter.route("buyMate", BuyMate_1.default);
    skyrouter_1.SkyRouter.route("mates", Mates_1.default);
    skyrouter_1.SkyRouter.route("mates/detail/{id}", MatesDetail_1.default);
    skyrouter_1.SkyRouter.route("myMate", MyMate_1.default);
    skyrouter_1.SkyRouter.route("activities", Activities_1.default);
    skyrouter_1.SkyRouter.route("dscFamily", DscFamily_1.default);
    skyrouter_1.SkyRouter.route("dscFamily/create", CreateDscFamily_1.default);
    skyrouter_1.SkyRouter.route("fullyOn", FullyOn_1.default);
    skyrouter_1.SkyRouter.route("terms", Terms_1.default);
    skyrouter_1.SkyRouter.route("contest", Contest_1.default);
    skyrouter_1.SkyRouter.route("faq", Faq_1.default);
    skyrouter_1.SkyRouter.route("member", Member_1.default);
    skyrouter_1.SkyRouter.route("governance", Governance_1.default);
    skyrouter_1.SkyRouter.route("governance/create", CreateGovernance_1.default);
    skyrouter_1.SkyRouter.route("governance/detail/{id}", GovernanceDetail_1.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();
//# sourceMappingURL=main.js.map