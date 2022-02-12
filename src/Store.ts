export default class Store {
    constructor(private name: string) { }

    public set(key: string, value: any, permanently: boolean = false) {
        (permanently === true ? localStorage : sessionStorage).setItem(`${this.name}/${key}`, JSON.stringify(value));
        (permanently === true ? sessionStorage : localStorage).removeItem(`${this.name}/${key}`);
    }

    public get<T>(key: string, defaultValue?: T): T | undefined {
        let value = sessionStorage.getItem(`${this.name}/${key}`);
        if (value === null) {
            value = localStorage.getItem(`${this.name}/${key}`);
            if (value === null) {
                return defaultValue;
            }
        }
        return value === null ? undefined : JSON.parse(value, (k, array) => {
            if (Array.isArray(array) === true) {
                for (const [index, v] of array.entries()) {
                    if (v === null) {
                        array[index] = undefined;
                    }
                }
            }
            return array;
        });
    }

    public checkPermanently(key: string): boolean {
        return localStorage.getItem(`${this.name}/${key}`) !== null;
    }

    public delete(key: string) {
        sessionStorage.removeItem(`${this.name}/${key}`);
        localStorage.removeItem(`${this.name}/${key}`);
    }
}
