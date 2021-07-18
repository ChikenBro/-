/* 
* 先进先出的数据结构
* 用Arary实现所有队列功能
* 使用场景 食堂排队打饭 js异步中的任务队列 计算最近请求次数
*/
const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift();
const item2 = queue.shift();
