interface QueueElement<T> {
  element: T;
  priority: number;
}

class PriorityQueueHelper<T> {
  items: QueueElement<T>[];

  constructor() {
    this.items = [];
  }

  print() {
    console.log(JSON.stringify(this.items));
  }
}

class PriorityQueue<T> extends PriorityQueueHelper<T> {
  items: QueueElement<T>[];

  constructor() {
    super();

    this.items = [];
  }

  enqueue(element: T, priority: number) {
    const queueElement = { element, priority };

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let isAdded = false;

      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);

          isAdded = true;

          break;
        }
      }

      if (!isAdded) {
        this.items.push(queueElement);
      }
    }
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

export default PriorityQueue;
