import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Activities from "./view/Activities";
import BuyMate from "./view/mates/BuyMate";
import Contest from "./view/contest/Contest";
import CreateDscFamily from "./view/dscFamily/CreateDscFamily";
import CreateGovernance from "./view/governance/CreateGovernance";
import DscFamily from "./view/dscFamily/DscFamily";
import Faq from "./view/Faq";
import FollowMe from "./view/mates/FollowMe";
import FullyOn from "./view/FullyOn";
import Gallery from "./view/Gallery";
import Governance from "./view/governance/Governance";
import GovernanceOldDetail from "./view/governance/GovernanceOldDetail";
import Holder from "./view/Holder";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Mates from "./view/mates/Mates";
import MatesDetail from "./view/mates/MatesDetail";
import Member from "./view/Member";
import MyMate from "./view/mates/MyMate";
import Terms from "./view/Terms";
import UpdateDscFamily from "./view/dscFamily/UpdateDscFamily";
import Wallet from "./klaytn/Wallet";
import Bmcs from "./view/Bmcs";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout, ["bmcs"]);
    SkyRouter.route("", Home);

    SkyRouter.route("followMe", FollowMe);
    SkyRouter.route("holder", Holder);
    SkyRouter.route("buyMate", BuyMate);
    SkyRouter.route("activities", Activities);
    SkyRouter.route("gallery", Gallery);

    // mates
    SkyRouter.route("mates", Mates);
    SkyRouter.route("mates/{id}", MatesDetail);
    SkyRouter.route("myMate", MyMate);

    //dscFamily
    SkyRouter.route("dscFamily", DscFamily);
    SkyRouter.route("dscFamily/create", CreateDscFamily);
    SkyRouter.route("dscFamily/{id}/update", UpdateDscFamily);

    //governance
    SkyRouter.route("governance", Governance);
    SkyRouter.route("governance/create", CreateGovernance);
    SkyRouter.route("governance-old/{id}", GovernanceOldDetail);

    // Contest
    SkyRouter.route("contest", Contest);

    SkyRouter.route("fullyOn", FullyOn);
    SkyRouter.route("terms", Terms);
    SkyRouter.route("faq", Faq);
    SkyRouter.route("member", Member);
    SkyRouter.route("bmcs", Bmcs);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();