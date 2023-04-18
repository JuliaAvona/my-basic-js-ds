const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let adress = email.split('@')[1];
  if (adress[0] === '.') {
    return email.split('@')[2];
  } else {
    return email.split('@')[1];
  }
}

module.exports = {
  getEmailDomain
};
