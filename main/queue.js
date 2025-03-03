class Event {
    constructor() {
        this.types = {};
        this.onceTypes = {};
    }

    addListener(name, cb) {
        if (!this.types[name]) {
            this.types[name] = [];
        }
        if (this.types[name].indexOf(cb) != -1) return;

        this.types[name].push(cb);
        return cb
    }

    once(name, cb) {
        if (!this.onceTypes[name]) {
            this.onceTypes[name] = [];
        }
        if (this.onceTypes[name].indexOf(cb) != -1) return;
        this.onceTypes[name].push(cb);
        return cb
    }

    emit(name, data) {
        if (this.types[name]) {
            for (const cb of this.types[name]) {
                cb(data);
            }
        }
        
        if (this.onceTypes[name]) {
            // 不按照監聽順序，隨機給不同使用者號碼。
            const random = Math.floor(Math.random() * this.onceTypes[name].length);
            const cb = this.onceTypes[name][random];
            if (!cb) return;
            cb(data);
            this.onceTypes[name].splice(random, 1);
        };
    }

    remove(name) {
        if (!this.types[name]) return;
        delete this.types[name];
    }
}

const eventInst = new Event();

class Queue {
    constructor() {
        this.queue = [];
        this.counter = 1;
    }

    enqueue(data) {
        this.queue.push(data);
    }

    async dequeue() {
        return this._checkAndReturnQueueValue();
    }

    async _checkAndReturnQueueValue() {
        if (!this.queue.length) {
            const p = await new Promise((resolve) => {
                eventInst.once('haveNewValue', (v) => {
                    resolve(v);
                })
            })
            return p;
        }
        return this.queue.shift();
    }

    increaseEverySecond() {
        setInterval(() => {
            this.enqueue(this.counter);
            eventInst.emit('haveNewValue', this.counter);
            this.counter++;
        }, 1000)
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
}

function createConsumer(count) {
    const consumers = [];
    for (let i = 1; i <= count; i++) {
        consumers.push(new Consumer(i));
    }
    return consumers;
}

async function getAllConsumerIdFromQueue(consumers, queueInst) {
    const promises = [];
    for (const c of consumers) {
        promises.push(c.getId(queueInst.dequeue()));
    }
    const result = await Promise.all(promises);
    return result;
}

async function start() {
    const queueInst = new Queue();
    queueInst.increaseEverySecond();
    const consumers = createConsumer(5);
    const result = await getAllConsumerIdFromQueue(consumers, queueInst);
    
    console.log(result);
    return result;
}

start();


