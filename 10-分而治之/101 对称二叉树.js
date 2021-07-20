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
 * @return {boolean}
 */
// 时间复杂度O(n) 空间复杂度O(h) h是树高
var isSymmetric = function (root) {
  if (!root) return true;
  const isMirror = (l, r) => {
    if (!r && !l) return true;
    if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)) {
      return true;
    } else {
      return false;
    }
  }
  return isMirror(root.left, root.right);
};