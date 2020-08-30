const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/show-get-params", (req, res) => {
  const divs = Object.keys(req.query).map(key => `<div>${key}: ${req.query[key]}</div>`)
  const result = `<html><body>${divs.join('')}</body></html>`

  res.send(result);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
