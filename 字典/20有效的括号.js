/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = new Map();
    map.set('(',')');
    map.set('[',']');
    map.set('{','}');
    if (stack.length & 1 ) return false;
    for (let i = 0; i < s.length; i++){
        const c = s[i];
        if (map.has(c)) 
            stack.push(c);
        else {
            const t = stack[stack.length - 1];
            if(map.get(t) == c)
                stack.pop();
            else
                return false;
        }
    }
    return stack.length === 0;
};