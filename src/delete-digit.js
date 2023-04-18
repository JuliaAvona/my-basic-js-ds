const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = '' + n;
  let allSum = 0;
  
  for (let i = 0; i < n.length; i++) {
    let currentSum = 0;
    let number = 0;
    
    for (let j = 0; j < n.length; j++) {
      if (j !== i) {
        currentSum += n[j];
        number = n[j];
      }
    }
    if (allSum < currentSum) {
      allSum = currentSum;
    }
  }
  return +allSum;
}

module.exports = {
  deleteDigit
};
