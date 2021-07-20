Array.prototype.selectSort = function () {
  for (let i = 0; i < this.length-1; i++){
    let index = i;
    let minValue = this[i];
    for (let j = i+1; j < this.length; j++){
      if (this[j] < minValue) {
        index = j;
        minValue = this[j];
      }
    }
    if (index != i) {
      this[index] = this[i];
      this[i] = minValue;
    }
  }
}
const arr = [4, 53, 1, 4, 641, 1];
arr.selectSort();
console.log(arr);