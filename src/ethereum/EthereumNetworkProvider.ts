import { ethers } from "ethers";
import EventContainer from "eventcontainer";

class EthereumNetworkProvider extends EventContainer {

    public provider: ethers.providers.WebSocketProvider;
    public signer: ethers.providers.JsonRpcSigner;

    constructor() {
        super();
        this.provider = new ethers.providers.WebSocketProvider("wss://mainnet.infura.io/ws/v3/79f21bf16c274c27ac12b933724380a3");
        this.signer = this.provider.getSigner(ethers.constants.AddressZero);
    }

    public async getBlockNumber() {
        return await this.provider.getBlockNumber();
    }

    public async getBalance(address: string) {
        return await this.provider.getBalance(address);
    }
}

export default new EthereumNetworkProvider();
