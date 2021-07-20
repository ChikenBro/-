/*
* 集合是一种 无序且唯一 的数据结构
* ES6中有集合,名为Set
* 集合的常用操作: 去重、判断某元素是否在集合中、求交集
*/

//去重
const arr = [1, 2, 2, 2, 1];
const arr2 = [...new Set(arr)]; //...是转换为数组

//判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1); //true

//求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));
