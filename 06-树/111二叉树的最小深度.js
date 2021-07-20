/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var minDepth = function (root) {
  if (!root) return 0;
  const queue = [];
  queue.push([root, 1]);  
  while (queue.length) {
    const front = queue.shift();  //这里其实可以用 [node,depth] = queue.shift()接受方便点
    if (!front[0].left && !front[0].right) return front[1];
    if (front[0].left) queue.push([front[0].left, front[1] + 1]);
    if (front[0].right) queue.push([front[0].right, front[1] + 1]);
  }
};