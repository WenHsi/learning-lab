class Algo {
    constructor() {
        this.name = this._firstLetterLower(this.constructor.name);
    }
    exec(version, data) {
        this.verify(...data);
        this.validateVersion(version);
        this.showExecInfo(version);

        console.time('Spend time')
        const result = this[this.name](version, ...data);
        console.timeEnd('Spend time')
        console.warn("Result:");
        console.warn(result);
        return result;
    }
    input(...data) {
        return data;
    }
    verify() {
        throw Error("Must override 'verify' method.")
    }
    validateVersion(version) {
        if (!_isVersionFn.bind(this)(this.name, version)) throw new Error('Not found version of function: v.'+ version);
        function _isVersionFn(FnName, version) {
            if (version < 1) return;
            const isFn = Object.getOwnPropertyNames(Object.getPrototypeOf(this)).some((name) => name === FnName + version);
            return isFn;
        }
    }
    showExecInfo(version) {
        console.log(`Running '${this.name}' function using version:`, version);
    }

    // Test different version performance.
    test(amount) {
        this.verify(...amount);
        const versions = Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter(name => {
            return name.startsWith(this.name) &&
                   name !== this.name;
        })
        versions.forEach(v => {
            console.time("Testing: " + v);
            this[v](...amount);
            console.timeEnd("Testing: " + v);
        })
    }
    _firstLetterLower(str) {
        const letterArr = str.split('');
        letterArr[0] = letterArr[0].toLocaleLowerCase();
        return letterArr.join('');
    }
}

export class Reverse extends Algo {
    constructor() {
        super();
    }
    verify(str) {
        if (!str || str.length < 1 || typeof str !== "string") throw new Error('Invalid string');
    }
    reverse(version, str) {
        console.log(str)
        if (str.length === 1) return str;
        return this[this.name+version](str);
    }
    reverse1(str) {
        const tmpArr = str.split('');
        const newArr = [];
        for (let i = 0; i < tmpArr.length; i++) {
            newArr[tmpArr.length-1-i] = tmpArr[i];
        }
        const result = newArr.join('');
        return result;
    }
    reverse2(str) {
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            newStr += str[str.length-1-i];
        }
        return newStr;
    }
    reverse3(str) {
        let newStr = "";
        for (let i = str.length-1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
    reverse4(str) {
        return str.split('').reverse().join('');
    }
    test(amount=['a'.repeat(1000000)]) {
        super.test(amount);
    }
}

export class MergeSortedArrays extends Algo {
    constructor() {
        super();
    }
    verify(arr1, arr2) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error("Invalid input");
    }
    mergeSortedArrays(version, arr1, arr2) {
        // [-2, 0,3,4,67,887,3442], [-323,0,24,523]
        if (arr1.length === 0) return arr2;
        if (arr2.length === 0) return arr1;
        return this[this.name+version](arr1, arr2);
    }
    mergeSortedArrays1(arr1, arr2) {
        let p1 = 0;
        let p2 = 0;
        const result = [];
        while(p1 < arr1.length && p2 < arr2.length) {
            if (arr1[p1] <= arr2[p2]) {
                result.push(arr1[p1])
                p1++;
            } else if (arr1[p1] > arr2[p2]) {
                result.push(arr2[p2]);
                p2++;
            }
        }
        while(p1 !== arr1.length || p2 !== arr2.length) {
            if (p1 !== arr1.length) {
                result.push(arr1[p1]);
                p1++;
            } else if (p2 !== arr2.length) {
                result.push(arr2[p2]);
                p2++;
            }
        }
        return result;
    }
    mergeSortedArrays2(arr1, arr2) {
        const result = [];
        let item1 = arr1[0];
        let item2 = arr2[0];
        let i = 1;
        let j = 1;

        while(item1 !== undefined || item2 !== undefined) {
            if (_shouldShiftFirstArrayItem(item1, item2)) {
                result.push(+item1);
                item1 = arr1[i];
                i++;
            } else {
                result.push(+item2);
                item2 = arr2[j];
                j++;
            }
        }
        return result;

        function _shouldShiftFirstArrayItem(item1, item2) {
            return item2 === undefined || item1 < item2;
        }
    }
    test(amount) {
        super.test(amount);
    }
}

export class firstRecurringCharacter extends Algo {
    //  Google Question
    // [2,5,1,2,3,5,1,2,4] return 2
    // [2,1,1,2,3,5,1,2,4] return 1
    // [2,3,4,5] return undefined
    // [2,5,5,2,3,5,1,2,4] return 5
    // bonus: 新增指定出現次數。預設一樣為 2;
    constructor() {
        super();
    }
    verify(arr) {
        if (!Array.isArray(arr)) throw new Error("Invalid input");
    }
    firstRecurringCharacter(version, arr, bound) {
        if (arr.length < 2) return undefined;
        return this[this.name+version](arr, bound);
    }
    firstRecurringCharacter1(arr, bound=2) {
        if (bound === 1) return arr[0];
        this.map = {};
        for (const i of arr) {
            if (!this.map[i]) {
                this.map[i] = 1;
                continue;
            }
            this.map[i]++;
            if (this.map[i] === bound) return i;
        }
        return undefined;
    }
    test(amount=[2,5,1,2,3,5,1,2,4], bound) {
        super.test([amount, bound]);
    }
}