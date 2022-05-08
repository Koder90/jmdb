const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const MovieModel = require('./models/MovieList')

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Koder90:Jerko1990@cluster0.ojpcn.mongodb.net/jmdb?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
      console.log(res);
    }
  });
});

app.get("/getMovieList", (req, res) => {
  MovieModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log(err);
    } else {
      res.json(result);
      console.log(res);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.put("/addMovie", async (req, res) => {
  const title = req.body;
  const newMovieList = new MovieModel(title);
  await newMovieList.save();

  res.json(title);
});

app.listen(3001, () => {
  console.log("server runs perfeclty");
});
