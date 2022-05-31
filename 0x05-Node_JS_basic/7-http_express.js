const express = require("express");
const students = require("./3-read_file_async");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});
app.get("/students", (req, res) => {
  students(process.argv[2]).then((data) => {
    res.send(
      `Number of students: ${data.students.length}\nNumber of students in CS: ${
        data.csStudents.length
      }. List: ${data.csStudents.join(", ")}\nNumber of students in SWE: ${
        data.sweStudents.length
      }. List: ${data.sweStudents.join(", ")}`
    );
  });
});

app.listen(1245);

module.exports = app;
