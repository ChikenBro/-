const bt = require('./二叉树');

const preorder = (root) => {
    if (!root) return;
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        console.log(n.val);
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    }
}
preorder(bt);