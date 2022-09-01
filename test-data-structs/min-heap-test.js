import { MinHeap } from '../js-data-structs/min-heap.js';

let minHeap = new MinHeap();
let arr = [10, 5, 9, 1, 6, 12];

// insert one by one
for (let i = 0; i < arr.length; i++) {
  minHeap.insert(arr[i]);
}

minHeap.print();

// remove and return minimum value
let minVal = minHeap.remove();
console.log('The minimum value of the array is ', minVal);

// reinsert minimum value into the heap
minHeap.insert(minVal);

// remove all values from the heap and return an array of values sorted in ascending order
console.log('Sorted array', minHeap.sort());
