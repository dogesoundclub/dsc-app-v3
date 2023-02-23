import Contract from "./Contract";
declare class NameV2Contract extends Contract {
    constructor();
    set(nft: string, mateId: Number, name: string): Promise<void>;
    remove(nft: string, mateId: Number): Promise<void>;
    exists(name: string): Promise<boolean>;
    names(nft: string, mateId: Number): Promise<string>;
    named(nft: string, mateId: Number): Promise<boolean>;
}
declare const _default: NameV2Contract;
export default _default;
//# sourceMappingURL=NameV2Contract.d.ts.map