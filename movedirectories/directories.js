var fs = require("fs");

// rename
// fs.renameSync("./assets/logs", "./logs");



// to remove folder, first you need to delete files


// remove file
fs.readdirSync("./logs").forEach(function(fileName) {
  fs.unlinkSync("./logs/" + fileName);
});


// remove folder
fs.rmdir('./logs', function(err) {
  if (err) {
    throw err;
  }
  console.log("Logs directory removed");
});
