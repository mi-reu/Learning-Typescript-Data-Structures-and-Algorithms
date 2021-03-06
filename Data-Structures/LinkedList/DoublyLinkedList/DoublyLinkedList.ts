class DoublyLinkedListNode<T> {
  element: T;
  next: DoublyLinkedListNode<T> | null;
  prev: DoublyLinkedListNode<T> | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private length: number;
  private head: DoublyLinkedListNode<T> | null;
  private tail: DoublyLinkedListNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(element: T) {
    const node = new DoublyLinkedListNode(element);

    let current: DoublyLinkedListNode<T> | null = null;

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
    let previous: DoublyLinkedListNode<T> = null;
    let index = 0;

    if (position === 0) {
      this.head = current.next;

      if (this.length === 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
      current.next.prev = previous;
    }

    this.length--;

    return current.element;
  }

  insert(position: number, element: T) {
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new DoublyLinkedListNode(element);

    let current = this.head;
    let previous: DoublyLinkedListNode<T> = null;
    let index = 0;

    if (position === 0) {
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = current;
        current.prev = node;
        this.head = node;
      }
    } else if (position === this.length) {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      current.prev = node;
      node.prev = previous;
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

export default DoublyLinkedList;
