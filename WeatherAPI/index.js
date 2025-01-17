import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import {fileURLToPath} from "url";
import {dirname} from "path";
import { get } from "http";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
} )

app.listen(port, () => {
    console.log("Server started on port: " + port);
})

app.get("/find", (req,res) => {
    async function callApi(city, country) {

        const getLatLon = await axios.get("// http://api.openweathermap.org/geo/1.0/direct?q={ "+ city + "},{" + country + "}&appid=" + apiKey);
    
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
    
        const response = await axios.get("https://api.openweathermap.org/data/3.0/onecall?lat={" + lat + "}&lon={"+ lon + "}&appid=" + apiKey);

        var info = document.getElementById("info");

        info.innerText()

        res.sendFile(__dirname + "/index.html", {latitude: lat, longitude: lon});
    }
})



const apiKey = "453b8a9c57a317317ce40035641604b7";

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

