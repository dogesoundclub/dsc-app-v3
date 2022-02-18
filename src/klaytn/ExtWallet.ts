import { BigNumber } from "@ethersproject/bignumber";
import EventContainer from "eventcontainer";

class ExtWallet extends EventContainer {

    private klaytn: any | undefined = (window as any).klaytn;
    private caver: any | undefined = (window as any).caver;

    constructor() {
        super();
        this.checkConnected();
    }

    public get installed() {
        return this.klaytn !== undefined && this.caver !== undefined;
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        return this.caver === undefined ? undefined : (await this.caver.klay.getAccounts())[0];
    }

    public async loadChainId() {
        return this.caver === undefined ? -1 : await this.caver.klay.getChainId();
    }

    public async loadBlockNumber() {
        return this.caver === undefined ? -1 : await this.caver.klay.getBlockNumber();
    }

    public async balanceOf(address: string) {
        return this.caver === undefined ? undefined : BigNumber.from(await this.caver.klay.getBalance(address));
    }

    public async loadBalance() {
        const address = await this.loadAddress();
        return address === undefined ? BigNumber.from(0) : await this.balanceOf(address);
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        await this.klaytn?.enable();
        this.checkConnected();
    }

    public createContract(address: string, abi: any) {
        return this.caver === undefined ? undefined : new this.caver.klay.Contract(abi, address);
    }

    public addToken(
        address: string,
        symbol: string,
        decimals: number,
        image: string,
    ) {
        this.klaytn?.sendAsync({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: { address, symbol, decimals, image },
            },
            id: Math.round(Math.random() * 100000),
        });
    }

    public async signMessage(message: string) {
        const address = await this.loadAddress();
        return address === undefined ? undefined : this.caver?.klay.sign(message, address);
    }
}

export default new ExtWallet();
