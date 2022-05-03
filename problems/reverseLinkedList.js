/*
"Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?"

*/

// declare a function | input: head of a linked list(object) | output: new head ( object )
  // declare two pointers for reassigning nodes properties
  //iterator assigned to the head
  //while loop (while there is an iterator)
    // reassign next values and current head value
    // assign iterator to iterator.next
  //return the new head;

const reverseLL = (head) => {
  
  let newHead = null;
  let pointer = null;
  let iterator = head;
  while(iterator) {
    pointer = iterator;
    iterator = iterator.next;
    pointer.next = newHead;
    newHead = pointer;
  }
  head = newHead;
  return head;
}

function Node(value) {
  this.value = value
  this.next = null;
}

const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);

console.log(list);
console.log(reverseLL(list));