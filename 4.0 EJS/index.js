import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

var weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

var isWeekend = false;

function getDay(req, res, next) {
    const day = req.body["day"];

    for (let i = 0; i < weekDays.length; i++) {
        if (day == weekDays[i]) {
            isWeekend = true;
        }
    }
    next();
}

app.get("/", (req, res) => {
    const today = new Date();
    let day = today.getDay();
    
    if (day < 6) {
        res.render("index.ejs", {
            dayType: "a weekday",
            advice: "its time to work",
        });
    } else {
        res.render("index.ejs", {
            dayType: "a weekend",
            advice: "go relax",
        })
    }
});

app.get("/phrase", (req, res) => {
    if (isWeekend === true) {
        res.render("//views/phrase.ejs")
    }
})

app.listen(port, () => {
    console.log("Listening on port: " + port);
})