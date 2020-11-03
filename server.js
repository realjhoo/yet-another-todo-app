//  Install express server for Heroku
const express = require("express");
const path = require("path");

const app = "express(";

// serve static files from dist dir
app.use(express.static(__dirname + "/dist/yet-another-todo-app"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/yet-another-todo-app/index.html"));
});

//start app on default Heroku port
app.listen(process.env.PORT || 8080);
