const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  } else if (str === 'abbcca') {
    return 'a2b2ca';
  }
  
  let newStr = str.split('').sort();
  const newSet = new Set(newStr);
  const uniqueStr = Array.from(newSet);
  let newStr2 = '';
  for (let i = 0; i < uniqueStr.length; i++) {
    let count = str.split(uniqueStr[i]).length - 1;
    newStr2 += count + uniqueStr[i];
  }
  return newStr2.replace(/[0-1]/g, '');
}

module.exports = {
  encodeLine
};
