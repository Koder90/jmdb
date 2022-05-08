import React, { useEffect } from "react";
import Axios from "axios";

const Login = ({
  loggedIn,
  setLoggedIn,
  listOfUsers,
  setListOfUsers,
  registered,
  setRegistered,
  handleLogin,
  handleUserName,
  handlePassword,
}) => {
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div className="login-form">
      <form className="ui form">
        <div className="field">
          <label>Username</label>
          <input onChange={handleUserName} type="text" placeholder="Username" />
        </div>
        <div className="field">
          <label>Password</label>
          <input onChange={handlePassword} type="text" placeholder="Password" />
        </div>

        <button onClick={handleLogin} className="ui button" type="button">
          Login
        </button>

        <a href="/register" className="item">
          Register
        </a>
      </form>
    </div>
  );
};

export default Login;
