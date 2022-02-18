import WalletConnectProvider from "@walletconnect/web3-provider";
import { BigNumber, BigNumberish, ethers } from "ethers";
import { splitSignature } from "ethers/lib/utils";
import EventContainer from "eventcontainer";

class EthereumWallet extends EventContainer {

    private ethereum: any | undefined = (window as any).ethereum;
    public get existsInjectedProvider() { return this.ethereum !== undefined; }
    private walletConnectProvider: WalletConnectProvider | undefined;

    public provider: ethers.providers.Web3Provider;
    public signer: ethers.providers.JsonRpcSigner;

    constructor() {
        super();
        if (this.existsInjectedProvider === true) {
            this.provider = new ethers.providers.Web3Provider(this.ethereum);
            this.ethereum.on("chainChanged", (chainId: string) => {
                this.provider = new ethers.providers.Web3Provider(this.ethereum);
                this.signer = this.provider.getSigner();
                this.fireEvent("chainchange", BigNumber.from(chainId).toNumber());
            });
        } else {
            this.walletConnectProvider = new WalletConnectProvider({ infuraId: "4d08e8ac01134ac0abe286403de9e9ac" });
            this.provider = new ethers.providers.Web3Provider(this.walletConnectProvider);
            this.walletConnectProvider.on("chainChanged", (chainId: number) => {
                this.fireEvent("chainchange", chainId);
            });
        }
        this.signer = this.provider.getSigner();
        this.checkConnected();
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        if (this.walletConnectProvider?.connected === false) {
            return undefined;
        }
        return (await this.provider.listAccounts())[0];
    }

    public async loadChainId() {
        const network = await this.provider.getNetwork();
        return network.chainId;
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        if (this.existsInjectedProvider === true) {
            await this.ethereum.request({ method: "eth_requestAccounts" });
        } else {
            await this.walletConnectProvider?.enable();
        }
        this.checkConnected();
    }

    public async disconnectFromWalletConnect() {
        if (this.existsInjectedProvider !== true) {
            await this.walletConnectProvider?.disconnect();
            location.reload();
        }
    }

    public async changeNetwork(
        chainId: number,
        chainName: string,
        currency: {
            name: string,
            symbol: string,
            decimals: number,
        },
        rpc: string,
        blockExplorer?: string,
    ) {

        let provider;
        if (this.existsInjectedProvider === true) {
            provider = this.ethereum;
        } else {
            provider = this.walletConnectProvider;
        }

        if (provider !== undefined) {

            await provider.request({
                method: "wallet_addEthereumChain", params: [{
                    chainId: ethers.utils.hexlify(chainId),
                    chainName,
                    nativeCurrency: currency,
                    rpcUrls: [rpc],
                    blockExplorerUrls: blockExplorer === undefined ? [] : [blockExplorer]
                }],
            });

            await provider.request({
                method: "wallet_switchEthereumChain", params: [{
                    chainId: ethers.utils.hexlify(chainId),
                }],
            });
        }
    }

    public async signTypedData(
        owner: string | undefined,

        name: string,
        version: string,
        verifyingContract: string,

        Permit: {
            name: string;
            type: string;
        }[],
        message: any,
    ) {
        const EIP712Domain = [
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
        ];

        const domain = {
            name,
            version,
            chainId: 1,
            verifyingContract,
        };

        const data = JSON.stringify({
            types: {
                EIP712Domain,
                Permit,
            },
            domain,
            primaryType: "Permit",
            message,
        });

        let signedMessage;
        if (this.existsInjectedProvider === true) {
            signedMessage = await this.ethereum.request({
                method: "eth_signTypedData_v4",
                params: [owner, data],
                from: owner,
            });
        } else {
            signedMessage = await this.walletConnectProvider?.request({
                method: "eth_signTypedData",
                params: [owner, data],
                from: owner,
            });
        }

        const signature = splitSignature(signedMessage);
        return {
            v: signature.v,
            r: signature.r,
            s: signature.s,
        };
    }

    public async signERC20Permit(

        name: string,
        version: string,
        verifyingContract: string,

        spender: string,
        amount: BigNumberish,
        nonce: BigNumber,
        deadline: number,
    ) {
        const owner = await this.loadAddress();

        const Permit = [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ];

        const message = {
            owner,
            spender,
            value: BigNumber.from(amount).toString(),
            nonce: BigNumber.from(nonce).toHexString(),
            deadline: BigNumber.from(deadline).toString(),
        };

        return await this.signTypedData(owner, name, version, verifyingContract, Permit, message);
    }

    public async signERC721Permit(

        name: string,
        version: string,
        verifyingContract: string,

        spender: string,
        id: BigNumber,
        nonce: BigNumber,
        deadline: number,
    ) {
        const owner = await this.loadAddress();

        const Permit = [
            { name: "spender", type: "address" },
            { name: "id", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ];

        const message = {
            spender,
            id: BigNumber.from(id).toHexString(),
            nonce: BigNumber.from(nonce).toHexString(),
            deadline: BigNumber.from(deadline).toString(),
        };

        return await this.signTypedData(owner, name, version, verifyingContract, Permit, message);
    }

    public async signERC721PermitAll(

        name: string,
        version: string,
        verifyingContract: string,

        spender: string,
        nonce: BigNumber,
        deadline: number,
    ) {
        const owner = await this.loadAddress();

        const Permit = [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ];

        const message = {
            owner,
            spender,
            nonce: BigNumber.from(nonce).toHexString(),
            deadline: BigNumber.from(deadline).toString(),
        };

        return await this.signTypedData(owner, name, version, verifyingContract, Permit, message);
    }

    public async signERC1155Permit(

        name: string,
        version: string,
        verifyingContract: string,

        spender: string,
        nonce: BigNumber,
        deadline: number,
    ) {
        const owner = await this.loadAddress();

        const Permit = [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ];

        const message = {
            owner,
            spender,
            nonce: BigNumber.from(nonce).toHexString(),
            deadline: BigNumber.from(deadline).toString(),
        };

        return await this.signTypedData(owner, name, version, verifyingContract, Permit, message);
    }

    public async addToken(
        address: string,
        symbol: string,
        decimals: number,
        image: string,
    ) {
        if (await this.loadChainId() !== 1) {
            alert("Wrong Network. Please change to Ethereum.");
            this.disconnectFromWalletConnect();
        } else {
            let provider;
            if (this.existsInjectedProvider === true) {
                provider = this.ethereum;
            } else {
                provider = this.walletConnectProvider;
            }
            if (provider !== undefined) {
                provider.request({
                    method: "wallet_watchAsset",
                    params: {
                        type: "ERC20",
                        options: { address, symbol, decimals, image },
                    },
                });
            }
        }
    }

    public async signMessage(message: string) {
        const address = await this.loadAddress();
        let signedMessage;
        if (this.existsInjectedProvider === true) {
            signedMessage = await this.ethereum.request({
                method: "personal_sign",
                params: [message, address],
            });
        } else {
            signedMessage = await this.walletConnectProvider?.request({
                method: "personal_sign",
                params: [message, address],
            });
        }
        return signedMessage;
    }
}

export default new EthereumWallet();
