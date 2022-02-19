import { View, ViewParams } from "skyrouter";
import DiscordUserInfo from "../DiscordUserInfo";
export default class CheckCaseHolder implements View {
    private container;
    discordUser: DiscordUserInfo | undefined;
    private codeStore;
    constructor();
    private checkDiscordLogin;
    private checkWalletConnected;
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=CheckCaseHolder.d.ts.map