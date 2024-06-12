const arr = [7, 2, 5, 4, 1, 6, 0, 3];
const arr2 = [];
const arr3 = [1];
const arr4 = [3, 1];
const arr5 = [5, 3, 1, 2, 4];

// Returns a new array rather than modifying the existing argument
function mergeSort(arr) {
  // A one element array is deemed sorted so return it
  if (arr.length <= 1) {
    return arr;
  }

  // Recurse until array of size 1 is met, assigning the left half to be the smaller of the two halves if odd number of elements
  const leftArr = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const rightArr = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  const newArr = [];
  let leftPos = 0;
  let rightPos = 0;

  // Merge the two arrays
  while (leftPos < leftArr.length && rightPos < rightArr.length) {
    if (leftArr[leftPos] === rightArr[rightPos]) {
      newArr.push(leftArr[leftPos]);
      leftPos++;
    } else if (leftArr[leftPos] < rightArr[rightPos]) {
      newArr.push(leftArr[leftPos]);
      leftPos++;
    } else if (rightArr[rightPos] < leftArr[leftPos]) {
      newArr.push(rightArr[rightPos]);
      rightPos++;
    }
  }

  // If one of the arrays is empty we can safely append the remaining elements of the other because they are already in sorted order
  if (leftPos === leftArr.length) {
    newArr.push(...rightArr.slice(rightPos));
  } else if (rightPos == rightArr.length) {
    newArr.push(...leftArr.slice(leftPos));
  }

  return newArr;
}

console.log(mergeSort(arr)); // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(mergeSort(arr2)); // []
console.log(mergeSort(arr3)); // [1]
console.log(mergeSort(arr4)); // [1, 3]
console.log(mergeSort(arr5)); // [1, 2, 3, 4]
