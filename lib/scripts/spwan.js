var spawn = require("child_process").spawn;

// execute command
var cp = spawn("node", ["alwaysTalking"]);

// when data is submited from alwaysTalking, console it
cp.stdout.on("data", function(data) {
  console.log(`STDOUT: ${data.toString()}`);
});

// 4s later, send data 'stop'
setTimeout(function() {
  cp.stdin.write("stop");
}, 4000);

//when alwaysTalking received data, it runs process.exit();
// this trigger below function
cp.on("close", function() {
  console.log("Child Process has ended");

  process.exit();
});
