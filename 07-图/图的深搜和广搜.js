const graph = require('./图的邻接表');
const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach(c => {
    if (!visited.has(c))
      dfs(c);
  })
}

dfs(2);

const visited2 = new Set();
const q = [2];
visited2.add(2);
while (q.length) {
  const n = q.shift()
  console.log(n);
  graph[n].forEach(c => {
    if (!visited2.has(c)) {
      visited2.add(c);
      q.push(c);
    }
  })
}