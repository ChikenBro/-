Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) return arr;  //可能有空数组传进来 所以要<=1
    const left = [];
    const right = [];
    const base = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < base)
        left.push(arr[i]);
      else
        right.push(arr[i]);
    }
    return [...rec(left), base, ...rec(right)]; //es6合并数组的方法
  }
  const res = rec(this);
  res.forEach((value, index) => {
    this[index] = value;
  })
}
var c = 1;
const arr = [4, 53, 1, 4, 641, 1];
arr.quickSort();
c = 2;
console.log(arr);