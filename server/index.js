const express = require("express");
const app = express();
const port = 3000;

app.use('/', express.static('public/pages'))
app.use('/static', express.static('public/js'))
app.use('/static', express.static('public/css'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
