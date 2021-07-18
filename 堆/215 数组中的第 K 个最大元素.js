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
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shfitUp(parentIndex);
    }

  }
  shfitDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 时间复杂度O(n*logk) 空间复杂度O(k)
var findKthLargest = function (nums, k) {
  const h = new MinHeap();
  nums.forEach(n => {
    h.insert(n);
    if (h.size() > k) h.pop();
  })
  return h.peek();
};