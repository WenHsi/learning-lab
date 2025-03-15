class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value, null);
        if (this.length !== 0) {
            this.last.next = newNode;
            this.last = newNode;
        } else {
            this.first = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.length) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
    isEmpty() {
        return this.length === 0;
    }
}
const queue = new Queue();
queue.enqueue("Apple")
queue.enqueue("Banana")
queue.enqueue("Haha")
queue.enqueue("Xxxx")
queue.enqueue("Yxxx")
queue.dequeue();
queue.dequeue();

console.log(queue.peek())
console.log(queue.isEmpty())