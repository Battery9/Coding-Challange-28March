function doubleArray(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i]));
  }
  return newArray;
}

let arr = [1, 2, 3];
let doubledArray = doubleArray(arr, function (element) {
  return element * 2;
});

console.log(doubledArray);