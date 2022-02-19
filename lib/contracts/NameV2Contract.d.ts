import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class NameV2Contract extends Contract {
    constructor();
    getMIXForChanging(): Promise<BigNumber>;
    getMIXForDeleting(): Promise<BigNumber>;
    set(nft: string, mateId: BigNumberish, name: string): Promise<void>;
    remove(nft: string, mateId: BigNumberish): Promise<void>;
    exists(name: string): Promise<boolean>;
    names(nft: string, mateId: BigNumberish): Promise<string>;
    named(nft: string, mateId: BigNumberish): Promise<boolean>;
}
declare const _default: NameV2Contract;
export default _default;
//# sourceMappingURL=NameV2Contract.d.ts.map