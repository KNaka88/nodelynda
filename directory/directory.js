var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

rl.question("CREATE NEW FILE: please type name", function(answer) {

  if(fs.existsSync(answer.toLowerCase().trim())) {
    console.log("Directory already there");
    rl.close();
  } else {

    fs.mkdir(answer, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Directory Created");
      }

      rl.close();
    });
  }
});

rl.on('close', function() {
  console.log('program ended');
  process.exit;
});
