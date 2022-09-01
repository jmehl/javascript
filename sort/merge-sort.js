// merge helper function takes in the left and right arrays
function merge(arrLeft, arrRight) {
  // response array that will hold all the sorted values
  const res = [];
  let idxLeft = 0;
  let idxRight = 0;

  // loop through the right and left arrays
  while (idxLeft < arrLeft.length && idxRight < arrRight.length) {
    // store the values of the current index in each array
    const leftVal = arrLeft[idxLeft];
    const rightVal = arrRight[idxRight];
    if (leftVal < rightVal) {
      // push the smaller left value
      res.push(leftVal);
      // increment left index
      idxLeft++;
    } else {
      // push the smaller or equal value
      res.push(rightVal);
      // increment right index
      idxRight++;
    }
  }

  // spread the response array and if the are values in either the left or right array we add everything from the current index to the end of the array
  return [...res, ...arrLeft.slice(idxLeft), ...arrRight.slice(idxRight)];
}

function mergeSort(arr) {
  // base case return an array with one value or an empty array
  if (arr.length <= 1) return arr;

  // set a middle index
  const midIdx = Math.floor(arr.length / 2);
  // slice the array from index zero to the middle index
  const leftArr = arr.slice(0, midIdx);
  // slice the array from middle index to the end of the array
  const rightArr = arr.slice(midIdx);

  // recursively call mergeSort on the left and right array then send each returned right and left array into the merge helper function
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const arr = [3, 1, 8, 4, 9, 5, 2];
console.log('Starting array', arr);

const res = mergeSort(arr);
console.log('Merge sorted array', res);
