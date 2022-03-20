import { BigNumber } from "ethers";
import Alert from "../view/shared/Alert";
import Klaytn from "../klaytn/Klaytn";
import Wallet from "../klaytn/Wallet";
import BiasMinterArtifact from "./abi/bias/artifacts/contracts/BiasMinter.sol/BiasMinter.json";
import Contract from "./Contract";

class BiasMinterContract extends Contract {

    constructor() {
        super("0x320d5525059E0916F310e87619C5dc91081B49f9", BiasMinterArtifact.abi);
    }

    public async step(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("step"));
    }

    public async presalePrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("presalePrice"));
    }

    public async public1Price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("public1Price"));
    }

    public async public2Price(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("public2Price"));
    }

    public async ticketPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("ticketPrice"));
    }

    public async calculatedPrice(): Promise<BigNumber> {
        const step = (await this.step()).toNumber();
        if (step <= 1) {
            return await this.presalePrice();
        } else if (step === 2) {
            return await this.public1Price();
        } else if (step === 3) {
            return await this.public2Price();
        } else if (step === 4) {
            return await this.ticketPrice();
        } else {
            return BigNumber.from(0);
        }
    }

    public async currentId(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("currentId"));
    }

    public async presaleCount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("presaleCount"));
    }

    public async public1Count(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("public1Count"));
    }

    public async public2Count(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("public2Count"));
    }

    public async ticketCount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("ticketCount"));
    }

    public async presaleWhitelist(user: string): Promise<boolean> {
        return await this.runMethod("presaleWhitelist", user);
    }

    public async ticketWhitelist(user: string): Promise<boolean> {
        return await this.runMethod("ticketWhitelist", user);
    }

    public async mint(count: number): Promise<void> {
        const step = (await this.step()).toNumber();
        if (step === 0) {
            new Alert("현재 민팅 진행중이 아닙니다. 민팅은 3월 17일 밤 8시부터 시작됩니다.");
        } else {
            const address = await Wallet.loadAddress();
            if (address !== undefined) {

                let price!: BigNumber;
                let amount!: BigNumber;

                if (step === 1) {
                    price = (await this.presalePrice()).mul(count);
                    amount = await this.presaleCount();
                } else if (step === 2) {
                    price = (await this.public1Price()).mul(count);
                    amount = await this.public1Count();
                } else if (step === 3) {
                    price = (await this.public2Price()).mul(count);
                    amount = await this.public2Count();
                } else if (step === 4) {
                    price = (await this.ticketPrice()).mul(count);
                    amount = await this.ticketCount();
                }

                if (amount.lt(count)) {
                    new Alert(`현재 Round에서 남은 개수는 ${amount}개입니다.`);
                } else if (
                    step === 1 &&
                    await this.presaleWhitelist(address) !== true
                ) {
                    new Alert("화이트리스트 대상이 아닙니다.");
                } else if (
                    step === 4 &&
                    await this.ticketWhitelist(address) !== true
                ) {
                    new Alert("화이트리스트 대상이 아닙니다.");
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

export default new BiasMinterContract();
