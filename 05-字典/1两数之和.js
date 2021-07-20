/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)) return [map.get(num2), i];
        else map.set(num1, i);
    }
};