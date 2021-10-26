//pulls the required module to run a function and stores it in fs
const fs = require("fs");

module.exports = (done) => {
  fs.readdir("./", "utf8", (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      //Commented out line from solution | done(data.join("\n"));
      //Writes out data received and joins them on different lines
      process.stdout.write(data.join("\n"));
      process.stdout.write("\nEnter another command: ");
    }
  });
};
