import { SkyRouter } from "skyrouter";
import Layout from "./view/Layout";
import Home from "./view/Home";
import Gallery from "./view/Gallery";
import FollowMe from "./view/FollowMe";
import Holder from "./view/Holder";
import BuyMate from "./view/BuyMate";

(async () => {

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);

    SkyRouter.route("gallery", Gallery);
    SkyRouter.route("followMe", FollowMe);
    SkyRouter.route("holder", Holder);
    SkyRouter.route("buyMate", BuyMate);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();