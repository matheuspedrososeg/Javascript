import express from "express";
import path from 'path';
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    console.log(req.rawHeaders);
    console.log(req.ip);
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
    console.log("Server started on port " + port)
})
