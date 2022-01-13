import React from 'react';
import '../index.css';
import { useNavigate } from "react-router-dom";


function Header({ loggedIn }) {

  const navigate = useNavigate();

  const handleWatched = () => {
    if(loggedIn = true) {
      navigate("/watchedlist")
    } else {
      alert("You need to be signed in to visit this page")
    }
  }

  return (
    <div className="ui inverted huge menu menu">
     <a className="item">
    Home
  </a>
   <a onClick = {handleWatched} className="item">
    Watched List
  </a>
 <a href="/login" className="item">Sign in</a> 
  </div>
  )
}

export default Header
