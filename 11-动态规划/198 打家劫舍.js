/**
 * @param {number[]} nums
 * @return {number}
 */

// fk = max(f(k-2) + Ak, f(k-1))
// 时间复杂度O(n) 空间复杂度O(1)
var rob = function (nums) {
  if (nums.length === 0) return 0;
  // const dp = [0, nums[0]];
  let dp0 = 0;
  let dp1 = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    [dp1, dp0] = [Math.max(dp0 + nums[i - 1], dp1), dp1]
  }
  return dp1;
};