const path = require('path');

//it helps to create path to parent directory
//process is in all files
//mainmodule 
module.exports = path.dirname(process.mainModule.filename);