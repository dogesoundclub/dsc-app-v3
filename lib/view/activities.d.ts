import { View, ViewParams } from "skyrouter";
import DiscordUserInfo from "../DiscordUserInfo";
export default class Activities implements View {
    private container;
    discordUser: DiscordUserInfo | undefined;
    private codeStore;
    constructor();
    private checkDiscordLogin;
    private checkWalletConnected;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Activities.d.ts.map