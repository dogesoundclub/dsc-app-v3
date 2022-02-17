export default class Store {
    private name;
    constructor(name: string);
    set(key: string, value: any, permanently?: boolean): void;
    get<T>(key: string, defaultValue?: T): T | undefined;
    checkPermanently(key: string): boolean;
    delete(key: string): void;
}
//# sourceMappingURL=Store.d.ts.map