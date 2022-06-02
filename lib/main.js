"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const msg_js_1 = __importDefault(require("msg.js"));
const skyrouter_1 = require("skyrouter");
const superagent_1 = __importDefault(require("superagent"));
const BrowserInfo_1 = __importDefault(require("./BrowserInfo"));
const Wallet_1 = __importDefault(require("./klaytn/Wallet"));
const Activities_1 = __importDefault(require("./view/mate/view/Activities"));
const Contest_1 = __importDefault(require("./view/mate/view/contest/Contest"));
const CreateDscFamily_1 = __importDefault(require("./view/mate/view/dscFamily/CreateDscFamily"));
const DscFamily_1 = __importDefault(require("./view/mate/view/dscFamily/DscFamily"));
const UpdateDscFamily_1 = __importDefault(require("./view/mate/view/dscFamily/UpdateDscFamily"));
const Faq_1 = __importDefault(require("./view/mate/view/Faq"));
const FullyOn_1 = __importDefault(require("./view/mate/view/FullyOn"));
const Gallery_1 = __importDefault(require("./view/mate/view/Gallery"));
const CreateGovernance_1 = __importDefault(require("./view/mate/view/governance/CreateGovernance"));
const Governance_1 = __importDefault(require("./view/mate/view/governance/Governance"));
const GovernanceOldDetail_1 = __importDefault(require("./view/mate/view/governance/GovernanceOldDetail"));
const Holder_1 = __importDefault(require("./view/mate/view/Holder"));
const Home_1 = __importDefault(require("./view/mate/view/Home"));
const Layout_1 = __importDefault(require("./view/mate/view/Layout"));
const BuyMate_1 = __importDefault(require("./view/mate/view/mates/BuyMate"));
const FollowMe_1 = __importDefault(require("./view/mate/view/mates/FollowMe"));
const Mates_1 = __importDefault(require("./view/mate/view/mates/Mates"));
const MatesDetail_1 = __importDefault(require("./view/mate/view/mates/MatesDetail"));
const MyMate_1 = __importDefault(require("./view/mate/view/mates/MyMate"));
const Member_1 = __importDefault(require("./view/mate/view/Member"));
const Terms_1 = __importDefault(require("./view/mate/view/Terms"));
const Bmcs_1 = __importDefault(require("./view/bmcs/view/Bmcs"));
const Gallery_2 = __importDefault(require("./view/bmcs/view/Gallery"));
const Layout_2 = __importDefault(require("./view/bmcs/view/Layout"));
const MatesDetail_2 = __importDefault(require("./view/bmcs/view/MatesDetail"));
const CycleOfCraft_1 = __importDefault(require("./view/bmcs/view/CycleOfCraft"));
const Preparation_1 = __importDefault(require("./view/bmcs/view/synthesis/Preparation"));
const SelectedMate_1 = __importDefault(require("./view/bmcs/view/synthesis/SelectedMate"));
const Progress_1 = __importDefault(require("./view/bmcs/view/synthesis/Progress"));
const Done_1 = __importDefault(require("./view/bmcs/view/synthesis/Done"));
const Layout_3 = __importDefault(require("./view/e-mate/view/Layout"));
const Home_2 = __importDefault(require("./view/e-mate/view/Home"));
const Gallery_3 = __importDefault(require("./view/e-mate/view/Gallery"));
const MyMate_2 = __importDefault(require("./view/e-mate/view/mates/MyMate"));
const CraftOfDrill_1 = __importDefault(require("./view/e-mate/view/CraftOfDrill"));
(async () => {
    msg_js_1.default.language = BrowserInfo_1.default.language;
    msg_js_1.default.parseCSV((await superagent_1.default.get("/msg.csv")).text);
    skyrouter_1.SkyRouter.route("**", Layout_1.default, [
        "bmcs", "bmcs/mates/{id}", "bmcs/gallery", "bmcs/cycle-of-craft", "bmcs/preparation", "bmcs/selected-mate/{mateId}/{cardId}", "bmcs/progress/{mateId}/{cardId}", "bmcs/done/{biasId}",
        "e-mate", "e-mate/gallery", "e-mate/my", "e-mate/craft-of-drill",
    ]);
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
    skyrouter_1.SkyRouter.route(["e-mate", "e-mate/gallery", "e-mate/my", "e-mate/craft-of-drill"], Layout_3.default);
    skyrouter_1.SkyRouter.route("e-mate", Home_2.default);
    skyrouter_1.SkyRouter.route("e-mate/gallery", Gallery_3.default);
    skyrouter_1.SkyRouter.route("e-mate/my", MyMate_2.default);
    skyrouter_1.SkyRouter.route("e-mate/craft-of-drill", CraftOfDrill_1.default);
    skyrouter_1.SkyRouter.route(["bmcs", "bmcs/mates/{id}", "bmcs/gallery", "bmcs/cycle-of-craft", "bmcs/preparation", "bmcs/selected-mate/{mateId}/{cardId}", "bmcs/progress/{mateId}/{cardId}", "bmcs/done/{biasId}"], Layout_2.default);
    skyrouter_1.SkyRouter.route("bmcs", Bmcs_1.default);
    skyrouter_1.SkyRouter.route("bmcs/mates/{id}", MatesDetail_2.default);
    skyrouter_1.SkyRouter.route("bmcs/gallery", Gallery_2.default);
    skyrouter_1.SkyRouter.route("bmcs/cycle-of-craft", CycleOfCraft_1.default);
    skyrouter_1.SkyRouter.route("bmcs/preparation", Preparation_1.default);
    skyrouter_1.SkyRouter.route("bmcs/selected-mate/{mateId}/{cardId}", SelectedMate_1.default);
    skyrouter_1.SkyRouter.route("bmcs/progress/{mateId}/{cardId}", Progress_1.default);
    skyrouter_1.SkyRouter.route("bmcs/done/{biasId}", Done_1.default);
    if (sessionStorage.__spa_path) {
        skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
    if (await Wallet_1.default.connected() !== true) {
        await Wallet_1.default.connect();
    }
})();
//# sourceMappingURL=main.js.map