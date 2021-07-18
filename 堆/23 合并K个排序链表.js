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
      if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
        this.swap(parentIndex, index);
        this.shfitUp(parentIndex);
      }

    }
    shfitDown(index) {
      if (index >= this.heap.length) return;
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) { //undefined与任何数字比较都是false
        this.swap(leftIndex, index);
        this.shfitDown(leftIndex);
      }
      if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
        this.swap(rightIndex, index);
        this.shfitDown(rightIndex);
      }

    }
    insert(value) {
      this.heap.push(value);
      this.shfitUp(this.heap.length - 1);
    }
    pop() {
      if (this.size() === 1) return this.heap.pop();
      const top = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.shfitDown(0);
      return top;
    }
    peek() {
      return this.heap[0];
    }
    size() {
      return this.heap.length;
    }
  }
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  var mergeKLists = function (lists) {
    const res = new ListNode(0);
    const h = new MinHeap();
    let p = res;
    lists.forEach(l => {
      if (l) h.insert(l);
    })
    while (h.size()) {
      const n = h.pop();
      p.next = n;
      p = p.next;
      if (n.next) h.insert(n.next);
    }
    return res.next;
  };