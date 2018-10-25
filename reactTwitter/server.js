//Import Twit package
var Twit = require("promised-twit");

//Consumer key, Access key, etc.
var config = require("./client/src/config");

//Creates Twit object
var T = new Twit(config);

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 5000;

app.post("/api/tweets", (req, res) => {
  T.getAsync("statuses/user_timeline", req.body).then(myJson => {
    anyTweet = myJson.map(tweet => ({
      id: tweet.id,

      tweet: tweet.full_text
    }));

    res.json(anyTweet);
  });
});

app.listen(port, () => console.log(`Sever started on port ${port}`));
