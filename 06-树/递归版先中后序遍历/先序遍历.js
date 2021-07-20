const bt = require('./二叉树');

const preorder = (root) => {
    if (!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
preorder(bt);