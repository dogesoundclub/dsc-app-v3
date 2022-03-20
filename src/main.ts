import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Wallet from "./klaytn/Wallet";
import Bmcs from "./view/bmcs/view/Bmcs";
import Activities from "./view/mate/view/Activities";
import Contest from "./view/mate/view/contest/Contest";
import CreateDscFamily from "./view/mate/view/dscFamily/CreateDscFamily";
import DscFamily from "./view/mate/view/dscFamily/DscFamily";
import UpdateDscFamily from "./view/mate/view/dscFamily/UpdateDscFamily";
import EmateHome from "./view/mate/view/eMate/Home";
import EmateLayout from "./view/mate/view/eMate/Layout";
import Faq from "./view/mate/view/Faq";
import FullyOn from "./view/mate/view/FullyOn";
import Gallery from "./view/mate/view/Gallery";
import CreateGovernance from "./view/mate/view/governance/CreateGovernance";
import Governance from "./view/mate/view/governance/Governance";
import GovernanceOldDetail from "./view/mate/view/governance/GovernanceOldDetail";
import Holder from "./view/mate/view/Holder";
import Home from "./view/mate/view/Home";
import Layout from "./view/mate/view/Layout";
import BuyMate from "./view/mate/view/mates/BuyMate";
import FollowMe from "./view/mate/view/mates/FollowMe";
import Mates from "./view/mate/view/mates/Mates";
import MatesDetail from "./view/mate/view/mates/MatesDetail";
import MyMate from "./view/mate/view/mates/MyMate";
import Member from "./view/mate/view/Member";
import Terms from "./view/mate/view/Terms";

// mate

// e-mate

// bmcs

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    // mate
    SkyRouter.route("**", Layout, ["bmcs", "emate"]);
    SkyRouter.route("", Home);

    SkyRouter.route("followMe", FollowMe);
    SkyRouter.route("holder", Holder);
    SkyRouter.route("buyMate", BuyMate);
    SkyRouter.route("activities", Activities);
    SkyRouter.route("gallery", Gallery);

    SkyRouter.route("mates", Mates);
    SkyRouter.route("mates/{id}", MatesDetail);
    SkyRouter.route("myMate", MyMate);

    SkyRouter.route("dscFamily", DscFamily);
    SkyRouter.route("dscFamily/create", CreateDscFamily);
    SkyRouter.route("dscFamily/{id}/update", UpdateDscFamily);

    SkyRouter.route("governance", Governance);
    SkyRouter.route("governance/create", CreateGovernance);
    SkyRouter.route("governance-old/{id}", GovernanceOldDetail);

    SkyRouter.route("contest", Contest);

    SkyRouter.route("fullyOn", FullyOn);
    SkyRouter.route("terms", Terms);
    SkyRouter.route("faq", Faq);
    SkyRouter.route("member", Member);

    // e-mate
    SkyRouter.route("**", EmateLayout, ["bmcs", "", "followMe", "holder", "buyMate", "activities",
        "gallery", "mates", "myMate", "dscFamily", "dscFamily/create", "dscFamily/{id}/update",
        "governance", "governance/create", "governance-old/{id}", "contest", "fullyOn",
        "terms", "faq"]);

    SkyRouter.route("e-mate", EmateHome);

    // bmcs
    SkyRouter.route("bmcs", Bmcs);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();