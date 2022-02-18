import { BigNumber, BigNumberish, ethers } from "ethers";
import EventContainer from "eventcontainer";
declare class EthereumWallet extends EventContainer {
    private ethereum;
    get existsInjectedProvider(): boolean;
    private walletConnectProvider;
    provider: ethers.providers.Web3Provider;
    signer: ethers.providers.JsonRpcSigner;
    constructor();
    private checkConnected;
    loadAddress(): Promise<string | undefined>;
    loadChainId(): Promise<number>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
    disconnectFromWalletConnect(): Promise<void>;
    changeNetwork(chainId: number, chainName: string, currency: {
        name: string;
        symbol: string;
        decimals: number;
    }, rpc: string, blockExplorer?: string): Promise<void>;
    signTypedData(owner: string | undefined, name: string, version: string, verifyingContract: string, Permit: {
        name: string;
        type: string;
    }[], message: any): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC20Permit(name: string, version: string, verifyingContract: string, spender: string, amount: BigNumberish, nonce: BigNumber, deadline: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC721Permit(name: string, version: string, verifyingContract: string, spender: string, id: BigNumber, nonce: BigNumber, deadline: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC721PermitAll(name: string, version: string, verifyingContract: string, spender: string, nonce: BigNumber, deadline: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC1155Permit(name: string, version: string, verifyingContract: string, spender: string, nonce: BigNumber, deadline: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    addToken(address: string, symbol: string, decimals: number, image: string): Promise<void>;
    signMessage(message: string): Promise<any>;
}
declare const _default: EthereumWallet;
export default _default;
//# sourceMappingURL=EthereumWallet.d.ts.map