/**
 * @param {string} s
 * @return {boolean}
 */
//有效的括号 leetcode20
//时间复杂度O(n) 空间复杂度O(n)
var isValid = function(s) {
    const stack = [];
    if (stack.length & 1 ) return false;
    for (let i = 0; i < s.length; i++){
        const c = s[i];
        if (c === '(' || c === '[' || c === '{') stack.push(c);
        else {
            const t = stack[stack.length - 1];
            if ((t === "(" && c === ")" )|| (t === '{' && c === "}") || (t === "[" && c === "]"))
                stack.pop();
            else
                return false;
        }
    }
    return stack.length === 0;
};