import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Listen from "./pages/listen";
import Pray from "./pages/pray";
import Calendar from "./pages/calendar";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Authentication from "./pages/authentication";
import Members from "./pages/members/members";
import Error from "./pages/error";

// Routes for all the web pages
const Routes = [
  {
    path: "/",
    exact: true,
    main: () => <Authentication />
  },
  {
    path: "/home",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/about",
    exact: true,
    main: () => <About />
  },
  {
    path: "/listen",
    exact: true,
    main: () => <Listen />
  },
  {
    path: "/pray",
    exact: true,
    main: () => <Pray />
  },
  {
    path: "/calendar",
    exact: true,
    main: () => <Calendar />
  },
  {
    path: "/donate",
    exact: true,
    main: () => <Donate />
  },  
  {
    path: "/contact",
    exact: true,
    main: () => <Contact />
  },
  {
    path: "/error",
    exact: true,
    main: () => <Error />
  }
];

const PrivateRoutes = [
  {
    auth: Auth(),
    path: "/members",
    exact: true,
    main: () => <Members />
  }
]

// Authenticates based on Firebase Auth
function Auth() {
  let auth = true;
  //   setAuth(true);
//   // if (FireBaseAuth) {
//   //   setAuth(true);
//   // } else {
//   //   setAuth(false);
//   // }
  return auth;
}

function RouteSwitches() {

  return(
    <Switch>
    {Routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        children={route.main}
      />
    ))}
    {
      PrivateRoutes.map((route, index) => (
        route.auth ? 
        <Route
          key={index}
          path={route.auth ? route.path : "/error"}
          exact={route.exact}
          children={route.auth ? route.main : () => <Error />}
        />
        :
        <Redirect to="/error"></Redirect>
      ))
    }
  </Switch>
  );
};

export default RouteSwitches;