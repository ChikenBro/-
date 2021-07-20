Array.prototype.binarySearch = function (item) {
  let left = 0;
  let right = this.length - 1;
  let index = -1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (this[mid] < item) {
      left = mid + 1;
    } else {
      if (this[mid] == item) index = mid;
      right = mid - 1;
    } 
  }
  return index;
}
const res = [1, 3, 3, 4, 5].binarySearch(3);
console.log(res);