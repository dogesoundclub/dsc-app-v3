import { SkyRouter } from "skyrouter";
import Layout from "./view/Layout";
import Home from "./view/Home";
import Gallery from "./view/Gallery";
import FollowMe from "./view/FollowMe";
import Holder from "./view/Holder";
import BuyMate from "./view/BuyMate";
import MyMate from "./view/MyMate";
import Activities from "./view/activities";
import DscFamily from "./view/DscFamily";
import FullyOn from "./view/FullyOn";
import Terms from "./view/Terms";
import Contest from "./view/Contest";
import Governance from "./view/governance";

(async () => {

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);

    SkyRouter.route("gallery", Gallery);
    SkyRouter.route("followMe", FollowMe);
    SkyRouter.route("holder", Holder);
    SkyRouter.route("buyMate", BuyMate);
    SkyRouter.route("myMate", MyMate);
    SkyRouter.route("activities", Activities);
    SkyRouter.route("dscFamily", DscFamily);
    SkyRouter.route("fullyOn", FullyOn);
    SkyRouter.route("terms", Terms);
    SkyRouter.route("contest", Contest);
    SkyRouter.route("governance", Governance);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();