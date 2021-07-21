/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 时间复杂度O(2^n) 空间复杂度O(n);
var subsets = function (nums) {
  const res = [];
  const backtrack = (path, l, start) => {
    if (path.length === l) {
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      backtrack([...path, nums[i]], l, i + 1)
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0)
  }
  return res;
};