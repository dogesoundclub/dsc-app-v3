import { SkyRouter } from "skyrouter";

class ViewUtil {

    public go(uri: string) {
        SkyRouter.go(uri);
        window.scrollTo(0, 0);
    }

    public waitTransactionAndRefresh() {
        setTimeout(() => SkyRouter.refresh(), 2000);
    }
}

export default new ViewUtil();