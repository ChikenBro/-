/**
 * @param {number} n
 * @return {number}
 */
// 时间复杂度和空间复杂度O(n)
// var climbStairs = function (n) {
//   if (n < 2) return 1;
//   const dp = [1, 1];
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };
//优化
var climbStairs = function (n) {
  if (n < 2) return 1;
  let dp0 = 1,
    dp1 = 1;
  for (let i = 2; i <= n; i++) {
    [dp1, dp0] = [dp0 + dp1, dp1]
  }
  return dp1;
};