import { LinkedList } from '../js-data-structs/linked-list.js';

// Reverse a linked List
const list = new LinkedList();
list.createList(5, 1, 7, 2, 9);
list.printList('Current list ');

function reverseList(node) {
  // set current value to null
  let cur = null;
  // set previous value to null
  let prev = null;

  // loop through the list until node is null
  while (node) {
    // current node to the next node
    cur = node.next;
    // set the next node in the list to previous
    node.next = prev;
    // set the previous node
    prev = node;
    // reset node to current
    node = cur;
  }
  // previous is now a list with all the values reversed
  return prev;
}

let reversed = reverseList(list.head);

let resArr = [];
while (reversed) {
  resArr.push(reversed.val);
  reversed = reversed.next;
}
console.log('Reversed list ', resArr);
