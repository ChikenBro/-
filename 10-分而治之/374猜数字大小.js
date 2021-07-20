/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const rec = (low, high) => {
    if (low > high) return;
    const mid = ~~((low + high) / 2);
    const res = guess(mid);
    if (res === 0) return mid;
    else if (res === 1) return rec(mid + 1, high);
    else return rec(low, mid - 1);
  }
  return rec(1, n);
};