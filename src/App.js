import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Login from "./component/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
