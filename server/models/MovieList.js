const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  }
})

const MovieList = mongoose.model('MovieList', MovieSchema);

module.exports = MovieList;