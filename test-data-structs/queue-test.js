import { Queue } from '../js-data-structs/queue.js';

const theQueue = new Queue();

const reverseQueue = new Queue();
reverseQueue.reverse = true;

let i = 1;
while (i <= 6) {
  console.log('In', theQueue.enqueue(i));
  console.log(theQueue.queue);
  ++i;
}
while (theQueue.size() !== 0) {
  console.log('Out', theQueue.dequeue());
  console.log(theQueue.queue);
}
let j = 2;
while (j <= 12) {
  reverseQueue.enqueue(j);
  console.log(reverseQueue.queue);
  j += 2;
}
while (reverseQueue.size() !== 0) {
  reverseQueue.dequeue();
  console.log(reverseQueue.queue);
}
