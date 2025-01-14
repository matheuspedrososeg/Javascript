import express from "express";
import { fileURLToPath } from "url";
import {dirname } from "path";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
  res.send()
})