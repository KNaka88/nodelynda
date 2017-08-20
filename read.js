var fs = require("fs");
var path = require("path");

fs.readdir("./lib", function(err, files) {
  files.forEach(function(fileName) {
    var file = path.join(__dirname, "lib", fileName);
    var stats = fs.statSync(file);

    if(stats.isFile() && fileName !== ".DS_Store") {
      fs.readFile(file, "UTF-8", function(err, contents) {
        console.log(contents);
      });
    }
  });
});



// // without "UTF-8", file is read as binary
//
// // synchronous
// var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");
//
// // asynchronous
// fs.readFile('./lib/sayings.md', 'UTF-8', function(err, contents) {
//   if(err) {
//     console.log(err);
//   }
//   console.log(contents);
// });
