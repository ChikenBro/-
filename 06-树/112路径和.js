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
 * @param {number} targetSum
 * @return {boolean}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var hasPathSum = function (root, targetSum) {
  let flag = false;
  if (!root) return flag;
  const dfs = (root, sum) => {
    if (!root.left && !root.right && sum === targetSum) flag = true;
    if (root.left) dfs(root.left, sum + root.left.val);
    if (root.right) dfs(root.right, sum + root.right.val);
  }
  dfs(root, root.val);
  return flag;
};