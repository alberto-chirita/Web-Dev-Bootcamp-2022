const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app
  .get("/", (req, res) => {
    res.render("home", { title: "Home" });
  })
  .get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Wnston"];
    res.render("cats", { cats, title: "Cats" });
  })
  .get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
      res.render("subreddit", { ...data, title: data.name });
    } else {
      res.render("notfound", { subreddit, title: "Not Found" });
    }
  })
  .get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { rand: num, title: "Random" });
  });

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
