export default class myHashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) ** i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);

        console.log("Set value:", value ,"address:", this._hash(key));
    }

    get(key) {
        if (!key) return undefined;
        const address = this._hash(key);
        const currBucket = this.data[address];

        // const result = this.data[address]?.filter(i => i[0] === key).map(i => i[1])[0];
        if (!currBucket) return undefined;
        for (const i of currBucket) {
            if (i[0] === key) {
                return i[1];
            }
        }
        return undefined;
    }

    keys() {
        const keysArr = [];
        for (const i in this.data) {
            if (this.data[i]) {
                for (const k of this.data[i]) {
                    keysArr.push(k[0]);
                }
            }
        }
        return keysArr;
    }
}