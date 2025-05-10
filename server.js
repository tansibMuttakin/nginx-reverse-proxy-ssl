const express = require("express");
const app = express();
const port = 3000;

const replicaApp = process.env.APP_NAME;

app.get("/", (req, res) => {
  res.send(`Hello World from ${replicaApp}`);
});

app.listen(port, () => {
  console.log(`${replicaApp} is listening on port ${port}`);
});
