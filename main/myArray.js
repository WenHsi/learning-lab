export class MyArray{
    constructor() {
        this.length = 0;
        this.values = {};
    }

    get(index) {
        return this.values[index];
    }

    push(value) {
        const item = this.values[this.length] = value;
        this.length++;
        return item;
    }

    insert(index, value) {
        if (index > this.length || index < 0) return null;
        UtilsOfMyArray.unshiftItems(index, this.values, this.length);
        const newItem = this.values[index] = value;
        this.length++;
        console.log("insert",newItem);
        return newItem;
    }

    delete(index) {
        const deleteItem = this.values[index];
        UtilsOfMyArray.shiftItems(index, this.values, this.length);
        this.length--;
        return deleteItem;
    }
}

class UtilsOfMyArray{
    static shiftItems(index, values, length){
        for (let i = +index; i < length -1; i++) {
            values[i] = values[i+1];
        }
        delete values[length-1];
    }

    static unshiftItems(index, values, length) {
        for (let i = length-1; i >= index; i--) {
            values[i+1] = values[i];
        }
    }
}