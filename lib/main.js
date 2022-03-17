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
const BuyMate_1 = __importDefault(require("./view/mates/BuyMate"));
const Contest_1 = __importDefault(require("./view/contest/Contest"));
const CreateDscFamily_1 = __importDefault(require("./view/dscFamily/CreateDscFamily"));
const CreateGovernance_1 = __importDefault(require("./view/governance/CreateGovernance"));
const DscFamily_1 = __importDefault(require("./view/dscFamily/DscFamily"));
const Faq_1 = __importDefault(require("./view/Faq"));
const FollowMe_1 = __importDefault(require("./view/mates/FollowMe"));
const FullyOn_1 = __importDefault(require("./view/FullyOn"));
const Gallery_1 = __importDefault(require("./view/Gallery"));
const Governance_1 = __importDefault(require("./view/governance/Governance"));
const GovernanceOldDetail_1 = __importDefault(require("./view/governance/GovernanceOldDetail"));
const Holder_1 = __importDefault(require("./view/Holder"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const Mates_1 = __importDefault(require("./view/mates/Mates"));
const MatesDetail_1 = __importDefault(require("./view/mates/MatesDetail"));
const Member_1 = __importDefault(require("./view/Member"));
const MyMate_1 = __importDefault(require("./view/mates/MyMate"));
const Terms_1 = __importDefault(require("./view/Terms"));
const UpdateDscFamily_1 = __importDefault(require("./view/dscFamily/UpdateDscFamily"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const Bmcs_1 = __importDefault(require("./view/Bmcs"));
const Layout_2 = __importDefault(require("./view/eMate/Layout"));
const Home_2 = __importDefault(require("./view/eMate/Home"));
(async () => {
    msg_js_1.default.language = BrowserInfo_1.default.language;
    msg_js_1.default.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skyrouter_1.SkyRouter.route("**", Layout_1.default, ["bmcs", "e-mate"]);
    skyrouter_1.SkyRouter.route("", Home_1.default);
    skyrouter_1.SkyRouter.route("followMe", FollowMe_1.default);
    skyrouter_1.SkyRouter.route("holder", Holder_1.default);
    skyrouter_1.SkyRouter.route("buyMate", BuyMate_1.default);
    skyrouter_1.SkyRouter.route("activities", Activities_1.default);
    skyrouter_1.SkyRouter.route("gallery", Gallery_1.default);
    skyrouter_1.SkyRouter.route("mates", Mates_1.default);
    skyrouter_1.SkyRouter.route("mates/{id}", MatesDetail_1.default);
    skyrouter_1.SkyRouter.route("myMate", MyMate_1.default);
    skyrouter_1.SkyRouter.route("dscFamily", DscFamily_1.default);
    skyrouter_1.SkyRouter.route("dscFamily/create", CreateDscFamily_1.default);
    skyrouter_1.SkyRouter.route("dscFamily/{id}/update", UpdateDscFamily_1.default);
    skyrouter_1.SkyRouter.route("governance", Governance_1.default);
    skyrouter_1.SkyRouter.route("governance/create", CreateGovernance_1.default);
    skyrouter_1.SkyRouter.route("governance-old/{id}", GovernanceOldDetail_1.default);
    skyrouter_1.SkyRouter.route("contest", Contest_1.default);
    skyrouter_1.SkyRouter.route("fullyOn", FullyOn_1.default);
    skyrouter_1.SkyRouter.route("terms", Terms_1.default);
    skyrouter_1.SkyRouter.route("faq", Faq_1.default);
    skyrouter_1.SkyRouter.route("member", Member_1.default);
    skyrouter_1.SkyRouter.route("bmcs", Bmcs_1.default);
    skyrouter_1.SkyRouter.route("**", Layout_2.default, ["bmcs", "", "followMe", "holder", "buyMate", "activities",
        "gallery", "mates", "myMate", "dscFamily", "dscFamily/create", "dscFamily/{id}/update",
        "governance", "governance/create", "governance-old/{id}", "contest", "fullyOn",
        "terms", "faq"]);
    skyrouter_1.SkyRouter.route("e-mate", Home_2.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    if (await Wallet_1.default.connected() !== true) {
        await Wallet_1.default.connect();
    }
})();
//# sourceMappingURL=main.js.map