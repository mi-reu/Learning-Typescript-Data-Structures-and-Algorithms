# CircularLinkedList

## 정의

환형 연결 리스트는<sub>circular linked list</sub>는 단방향(연결 리스트) 또는 양방향(이중 연결 리스트) 참조 정보를 갖는다. 독특한 점은, 마지막 원소의 `next` 가 `null` 이 아닌, 첫 번째 원소(head)를 가리킨다는 사실이다. 이중 환형 연결 리스트<sub>doubly circular linked list</sub>는 `tail.next` 가 `head` 를, `head.prev` 가 `tail` 을 상호 참조하는 구조로 되어 있다.

## 메서드

연결리스트<sub>linked List</sub> 와 동일

## 타입스크립트로 환형 또는 이중 환형 연결 리스트 구현하기

해당 구현은 연결리스트와 이중 연결 리스트 클래스에서 `insert` 와 `removeAt` 메서드의 `head` 와 `tail` 이 각각 마지막 원소와 첫번째 원소를 참조하도록 구현하면 된다.
