/*
* 原型链的本质就是链表
* 原型链上的结点是各种原型对象
*   Function.prototype Object.prototype...
* 原型链通过_proto_属性连接各个种原型对象
* obj->Object.prototype->null
* fuc->Function.prototype->Object.prototype->null
* arr->Array.prototype->Object.prototype->null
*/

/*
面试点
    如果A沿着原型链能找到B.prototype,那么A instanceof B 为 true
    如果在A对象上没有找到x属性,那么会沿着原型链找x属性
*/
//面试题1  简述instanceof的原理 并用代码实现
//解法 遍历A的原型链,如果找到B.prototype,返回true,否则返回false
const instanceOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) return true;
        p = p.__proto__;
    }
    return false;
}
//面试题2
var foo = {},
    F = function () { };
Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(foo.a); //value a
console.log(foo.b); //undefined

console.log(F.a); //value a
console.log(F.b); //value b

const obj = {};
const func = () => { };
const arr = [];
