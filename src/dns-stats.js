const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) { 
  let dnsArr = [];
  let dnsObj = {};
  
domains.forEach(one => dnsArr.push(one.split('.').reverse()));

  for (let k = 0; k < dnsArr.length; k++) {
      for (let i = 0; i < dnsArr[k].length; i++) {
    let key = '';
    for (let j = 0; j <= i; j++) {
      key += '.' + dnsArr[k][j];
    }
    if (typeof dnsObj[key] === "undefined") {
      dnsObj[key] = 1;
    } else {
      let score = dnsObj[key];
      dnsObj[key] = score + 1;
    }
  }
  }
  return dnsObj;
}

module.exports = {
  getDNSStats
};
