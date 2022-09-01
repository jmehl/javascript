import { MaxHeap } from '../js-data-structs/max-heap.js';

// Return the kth largest number from the array
const kth = 2;
const numArr = [3, 2, 1, 5, 6, 4];

function kthLargest(k, arr) {
  let max = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    max.insert(arr[i]);
  }

  for (let j = 0; j < k; j++) {
    if (j === k - 1) return max.remove();
    max.remove();
  }

  return res;
}

console.log(`The kth largest number is ${kthLargest(kth, numArr)}`);
