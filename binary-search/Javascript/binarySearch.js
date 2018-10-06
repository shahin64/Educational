var A = [1, 3, 5, 6, 8, 9, 13, 24, 56, 78];

function binarySearch(arr, value) {
  var low = 0,
    high = arr.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (value == arr[mid]) return true;
    else if (value < arr[mid]) high = mid - 1;
    else low = mid + 1;
  }
  return false;
}

console.log(binarySearch(A, 24));
console.log(binarySearch(A, 34));
