/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   const map = new Map();
//   nums.forEach(t => {
//     map.set(t, map.has(t) ? map.get(t) + 1 : 1);
//   })
//   const list = Array.from(map).sort((a, b) => b[1] - a[1]);
//   return list.slice(0, k).map(n => n[0]);

// };
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
    if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
      this.swap(parentIndex, index);
      this.shfitUp(parentIndex);
    }

  }
  shfitDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) { //undefined与任何数字比较都是false
      this.swap(leftIndex, index);
      this.shfitDown(leftIndex);
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
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

var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach(t => {
    map.set(t, map.has(t) ? map.get(t) + 1 : 1);
  })
  const h = new MinHeap();
  map.forEach((value, key) => {
    h.insert({
      value,
      key
    });
    if (h.size() > k) h.pop();
  })
  return h.heap.map(a => a.key);
};