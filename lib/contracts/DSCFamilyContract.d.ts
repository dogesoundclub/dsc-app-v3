import { BigNumberish } from "ethers";
import Contract from "./Contract";
declare class DSCFamilyContract extends Contract {
    constructor();
    add(data: any): Promise<void>;
    get(id: BigNumberish): Promise<any>;
    update(id: BigNumberish, data: any): Promise<void>;
    remove(id: BigNumberish): Promise<void>;
}
declare const _default: DSCFamilyContract;
export default _default;
//# sourceMappingURL=DSCFamilyContract.d.ts.map