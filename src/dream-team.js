const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let newArr = [];
  members.forEach(function (member) {
    if (typeof member === "string") {
      newArr.push(member.trim());
    }
  });
  newArr = newArr.sort();
  let nameDreamTeam = "";
  let sortMembers = newArr;
  
  sortMembers.forEach(function (member) {
    if (typeof member === "string" && member !== ' ') {
      member = member.trim();
      nameDreamTeam += member[0];
    }
  });
  const result = nameDreamTeam.toUpperCase().split('').sort().join('');
  return result;
}

module.exports = {
  createDreamTeam
};
