/*
* 字典也是一种存储 唯一值 的数据结构,但他是以键值对的形式存储的
* ES6中有字典 名为Map
*/
const map = new Map();
//时间复杂度都是O(1)
//增
map.set('a', 'aa');
map.set('b', 'bb');
map.set('c', 'cc');

//删
map.delete('b');
map.clear(); //清空所以的

//改 就是覆盖
map.set('a', 'aaaa');

//查
map.get('a');