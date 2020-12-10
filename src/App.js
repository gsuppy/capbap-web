import React from "react";
import "./App.css";
import MenuAppBar from "./components/menuappbar";
import SimpleBottomNavigation from "./components/navbar";
import RouteSwitches from "./routes";
import {
  BrowserRouter as Router,
} from "react-router-dom";

// Static components that never change - all the dynamic web navigation happens in Switches
function App() {
  return (
    <div className="AppBody">
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
