const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "/public")));
// a public directory containing the assets
// /public
//   /css
//   /js
//   /imgs
// or different directories
// /css
// /js
// /imgs

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app
  .get("/", (req, res) => {
    res.render("home");
  })
  .get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Wnston"];
    res.render("cats", { cats });
  })
  .get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
      res.render("subreddit", { ...data });
    } else {
      res.render("notfound", { subreddit });
    }
  })
  .get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { rand: num });
  });

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`);
});
