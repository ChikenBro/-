class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(index) {
    // return Math.floor((i - 1) / 2);
    return (index - 1) >> 1;
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  shfitUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    console.log(parentIndex);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shfitUp(parentIndex);
    }

  }
  shfitDown(index) {
    if (index >= this.heap.length) return;
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    console.log(leftIndex + ' ' + rightIndex);
    if (this.heap[leftIndex] < this.heap[index]) { //undefined与任何数字比较都是false
      this.swap(leftIndex, index);
      this.shfitDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shfitDown(rightIndex);
    }

  }
  insert(value) {
    this.heap.push(value);
    this.shfitUp(this.heap.length - 1);
  }
  pop() {
    this.heap[0] = this.heap.pop();
    this.shfitDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
const h = new MinHeap();
h.insert(1);
let a1 = h.heap[0];