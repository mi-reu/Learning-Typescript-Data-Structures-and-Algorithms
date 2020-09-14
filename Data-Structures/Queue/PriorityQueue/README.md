# PriorityQueue

## 정의

우선순위 큐<sub>priority queue</sub>는 원소가 우선순위에 따라 추가되고 삭제되는 점이 큐<sub>queue</sub>와 다르다. 우선순위 큐는 우선순위를 설정해 원소를 정확한 위치에 추가하는 것, 그리고 추가는 순서대로 하되 삭제만 우선순위에 따르는 것, 두 가지 방법으로 구현할 수 있다.

## 메서드

Queue 와 동일(단, enqueue 메서드의 경우 내부 로직이 다르다.)

## 타입스크립트로 큐 구현하기

```TS
interface QueueElement<T> {
  element: T;
  priority: number;
}

class PriorityQueue<T> {
  items: QueueElement<T>[];

  constructor() {
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

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camila', 1);
priorityQueue.print(); // [{"element":"Jack","priority":1},{"element":"Camila","priority":1},{"element":"John","priority":2}]
```
