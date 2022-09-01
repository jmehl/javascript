function quickSort(arr) {
  // base case if array has only one value
  if (arr.length === 1) {
    return arr;
  }

  // select pivot point at the end of the array
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  // loop from index 0 to one less than the pivot index
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      // push values smaller than the pivot into the left array
      leftArr.push(arr[i]);
    } else {
      // push values larger than or equal to the pivot into the right array
      rightArr.push(arr[i]);
    }
  }

  // check if both arrays are not empty
  if (leftArr.length > 0 && rightArr.length > 0) {
    // sort and spread the left array add the pivot value then sort and spread the right array
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    // right array is empty so we only add the sorted left array then the pivot
    return [...quickSort(leftArr), pivot];
  } else {
    // left array is empty so we add the pivot value first then the sorted right array
    return [pivot, ...quickSort(rightArr)];
  }
}

const arr = [3, 1, 8, 4, 9, 5, 2];
console.log('Starting array', arr);

const res = quickSort(arr);
console.log('Quick sorted array', res);

// Second Implementation

// function pivot(arr, j, p) {
//   let i = j - 1;
//   while (j <= p) {
//     if (arr[j] < arr[p]) {
//       i++;
//       if (i !== j) [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     if (j === p) {
//       i++;
//       [arr[i], arr[p]] = [arr[p], arr[i]];
//       return i;
//     }
//     j++;
//   }
// }

// export function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pIdx = pivot(arr, left, right);
//     if (pIdx === arr.length - 1) return arr[pIdx];
//     quickSort(arr, left, pIdx - 1);
//     quickSort(arr, pIdx + 1, right);
//   }
//   return arr;
// }
