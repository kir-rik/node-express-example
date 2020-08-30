const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/show-get-params", (req, res) => {
  res.send("???");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
