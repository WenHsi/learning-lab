class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        console.log(this.top)
        return this.top;
    }
    push(value) {
        let newNode;
        if (this.length) {
            newNode = new Node(value, this.top);
        } else {
            newNode = new Node(value, null);
            this.bottom = newNode;
        }
        this.top = newNode;
        this.length++;
        return this;
    }
    pop() {
        if (!this.length) return null;
        if (this.top === this.bottom) this.bottom = null;
        
        this.top = this.top.next;
        this.length--;
        return this.length;
    }
    isEmpty() {
        console.log(this.length === 0)
        return this.length === 0;
    }
    showLog() {
        const stack = [];
        let currNode = this.top;
        while(currNode) {
            stack.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(this)
        console.log(stack);
        return stack;
    }
}

const stackInst = new Stack();
stackInst.push("Google");
stackInst.push("Facebook");
stackInst.push("Buy");
stackInst.push("Udemy");
stackInst.push("YPSP");
stackInst.push("ZZZZ");
stackInst.peek();
stackInst.showLog();