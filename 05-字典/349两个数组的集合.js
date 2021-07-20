/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 时间复杂度O(m+n) 空间复杂度O(m)
var intersection = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(m => {
        map.set(m,true);
    });
    const res = [];
    nums2.forEach(m => {
        if(map.get(m)){
            res.push(m);
            map.delete(m);
        }
    });
    return res;
};