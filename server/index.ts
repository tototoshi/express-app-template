require("source-map-support").install();

import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Application started at localhost:${port}`);
});
