/* 深度优先搜索：尽可能深的搜索树的分支
*  广度优先搜索：先访问距离根结点最近的结点
*/

/*  深度优先遍历算法口诀
*  访问根节点
*  对根节点 children挨个进行深度优先遍历
*/
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children:[]
                },
                {
                    val: 'e',
                    children:[]
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children:[]
                },
                {
                    val: 'g',
                    children:[]
                }
            ]
        }
    ]
}
const dfs = (root) => {
    console.log(root.val);
    // root.children.forEach(child => {
    //     dfs(child);
    // });
    root.children.forEach(dfs);
}
dfs(tree);

const bfs = (root) => {
    const queue = [root];
    while (queue.length > 0) {
        const front = queue.shift();
        console.log(front.val);
        front.children.forEach(child => {
            queue.push(child);
        })
    }
}
bfs(tree);