import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/cjs/react.development";
import Login from "./components/Login";
import Register from "./components/Register";
import WatchedList from "./components/WatchedList";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [favtitle, setFavtitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [movieList, setMovieList] = useState([]);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      listOfUsers.find(
        (user) => user.username === name && user.password === pass
      )
    ) {
      console.log("logged in");
      setLoggedIn(true);
      console.log(loggedIn, "if true");
      navigate("/");
    } else {
      console.log("wrong username or password");
      setLoggedIn(false);
      console.log(loggedIn, "if false");
      alert("Account doesn't exist. Please try again!");
    }
  };

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleUserName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Fragment>
              <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              <Content
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                movieList={movieList}
                setMovieList={setMovieList}
                favtitle={favtitle}
              />
            </Fragment>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              listOfUsers={listOfUsers}
              setListOfUsers={setListOfUsers}
              handleLogin={handleLogin}
              handleUserName={handleUserName}
              handlePassword={handlePassword}
            />
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Register
              listOfUsers={listOfUsers}
              setListOfUsers={setListOfUsers}
              registered={registered}
              setRegistered={setRegistered}
              email={email}
              setEmail={setEmail}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          exact
          path="/watchedlist"
          element={<WatchedList loggedIn={loggedIn} movieList={movieList} />}
        />
      </Routes>
    </div>
  );
};

export default App;
