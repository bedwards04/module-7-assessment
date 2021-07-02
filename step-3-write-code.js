// 1) Sum Zero

let numArray = [1, 0, -3, 4, -2, 3, 2];

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return 'true'
      } else {
        return 'false'
      }
    }
  }
};

console.log(sumZero(numArray));

// Pretty sure the runtime is O(n^2) 