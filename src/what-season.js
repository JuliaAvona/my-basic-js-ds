const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //spring, summer, autumn (fall), winter.
  if (arguments.length === 0 || (!date)) {
    return 'Unable to determine the time of year!';
  } else if (isNaN(Date.parse(date)) || !date.getTime || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if ( 2 <= month && month <= 4) {
    return 'spring';
  } else if ( 5 <= month && month <= 7) {
    return 'summer';
  } else if (8 <= month && month <= 10) {
    return 'fall';
  } else {
    return 'Invalid date!';
  }
}

module.exports = {
  getSeason
};
