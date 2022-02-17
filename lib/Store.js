"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor(name) {
        this.name = name;
    }
    set(key, value, permanently = false) {
        (permanently === true ? localStorage : sessionStorage).setItem(`${this.name}/${key}`, JSON.stringify(value));
        (permanently === true ? sessionStorage : localStorage).removeItem(`${this.name}/${key}`);
    }
    get(key, defaultValue) {
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
    checkPermanently(key) {
        return localStorage.getItem(`${this.name}/${key}`) !== null;
    }
    delete(key) {
        sessionStorage.removeItem(`${this.name}/${key}`);
        localStorage.removeItem(`${this.name}/${key}`);
    }
}
exports.default = Store;
//# sourceMappingURL=Store.js.map