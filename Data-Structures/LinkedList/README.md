# LinkedList

## 정의

연결 리스트는<sub>linked list</sub>는 일련의 원소를 배열처럼 차례대로 저장하지만, 원소들이 메모리상에 연속적으로 위차하지 않는다는 점이 다르다. 각 원소는 원소 자신과 다음 원소를 가리키는 참조 포인터(또는 링크)가 포함된 노드<sub>node</sub>로 구성된다.

## Linked List vs Array

- 연결 리스트의 포인터로 인해 원소 추가/삭제 시 다른 원소들이 이동하지 않다도 된다.
- 그러나, 배열은 특정 원소에 인덱스로 바로 접근할 수 있는 반면, 연결 리스트에서는 원소를 찾을 때까지 처음(헤드 <sub>Head</sub>)부터 루프를 반복해야 한다.

## 메서드

- `append(element)` : 리스트의 맨 끝에 원소를 추가한다.
- `insert(position, element)` : 해당 위치에 원소를 삽입한다.
- `remove(element)` : 원소를 삭제한다.
- `indexOf(element)` : 해당 원소의 인덱스를 반환한다. 존재하지 않을 경우 결과 값은 `-1` 이다.
- `removeAt(index)` : 해당 위치에 있는 원소를 삭제한다.
- `isEmpty()` : 원소가 하나도 없으면 `true` 를, 그 외엔 `false` 를 반환한다.
- `size()` : 원소 개수를 반환한다. 배열의 `length` 프로퍼티와 비슷하다.
- `toString()` : 연결 리스트는 원소를 Node 에 담아두기 때문에 원소의 값만을 출력하려면 자바스크립트 기본 객체로부터 상속한 toString 메소드를 재정의<sub>override</sub> 해야 한다.

## 타입스크립트로 연결 리스트 구현하기

```TS
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

const list = new LinkedList();

list.append(15);
list.remove(13);
list.insert(1, 13);
list.append(10);

console.log(list.getHead());
console.log(list.toString()); // 151310
```
