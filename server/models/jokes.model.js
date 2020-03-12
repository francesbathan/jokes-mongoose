const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  content: String
});

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
