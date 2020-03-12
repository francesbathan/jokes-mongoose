const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connection to the database has been established."))
  .catch(err => console.log("Oh no! Can't connect to the database.", err));
