/**
 * @param {string} s
 * @return {number}
 */
//利用滑动窗口 移动左右指针
// 时间复杂度O(n) 空间复杂度O(m) m是不重复的字符个数
var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let maxlength = 0;
    let length = s.length;
    const map = new Map();
    for (let r = 0; r < length; r++) {
        //只有重复的元素在滑动窗口范围内才移动左指针
        if (map.has(s[r]) && map.get(s[r]) >= l)   
            l = map.get(s[r]) + 1;
        maxlength = Math.max(maxlength, r - l + 1);
        map.set(s[r], r); //每次更新字符的最新位置
    }
    return maxlength;
};