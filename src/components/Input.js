import axios from 'axios';
import React from 'react'
import '../index.css';

const Input = ({ search, setSearch }) => {

  
  return (
   <div className="ui action input">
  <input type="text" 
  placeholder="Search..." 
  value = {search}
  onChange= {e => setSearch(e.target.value)}
  />
  <button className="ui button">Search</button>
</div>
   
  )
}

export default Input
