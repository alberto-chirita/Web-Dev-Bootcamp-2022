const express = require("express");
const app = express();
const port = 8080;

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!");
//   //   res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE!");
//   res.send({ color: "red" });
// });

app
  .get("/", (req, res) => {
    res.send("Welcome to the home page!!!");
  })
  .get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
  })
  .get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(
      `<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`
    );
  })
  .post("/cats", (req, res) => {
    res.send("POST REQUEST TO /cats!!! THIS IS DIFFERENT THEN A GET REQUEST!");
  })
  .get("/cats", (req, res) => {
    res.send("MEOW!!");
  })
  .get("/dogs", (req, res) => {
    res.send("WOOF!!");
  })
  .get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
      res.send("NOTHING FOUND IF NOTHING SEARCHED!");
    } else {
      res.send(`<h1>Search results for: ${q}</h1>`);
    }
  })
  .get("*", (req, res) => {
    res.send("I don't know that path!");
  });

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}!`);
});
