import { BigNumber } from "@ethersproject/bignumber";
import EventContainer from "eventcontainer";
declare class Wallet extends EventContainer {
    constructor();
    private checkConnected;
    loadAddress(): Promise<string | undefined>;
    loadBalance(): Promise<BigNumber | undefined>;
    balanceOf(address: string): Promise<BigNumber | undefined>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
    addToken(address: string, symbol: string, decimals: number, image: string): Promise<void>;
    signMessage(message: string): Promise<{
        signedMessage?: string;
        klipAddress?: string;
    }>;
}
declare const _default: Wallet;
export default _default;
//# sourceMappingURL=Wallet.d.ts.map