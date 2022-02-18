import { View, ViewParams } from "skyrouter";
import DiscordUserInfo from "../DiscordUserInfo";
export default class MyMate implements View {
    private container;
    private wallet;
    private mateList;
    discordUser: DiscordUserInfo | undefined;
    private codeStore;
    constructor();
    private load;
    private windowResizeHandler;
    private checkDiscordLogin;
    private checkWalletConnected;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=MyMate.d.ts.map