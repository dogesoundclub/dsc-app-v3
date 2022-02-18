import { BigNumber } from "@ethersproject/bignumber";
declare class Klaytn {
    private caver;
    createContract(address: string, abi: any): any;
    balanceOf(address: string): Promise<BigNumber>;
    loadBlockNumber(): Promise<any>;
}
declare const _default: Klaytn;
export default _default;
//# sourceMappingURL=Klaytn.d.ts.map