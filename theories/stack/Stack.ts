interface StackClass<T> {
  items: T[];
  push: (item: T, ...args: T[]) => void;
  pop: () => T;
  peek: () => T;
  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
}

interface StackHelperClass<T> {
  items: T[];
  print: () => void;
}

class StackHelper<T> implements StackHelperClass<T> {
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
    this.items = [];
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
