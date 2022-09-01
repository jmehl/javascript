import { Stack } from '../js-data-structs/stack.js';

// stack using push and pop
const theStack = new Stack();

// stack using unshift and shift less performant due to re-indexing of each item
const reverseStack = new Stack();
reverseStack.reverse = true;

let i = 1;
while (i <= 6) {
  console.log('In', theStack.push(i));
  console.log(theStack.stack);
  ++i;
}
while (theStack.size() !== 0) {
  console.log('Out', theStack.pop());
  console.log(theStack.stack);
}
let j = 2;
while (j <= 12) {
  reverseStack.push(j);
  console.log(reverseStack.stack);
  j += 2;
}
while (reverseStack.size() !== 0) {
  reverseStack.pop();
  console.log(reverseStack.stack);
}
