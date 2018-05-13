import React from "react";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => (
  <div className="app">
    <Navbar />
    <Main />

    <Link to="/meetups/add" className="btn btn-add">
      +
    </Link>
  </div>
);

export default App;
