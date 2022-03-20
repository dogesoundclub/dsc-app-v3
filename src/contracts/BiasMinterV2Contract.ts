import { BigNumber } from "ethers";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";
import Alert from "../view/shared/Alert";
import BiasMinterV2Artifact from "./abi/bias/artifacts/contracts/BiasMinterV2.sol/BiasMinterV2.json";
import Contract from "./Contract";

class BiasMinterV2Contract extends Contract {

    constructor() {
        super("0x402843d978202915b75dBF142De9821a4eaF43A9", BiasMinterV2Artifact.abi);
    }

    public async step(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("step"));
    }

    public async discountPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("discountPrice"));
    }

    public async price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("price"));
    }

    public async currentId(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("currentId"));
    }

    public async amount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("amount"));
    }

    public async discountList(user: string): Promise<boolean> {
        return await this.runMethod("discountList", user);
    }

    public async mint(count: number): Promise<void> {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            new Alert("현재 민팅 진행중이 아닙니다. 민팅은 3월 21일 밤 8시부터 시작됩니다.");
        } else {
            const address = await Wallet.loadAddress();
            if (address !== undefined) {

                let price!: BigNumber;
                let amount = await this.amount();

                if (await this.discountList(address) === true) {
                    price = (await this.discountPrice()).mul(count);
                } else {
                    price = (await this.price()).mul(count);
                }

                if (amount.lt(count)) {
                    new Alert(`현재 Round에서 남은 개수는 ${amount}개입니다.`);
                } else {
                    const balance = await Klaytn.balanceOf(address);
                    if (balance === undefined || balance.lt(price)) {
                        new Alert("Klay가 부족합니다.");
                    } else {
                        await this.runWalletMethodWithValue(price, "mint", count);
                        new Alert("축하합니다! 민팅에 성공하셨습니다!");
                    }
                }
            }
        }
    }
}

export default new BiasMinterV2Contract();
