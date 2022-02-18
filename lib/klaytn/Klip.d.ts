import { BigNumberish } from "@ethersproject/bignumber";
import EventContainer from "eventcontainer";
import Store from "../Store";
declare class Klip extends EventContainer {
    private static readonly BAPP_NAME;
    store: Store;
    get address(): string | undefined;
    set address(address: string | undefined);
    private request;
    get connected(): boolean;
    connect(): Promise<void>;
    runContractMethod(address: string, abi: any, _params: any[], value?: BigNumberish): Promise<void>;
    disconnect(): Promise<void>;
}
declare const _default: Klip;
export default _default;
//# sourceMappingURL=Klip.d.ts.map