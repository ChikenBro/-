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
var guess = (num) => {
  if (num === 1702766719) return 0;
  else if (num > 1702766719) return -1;
  else return 1;
}
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left <= right) {
    const mid = ~~((left + right) / 2);
    // (left + right) >> 1 会溢出 可能是二进制数表示不了了吗
    if (guess(mid) === -1) {
      right = mid - 1;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};
guessNumber(2126753390);