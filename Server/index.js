import express from "express";
import jwt from "express-jwt";
import cors from "cors";
import jwks from "jwks-rsa";
import bodyParser from "body-parser";
import courses from "./courses.json" assert {type: "json"};

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
