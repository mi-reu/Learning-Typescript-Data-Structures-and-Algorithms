class StackHelper<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

class Stack<T> extends StackHelper<T> {
  items: T[];

  constructor() {
    super();

    this.items = [];
  }

  push(element: T, ...args: T[]) {
    this.items.push(element, ...args);
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
