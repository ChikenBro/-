/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 时间复杂度O(m+n) m是t的长度 n是s的长度
// 空间复杂度O(m)
var minWindow = function (s, t) {
    const need = new Map();
    for (let c of t) {  //统计t串中每个字符需要的个数
        need.set(c, need.has(c) ? need.get(c) + 1 : 1);
    }
    let str = '';
    let l = 0;
    let needType = need.size; //总共需要的类型
    for (let r = 0; r < s.length; r++) {
        const c = s[r];
        if (need.has(c)) {
            need.set(c, need.get(c) - 1);
            if (need.get(c) == 0) needType--;
        }
        while (needType == 0) {
            let newStr = s.substring(l, r + 1);
            if (!str || str.length > newStr.length) str = newStr;
            const c2 = s[l];
            if (need.has(c2)) {
                need.set(c2, need.get(c2) + 1);
                if (need.get(c2) == 1) needType = 1;
            }
            l++;
        }
    }
    return str;
};