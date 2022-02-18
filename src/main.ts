import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Activities from "./view/Activities";
import BuyMate from "./view/BuyMate";
import Contest from "./view/Contest";
import CreateGovernance from "./view/CreateGovernance";
import CreateDscFamily from "./view/CreateDscFamily";
import Faq from "./view/Faq";
import FollowMe from "./view/FollowMe";
import FullyOn from "./view/FullyOn";
import Gallery from "./view/Gallery";
import Governance from "./view/Governance";
import GovernanceDetail from "./view/GovernanceDetail";
import Holder from "./view/Holder";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Mates from "./view/Mates";
import Member from "./view/Member";
import MyMate from "./view/MyMate";
import Terms from "./view/Terms";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);

    SkyRouter.route("gallery", Gallery);
    SkyRouter.route("followMe", FollowMe);
    SkyRouter.route("holder", Holder);
    SkyRouter.route("buyMate", BuyMate);
    SkyRouter.route("mates", Mates);
    SkyRouter.route("myMate", MyMate);
    SkyRouter.route("activities", Activities);
    SkyRouter.route("dscFamily/create", CreateDscFamily);
    SkyRouter.route("fullyOn", FullyOn);
    SkyRouter.route("terms", Terms);
    SkyRouter.route("contest", Contest);
    SkyRouter.route("faq", Faq);
    SkyRouter.route("member", Member);
    SkyRouter.route("governance", Governance);
    SkyRouter.route("governance/create", CreateGovernance);
    SkyRouter.route("governance/detail/{id}}", GovernanceDetail);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();