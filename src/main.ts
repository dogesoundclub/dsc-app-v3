import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Wallet from "./klaytn/Wallet";

// mate
import Activities from "./view/mate/view/Activities";
import Contest from "./view/mate/view/contest/Contest";
import CreateDscFamily from "./view/mate/view/dscFamily/CreateDscFamily";
import DscFamily from "./view/mate/view/dscFamily/DscFamily";
import UpdateDscFamily from "./view/mate/view/dscFamily/UpdateDscFamily";
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

// bmcs
import Bmcs from "./view/bmcs/view/Bmcs";
import BmcsGallery from "./view/bmcs/view/Gallery";
import BmcsLayout from "./view/bmcs/view/Layout";
import CycleOfCraft from "./view/bmcs/view/CycleOfCraft";
import Preparation from "./view/bmcs/view/synthesis/Preparation";
import SelectedMate from "./view/bmcs/view/synthesis/SelectedMate";
import SynthesisProgress from "./view/bmcs/view/synthesis/Progress";
import SynthesisDone from "./view/bmcs/view/synthesis/Done";

// e-mate
import EmateLayout from "./view/e-mate/view/Layout";
import EmateHome from "./view/e-mate/view/Home";
import EmateGallery from "./view/e-mate/view/Gallery";
import MyEmate from "./view/e-mate/view/mates/MyMate";
import CraftOfDrill from "./view/e-mate/view/CraftOfDrill";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    // mate
    SkyRouter.route("**", Layout, [
        "bmcs", "bmcs/gallery", "bmcs/cycle-of-craft", "bmcs/preparation", "bmcs/selected-mate/{mateId}/{cardId}", "bmcs/progress/{mateId}/{cardId}", "bmcs/done/{biasId}",
        "e-mate", "e-mate/gallery", "e-mate/my", "e-mate/craft-of-drill"
    ]);
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
    SkyRouter.route(["e-mate", "e-mate/gallery", "e-mate/my", "e-mate/craft-of-drill"], EmateLayout);

    SkyRouter.route("e-mate", EmateHome);
    SkyRouter.route("e-mate/gallery", EmateGallery);
    SkyRouter.route("e-mate/my", MyEmate);
    SkyRouter.route("e-mate/craft-of-drill", CraftOfDrill);

    // bmcs
    SkyRouter.route(["bmcs", "bmcs/gallery", "bmcs/cycle-of-craft", "bmcs/preparation", "bmcs/selected-mate/{mateId}/{cardId}", "bmcs/progress/{mateId}/{cardId}", "bmcs/done/{biasId}"], BmcsLayout);
    SkyRouter.route("bmcs", Bmcs);
    SkyRouter.route("bmcs/gallery", BmcsGallery);
    SkyRouter.route("bmcs/cycle-of-craft", CycleOfCraft);
    SkyRouter.route("bmcs/preparation", Preparation);
    SkyRouter.route("bmcs/selected-mate/{mateId}/{cardId}", SelectedMate);
    SkyRouter.route("bmcs/progress/{mateId}/{cardId}", SynthesisProgress);
    SkyRouter.route("bmcs/done/{biasId}", SynthesisDone);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }

    if (await Wallet.connected() !== true) {
        await Wallet.connect();
    }
})();