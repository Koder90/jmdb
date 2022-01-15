import React from "react";
import "../index.css";
import Axios from "axios";

const Register = ({
  listOfUsers,
  setListOfUsers,
  registered,
  setRegistered,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
  favtitle,
}) => {
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      /* need to fix this in order to push favtitle to specific user */
      email: email,
      username: username,
      password: password,
      favtitle: "",
    }).then((response) => {
      setListOfUsers([...listOfUsers, { email, username, password }]);
      console.log(listOfUsers);
    });
  };

  return (
    <div>
      <form className="ui form login-form">
        <div className="field">
          <label>E-mail</label>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Enter your username</label>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Enter your password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="ui button" type="submit" onClick={createUser}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
