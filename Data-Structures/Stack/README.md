# Stack

## 정의

스택<sub>stack</sub>은 LIFO<sub>last in first out</sub>(후입선출)원리에 따라 정렬된 컬렉션이다.

## 메서드

- `push(...args)` : 스택 꼭대기에 새 원소(들)를 추가한다.
- `pop()` : 스택 꼭대기에 있는 원소를 반환하고 해당 원소는 스택에서 삭제한다.
- `peek()` : 스택 꼭대기에 있는 원소를 반환하되 스택은 변경하지 않는다. (스택 참조 용도)
- `isEmpty()` : 스택에 원소가 하나도 없으면 `true`, 스택의 크기가 0보다 크면 `false` 를 반환한다.
- `clear()` : 스택의 모든 원소를 제거한다.
- `size()` : 스택의 원소 개수를 반환한다.

## 타입스크립트로 스택 구현하기

```TS
interface StackClass<T> {
  items: T[];
  push: (item: T, ...args: T[]) => void;
  pop: () => T;
  peek: () => T;
  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
}

class StackHelper<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

class Stack<T> extends StackHelper<T> implements StackClass<T> {
  items: T[];

  constructor() {
    super();

    this.items = [];
  }

  push(item: T, ...args: T[]) {
    this.items.push(item, ...args);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    return (this.items = []);
  }
}

const stack = new Stack<number>();

console.log(stack.push(1)); // [1]
console.log(stack.push(2, 3)); // [1, 2, 3]
console.log(stack.print()); // 1, 2, 3
console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.size()); // 1
console.log(stack.pop()); // 1
console.log(stack.isEmpty()); // true
console.log(stack.print()); // undefined
```
