interface QueueClass<T> {
  items: T[];
  enqueue: (item: T, ...args: T[]) => void;
  dequeue: () => T;
  front: () => T;
  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
}

class QueueHelper<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

class Queue<T> extends QueueHelper<T> implements QueueClass<T> {
  items: T[];

  constructor() {
    super();

    this.items = [];
  }

  enqueue(item: T, ...args: T[]) {
    this.items.push(item, ...args);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

export default Queue;
