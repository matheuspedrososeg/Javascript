import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("home.ejs");
})

var blogList = [];
var blogCount = 0;

function createBlog(author) {
    blogCount++;
    blogList.push( {author});
}

function renderBlogs() {
    return blogList;
}

app.get("/essays", (req,res) => {
    console.log("Blog list: " + blogList)
    const renderedBlogs = renderBlogs();
    res.render("essays.ejs", {blogs : renderedBlogs});
})

app.get("/about", (req,res) => {
    res.render("about.ejs");
})

app.get("/create", (req,res) => {
    res.render("create.ejs");
})

app.post("/created", (req, res) => {
    const { 'blog-post': blogPost } = req.body;

    if (blogPost) {
        createBlog(blogPost); 
        console.log("New Blog Created:", blogPost);
        res.redirect("/essays");
    }
});


app.listen(port, () => {
    console.log("listening on port: " + port);
    console.log("connected at: " + new Date());
});