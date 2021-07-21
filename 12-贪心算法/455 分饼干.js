/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 时间复杂度O(nlogn) 空间复杂度O(1)
var findContentChildren = function (g, s) {
  const sortFunc = (a, b) => a - b;
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0;
  s.forEach(n => {
    if (n >= g[i]) {
      i++;
    }
  })
  return i;
};