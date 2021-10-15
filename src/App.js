import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Input from "./components/Input";
import Content from "./components/Content";

const App = () => {
  const [search, setSearch] = useState("");



  return (
    <div className="App">
      <Header />
      <Input search={search} setSearch={setSearch} />
 <Content />
    
    </div>
  );
}

export default App;
