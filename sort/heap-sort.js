import { MinHeap } from '../js-data-structs/min-heap.js';

const heapSort = new MinHeap();
const arr = [3, 1, 8, 4, 9, 5, 2];

console.log('Starting array', arr);

for (let i = 0; i < arr.length; i++) {
  heapSort.insert(arr[i]);
}

const res = heapSort.sort();

console.log('Heap sorted array', res);
