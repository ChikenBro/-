let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); //已经存在了,不在添加进去;
mySet.add('some text');
mySet.add({ a: 1, b: 2 });
let obj = { a: 1, b: 2 };
mySet.add(obj); //2个对象都会被添加哦

const has = mySet.has(1); //true;
const has2 = mySet.has('some text') //true;
const has3 = mySet.has(obj) //true;

mySet.delete(5);

mySet.size;
//迭代方法
for (let item of mySet)
    console.log(item);

for (let item of mySet.keys())
    console.log(item);

for (let item of mySet.values())
    console.log(item);

for (let [key, value] of mySet.entries())
    console.log(key, value);

//Set => Array
const myArr = [...mySet];
const myArr2 = Array.from(mySet);

//Array => Set
const mySet2 = new Set([1, 2, 3, 4]);

//求交集
const intersection = new Set([...mySet].filter(x => mySet2.has(x)));

//求差集
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));