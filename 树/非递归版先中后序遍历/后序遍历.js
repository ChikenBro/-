const bt = require('./二叉树');

const postorder = (root) => {
    if (!root) return;
    const stack = [root];
    const outputStack = [];
    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n);
        //右结点先进stack栈,处理好后先进inputStack栈,逆向输出保证左右根顺序
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);   
    }
    while (outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
}
postorder(bt);