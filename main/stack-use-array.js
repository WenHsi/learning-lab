class Stack {
    constructor() {
        this.stack = [];
    }
    peek() {
        return this.stack[this.stack.length-1];
    }
    push(value) {
        return this.stack.push(value);
    }
    pop() {
        return this.stack.pop();
    }
    get length() {
        return this.stack.length;
    }
    remove() {
        return this.stack = [];
    }
}

const stackInst = new Stack();

console.log(stackInst.peek())
stackInst.push("Windows");
stackInst.push("Mac");

console.log(stackInst.peek())
console.log(stackInst.length)