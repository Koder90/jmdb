const mongoose = require("mongoose");

const { Schema } = mongoose;


const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;
