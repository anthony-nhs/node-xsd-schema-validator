var validator = require('./validator');

var fs = require('fs');

try {
  fs.unlinkSync(__dirname + '/../support/XMLValidator.class');
} catch (err) {

  // ignore
}

console.log('[xsd-schema-validator] Compiling helper...');

validator.setup().catch(err => {
  console.error(err);

  process.exit(1);
});