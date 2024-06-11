// Fibonacci Recursion
function fibsRec(n) {
  if (n <= 1) return n;

  return fibsRec(n - 1) + fibsRec(n - 2);
}

// Fibonacci Iterative Array
function fibs(n) {
  if (n < 0) throw new Error("Cannot start lower than 0");
  if (n == 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  const sequence = [0, 1];
  let first = sequence[0];
  let second = sequence[1];
  let sum;

  for (let i = 2; i < n; i++) {
    sum = first + second;
    first = second;
    second = sum;
    sequence.push(sum);
  }
  return sequence;
}

// Fibonacci Recursion Arrays
function fibsRecArr(n, arr = [0, 1]) {
  if (n <= 0) return [];
  if (n == 1) return [0];

  if (arr.length == n) {
    return arr;
  }

  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);

  return fibsRecArr(n, arr);
}

function fibsRecArr2(n) {
  if (n <= 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  const sequence = fibsRecArr2(n - 1);

  return [
    ...sequence,
    sequence[sequence.length - 1] + sequence[sequence.length - 2],
  ];
}

console.log("fibs recursion", fibsRec(8)); // 13
console.log(" ");
console.log("zero iter", fibs(0)); // []
console.log("1st iter", fibs(1)); // [0]
console.log("2nd iter", fibs(2)); // [0, 1]
console.log("8th iter", fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(" ");
console.log("zero rec", fibsRecArr(0)); // []
console.log("1st rec", fibsRecArr(1)); // [0]
console.log("2nd rec", fibsRecArr(2)); // [0, 1]
console.log("8th rec", fibsRecArr(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(" ");
console.log("zero rec2", fibsRecArr2(0)); // []
console.log("1st rec2", fibsRecArr2(1)); // [0]
console.log("2nd rec2", fibsRecArr2(2)); // [0, 1]
console.log("8th rec2", fibsRecArr2(8)); //[0, 1, 1, 2, 3, 5, 8, 13];
