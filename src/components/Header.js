import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../index.css';

function Header() {

 const [loggedIn, setLoggedIn] = useState(false);
 console.log(loggedIn)

 const toggleLogin = () => {
  return setLoggedIn(!loggedIn)
 }

  return (
    <div className="ui inverted huge menu menu">
     <a className="item">
    Home
  </a>
 {loggedIn ? <a className="item">
    Unavailable
  </a>: <a className="item">
    Watched List
  </a>}
  {loggedIn ? <a onClick={toggleLogin} className="item">Sign in</a> 
  : <a onClick={toggleLogin} className="item">Sign out</a>}
  </div>
  )
}

export default Header
