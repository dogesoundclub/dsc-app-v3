const TESTNET = false;

export default {

    isTestnet: TESTNET,
    chainId: TESTNET ? 1001 : 8217,

    contracts: TESTNET ? {
        // Testnet
    } : {
        // Mainnet
    },
};
