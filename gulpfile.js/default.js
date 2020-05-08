const version = require('../package.json').version;

const defaultTask = function(cb) {
  console.log(
    `
   ___       _                     _          _  _  __
    |  _ __ |_) |  _ _|_ _  _    _|_ _  __   |_)| \\|_
    | (/_||||   | (_| |_(/__>     | (_) |    |  |_/|

   v${ version }

    `
  );
  cb();
}

module.exports = defaultTask;