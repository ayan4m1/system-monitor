const { createHash } = require('crypto');

module.exports = {
  generateHash: (command) => createHash('md5').update(command).digest('hex')
};
