import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class BiasContractContract extends Contract {
    constructor();
    mixPrice(): Promise<BigNumber>;
    compound(biasId: BigNumberish, cardId: BigNumberish, uri: string, signature: string): Promise<boolean>;
}
declare const _default: BiasContractContract;
export default _default;
//# sourceMappingURL=BiasCompoundContract.d.ts.map