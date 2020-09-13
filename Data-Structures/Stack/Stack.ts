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

export default Stack;
