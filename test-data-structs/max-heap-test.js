import { MaxHeap } from '../js-data-structs/max-heap.js';

const maxHeap = new MaxHeap();
const arr = [11, 10, 9, 17, 13, 5, 15, 20, 8, 19];

// insert one by one
for (let i = 0; i < arr.length; i++) {
  maxHeap.insert(arr[i]);
}

maxHeap.print();

// remove and return maximum value
let maxVal = maxHeap.remove();
console.log('The maximum value of the array is ', maxVal);

// reinsert maximum value into the heap
maxHeap.insert(maxVal);

// remove all values from the heap and return an array of values sorted in descending order
console.log('Sorted array', maxHeap.sort());
