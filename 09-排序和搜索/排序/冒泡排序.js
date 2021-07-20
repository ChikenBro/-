Array.prototype.bubbleSort = function() {
  for (let i = 0; i < this.length - 1; i++){
    for (let j = 0; j < this.length - 1 - i; j++){
      if (this[j] > this[j + 1]) {
        temp = this[j];
        this[j] = this[j+1];
        this[j + 1] = temp;
      }
    }
  }
}
const arr = [4, 53, 1, 4, 641, 1];
arr.bubbleSort();
console.log(arr);