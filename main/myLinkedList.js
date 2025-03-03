class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    // 10 => 5 => 16
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const arr = [];
        let currNode = this.head;
        while(currNode) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(arr);
        return arr;
    }
    insert(index, value) {
        if (index < 1) return this.prepend(value);
        if (index >= this.length) return this.append(value);
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currNode = this.head;
        while(counter !== index) {
            currNode = currNode.next;
            counter++;
        }
        return currNode;
    }
    remove(index){
        if (index < 0) throw new Error("Index cannot be less than 0");
        if (index >= this.length) throw new Error("Index cannot be greater than the current length");
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }

        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next.next;
        leader.next = holdingPointer;
        this.length--;
        return this;
    }
    reverse() {
        const allNode = [];
        let currNode = this.head;
        while(currNode) {
            allNode.push(currNode);
            currNode = currNode.next;
        }
        for (let i = allNode.length-1; i > 0; i--) {
            allNode[i].next = allNode[i-1];
            if (i === 1) {
                allNode[0].next = null;
            }
        }
        this.head = allNode[this.length-1];
        this.tail = allNode[0];
        return this;
    }
}

class Version {
    static insert1(index, value) {
        if (index < 0 || index >= this.length) throw new Error("Index must be less than the current length");
        const newNode = new Node(value);
        let currNode = this.head;
        let lastNode;
        let count = 0;
        if (index === 0) {
            this.prepend(value);
            return this;
        }
        while(index !== count) {
            lastNode = currNode;
            currNode = currNode.next;
            count++;
        }
        lastNode.next = newNode;
        newNode.next = currNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 20);
myLinkedList.reverse()
myLinkedList.printList();