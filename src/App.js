import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./index.css";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export default App;
