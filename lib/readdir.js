var fs = require("fs");


//synchronously
var files = fs.readdirSync('./lib');

// asynchronously
fs.readdir('./lib', function(err, files) {
    if (err) {
      throw err;
    }
    console.log(files);
});

// this comes first
console.log("Reading Files...");
