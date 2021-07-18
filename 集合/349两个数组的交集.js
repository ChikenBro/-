/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 时间复杂度O(n^2) 空间复杂度O(n)
var intersection = function(nums1, nums2) {
    // return [...new Set(nums1)].filter(n => new Set(nums2).has(n));
     return [...new Set(nums1)].filter(n => nums2.includes(n)); //filter * includes = n方
    
};