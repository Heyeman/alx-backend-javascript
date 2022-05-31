const http = require("http");
const fs = require("fs");

const app = http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write("Hello Holberton School!");
    } else if (req.url == "/students") {
      const allData = fs.readFileSync("database.csv");
      const lines = allData.split("\n");
      let students = 0;
      const subjects = [];
      const studs = {};
      lines.forEach((element) => {
        if (element.length == 4) {
          students += 1;
          if (subjects.includes(element[3])) {
            studs[element[3]].push(element[0]);
          } else {
            studs[element[3]] = [element[0]];
          }
        }
      });
      res.write("This is the list of our students");
    }
    res.end();
  })
  .listen(1245);

module.exports = app;
