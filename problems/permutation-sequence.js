// return all permutations of the given array
function getPermutation(arr) {
  const res = [];

  // function to swap array values
  function swap(arrSwap, idxA, idxB) {
    [arrSwap[idxA], arrSwap[idxB]] = [arrSwap[idxB], arrSwap[idxA]];
  }

  function generate(n, heapArr) {
    if (n === 1) {
      // push a shallow copy of the permuted array
      res.push([...heapArr]);
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swap(heapArr, i, n - 1);
      } else {
        swap(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
  }

  // send in array length and shallow copy of the array
  generate(arr.length, [...arr]);
  return res;
}

console.log(getPermutation([1, 2, 3]));
