# Queue

## 정의

큐<sub>queue</sub>은 FIFO<sub>First In First Out</sub>(선입선출)원리에 따라 정렬된 컬렉션이다.

## 메서드

- enqueue(...args): 큐의 뒤쪽에 원소(들)를 추가한다.
- dequeue(): 큐의 첫 번째 원소(큐의 맨 앞쪽에 위치한 원소)를 반환하고 큐에서 삭제한다.
- front(): 큐의 첫 번째 원소를 반환하되 큐 자체는 그대로 놔둔다. (큐 참조 용도)
- isEmpty(): 큐가 비어 있으면 `true` 를, 그 외에는 `false` 를 반환하다.
- size(): 큐의 원소 개수를 반환한다.

## 타입스크립트로 큐 구현하기

```TS
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

const queue = new Queue<string>();
console.log(queue.isEmpty()); // true;

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print(); // John, Jack, Camila
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false
queue.dequeue();
queue.dequeue();
queue.print(); // Camila
```
