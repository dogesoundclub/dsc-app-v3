import { BigNumber, BigNumberish, constants } from "ethers";
import Wallet from "../klaytn/Wallet";
import Alert from "../view/shared/Alert";
import BiasCompoundArtifact from "./abi/bias/artifacts/contracts/BiasCompound.sol/BiasCompound.json";
import BiasCardsContract from "./BiasCardsContract";
import Contract from "./Contract";
import MixContract from "./MixContract";

class BiasContractContract extends Contract {

    constructor() {
        super("0xEe002D60f61097fcf02886EE9103962AadBAeEA8", BiasCompoundArtifact.abi);
    }

    public async mixPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("mixPrice"));
    }

    public async returnMixTime(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("returnMixTime"));
    }

    public async compoundBlocks(biasId: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("compoundBlocks", biasId));
    }

    public async compound(biasId: BigNumberish, cardId: BigNumberish, uri: string, signature: string): Promise<boolean> {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {

            // 카드 부족 체크
            if ((await BiasCardsContract.balanceOf(owner, cardId)).eq(0)) {
                new Alert("오류", "합성에 필요한 카드가 부족합니다.");
                return false;
            }

            // 믹스 부족 체크
            const mixPrice = await this.mixPrice();
            if ((await MixContract.balanceOf(owner)).lt(mixPrice)) {
                new Alert("오류", "합성 시 스테이킹에 필요한 MIX가 부족합니다.");
                return false;
            }

            // 카드 사용 허락 체크
            if (await BiasCardsContract.isApprovedForAll(owner, this.address) !== true) {
                await BiasCardsContract.setApprovalForAll(this.address, true);
                setTimeout(async () => {

                    // 믹스 사용 허락 체크
                    if ((await MixContract.allowance(owner, this.address)).lt(mixPrice)) {
                        await MixContract.approve(this.address, constants.MaxUint256);

                        setTimeout(async () => {
                            await this.runWalletMethodWithLargeGas("compound", biasId, cardId, uri, signature);
                        }, 2000);
                    }
                }, 2000);
            }

            else {
                // 믹스 사용 허락 체크
                if ((await MixContract.allowance(owner, this.address)).lt(mixPrice)) {
                    await MixContract.approve(this.address, constants.MaxUint256);

                    setTimeout(async () => {
                        await this.runWalletMethodWithLargeGas("compound", biasId, cardId, uri, signature);
                    }, 2000);
                }

                else {
                    await this.runWalletMethodWithLargeGas("compound", biasId, cardId, uri, signature);
                }
            }
        }
        return true;
    }


    public async withdrawMix(biasId: BigNumberish): Promise<void> {
        await this.runWalletMethod("withdrawMix", biasId);
    }
}

export default new BiasContractContract();
