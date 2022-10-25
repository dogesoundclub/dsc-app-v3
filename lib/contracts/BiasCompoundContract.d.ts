import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
declare class BiasContractContract extends Contract {
    constructor();
    mixPrice(): Promise<BigNumber>;
    returnMixTime(): Promise<BigNumber>;
    compoundBlocks(biasId: BigNumberish): Promise<BigNumber>;
    compound(biasId: BigNumberish, cardId: BigNumberish, uri: string, signature: string): Promise<boolean>;
    withdrawMix(biasId: BigNumberish): Promise<void>;
}
declare const _default: BiasContractContract;
export default _default;
//# sourceMappingURL=BiasCompoundContract.d.ts.map