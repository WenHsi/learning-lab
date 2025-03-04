class Queue {
    constructor() {
        this.queue = [];
        this.channel = [];
    }
    enqueue(data) {
        this.queue.push(data);
        this._emit();
    }
    async dequeue() {
        if (!this.queue.length) {
            const id = await this._waitEvent();
            return id;
        }
        return this.queue.shift();
    }
    async _emit() {
        if (! this.channel.length) return;

        const random = Math.floor(Math.random() * this.channel.length);
        const request = this.channel[random];
        request(this.queue.shift());
        this.channel.splice(random, 1);
    }
    async _waitEvent() {
        const result = await new Promise((resolve) => {
            this.channel.push(_request);
            function _request(id) {
                resolve(id);
            }
        })
        return result;
    }
}

class Consumer {
    constructor(name) {
        this.name = name;
        this.id = null;
    }
    async getId(id) {
        this.id = await id;
        return this;
    }
    static createConsumer(count) {
        const consumers = [];
        for (let i = 1; i <= count; i++) {
            consumers.push(new Consumer(i));
        }
        return consumers;
    }
}

let queueInst;
class Id {
    constructor() {
        this.id = 1;
    }
    generateId() {
        setInterval(() => {
            queueInst.enqueue(this.id);
            this.id++;
        }, 1000)
    }
}

async function getIdForAllConsumer(consumers) {
    const p = [];
    for (const c of consumers) {
        p.push(c.getId(queueInst.dequeue()));
    }
    const result = await Promise.all(p);
    return result;
}

async function start() {
    const idInst = new Id();
    queueInst = new Queue();

    idInst.generateId();
    const consumers = Consumer.createConsumer(5);
    const result = await getIdForAllConsumer(consumers);

    console.log(result);
    return result;
}

start();


