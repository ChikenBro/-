Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++){
    let j = i;
    const temp = this[i];
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
        j--;
      } else {
        break;
      }
    }
    this[j] = temp;
  }
}
const arr = [4, 53, 1, 4, 641, 1];
arr.insertionSort();
console.log(arr);