class LinkedListNode<T> {
  element: T;
  next: LinkedListNode<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList<T> {
  private length: number;
  private head: LinkedListNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element: T) {
    const node = new LinkedListNode(element);

    let current: LinkedListNode<T> | null = null;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  removeAt(position: number) {
    if (position < 0 || position > this.length) {
      return null;
    }

    let current = this.head;
    let previous: LinkedListNode<T> = null;
    let index = 0;

    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.length--;

    return current.element;
  }

  insert(position: number, element: T) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new LinkedListNode(element);

    let current = this.head;
    let previous: LinkedListNode<T> = null;
    let index = 0;

    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
    }

    this.length++;

    return true;
  }

  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  }

  indexOf(element: T) {
    let current = this.head;
    let index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  remove(element: T) {
    let index = this.indexOf(element);

    return this.removeAt(index);
  }

  isEmpty() {
    return length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }
}

export default LinkedList;
