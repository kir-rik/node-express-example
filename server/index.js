const express = require("express");
const app = express();
const session = require("express-session");

const port = 3000;

app.use("/", express.static("public/pages"));
app.use("/static", express.static("public/js"));
app.use("/static", express.static("public/css"));

app.use(
  session({
    secret: `${Math.random()}`,
  })
);

app.post("/do-post", async (req, res) => {
  if (!req.session.callsCount) {
    req.session.callsCount = 0;
  }
  req.session.callsCount++;

  res.send(`${req.session.callsCount}`);
});

app.get("/callsCount", async (req, res) => {
  res.send(`${req.session.callsCount}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
