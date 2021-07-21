/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 时间复杂度O(n!) 空间复杂度(n)
var permute = function (nums) {
  const res = [];
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach(n => {
      if (path.includes(n)) return;
      backtrack([...path, n]);
    })
  }
  backtrack([]);
  return res;
};