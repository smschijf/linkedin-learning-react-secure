import express from "express";
import jwt from "express-jwt";
import cors from "cors";
import jwks from "jwks-rsa";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
