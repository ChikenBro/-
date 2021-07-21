/**
 * @param {number[]} prices
 * @return {number}
 */
// 时间复杂度O(n) 空间复杂度O(1)
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};