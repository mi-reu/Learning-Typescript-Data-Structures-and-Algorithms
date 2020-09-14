class QueueHelper<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  print() {
    console.log(JSON.stringify(this.items));
  }
}

class Queue<T> extends QueueHelper<T> {
  items: T[];

  constructor() {
    super();

    this.items = [];
  }

  enqueue(element: T, ...args: T[]) {
    this.items.push(element, ...args);
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
