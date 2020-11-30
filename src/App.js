import React from "react";
import "./App.css";
import MenuAppBar from "./components/menuappbar";
import SimpleBottomNavigation from "./components/navbar";
import RouteSwitches from "./routes";

import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div class="AppBody">
    {/* React Router */}
    <Router>
      {/* Top app bar */}
      <MenuAppBar/>

      {/* Switches */}
      <RouteSwitches />

      {/* Bottom Navigation */}
      <SimpleBottomNavigation/>
      </Router>
    </div>
  );
}

export default App;
