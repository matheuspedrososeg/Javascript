import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  displayList(data)
  res.render("index.ejs", data);
});

function displayList(data) {
  if (data.seconds % 2 != 0) {
    data.items = "No items to display";
  }
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
