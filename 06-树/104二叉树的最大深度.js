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
// 时间复杂度O(n)
// 空间复杂度O(n) 单枝树
// 空间复杂度O(logn) 完全二叉树
var maxDepth = function(root) {
    let depth = 0;
    const dfs = (root, d) => {
        if( !root ) return;
        if( !root.left && !root.right ) depth = Math.max( depth, d );
        dfs(root.left, d + 1);
        dfs(root.right, d + 1);
    }
    dfs(root,1);
    return depth;
};