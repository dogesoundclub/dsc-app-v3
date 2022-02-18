import { BigNumberish } from "ethers";
import Contract from "./Contract";
declare class AttributesContract extends Contract {
    constructor();
    level(mateId: BigNumberish): Promise<number>;
    face(mateId: BigNumberish): Promise<string>;
    faceDetailA(mateId: BigNumberish): Promise<string>;
    faceDetailB(mateId: BigNumberish): Promise<string>;
    neck(mateId: BigNumberish): Promise<string>;
    mouth(mateId: BigNumberish): Promise<string>;
    eyes(mateId: BigNumberish): Promise<string>;
    forehead(mateId: BigNumberish): Promise<string>;
    headwear(mateId: BigNumberish): Promise<string>;
    headwearDetail(mateId: BigNumberish): Promise<string>;
    ears(mateId: BigNumberish): Promise<string>;
    items(mateId: BigNumberish): Promise<string>;
}
declare const _default: AttributesContract;
export default _default;
//# sourceMappingURL=AttributesContract.d.ts.map