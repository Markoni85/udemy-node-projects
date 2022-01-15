const crypto = require('crypto');

exports.generateUuid = () => {
  return [4, 2, 2, 2, 6] // or 8-4-4-4-12 in hex
    .map(group => crypto.randomBytes(group).toString('hex'))
    .join('-');
};