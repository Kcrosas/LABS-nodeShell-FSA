/*const fs = require("fs");

module.export = (files, promptFunction) => {
  fs.readFile(files[0], "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};*/

const fs = require("fs");

module.exports = (files, done) => {
  //get this to work with multiple files
  fs.readFile(files, "utf8", (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      //Console.log statement to signify new file
      console.log(
        `[][][][][][][][][][][][][][][][][]\nHere are the files you requested\n${files}:\n`
      );
      done(data);
    }
  });
};
