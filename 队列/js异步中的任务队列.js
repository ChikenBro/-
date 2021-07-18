// js引擎 WebAPIs(DOM ajax seTimeout...) CALLBACKQueue
// 构成事件循环
setTimeout(() => console.log(1), 0);
console.log(2);
//输出 2 1;