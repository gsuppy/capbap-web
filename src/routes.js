import React from "react";
import {
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';

import Home from "./pages/home";
import About from "./pages/about";
import Listen from "./pages/listen";
import Pray from "./pages/pray";
import Calendar from "./pages/calendar";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import Members from "./pages/members/members";
import {Authentication, firebaseApp} from "./pages/authentication";
import Logout from "./pages/members/logout";
import Error from "./pages/error";

const stripePromise = loadStripe("pk_test_51HwaJpDpclwZ4hsd3wQnUVcTq787XdFOSziRKaPfryyp0doaC7SpZ9m3UXiKlWgdrGOsmox12yaHLtxbTijevUsT003k3meohq    ");

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
    main: () => <Elements stripe={stripePromise}><Donate /></Elements>
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

class RouteSwitches extends React.Component {
  constructor(props) {
    super(props);
    this.uniqueIndex = 0;
  };

  state = {
    auth: undefined,
  };
  
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        this.setState({auth: true});
      } else {
        // No user is signed in.
        this.setState({auth: false});
      }
    }.bind(this));
  };
  
  render() {
    let PrivateRoutes;
    if (this.state.auth) {
      PrivateRoutes = [
        {
          type: "Route",
          path: "/members",
          exact: true,
          main: () => <Members />
        }, 
        {
          type: "Route",
          path: "/logout",
          exact: true,
          main: () => <Logout />
        }
      ];
    } else {
      PrivateRoutes = [
        {
          type: "Redirect",
          path: "/error",
          exact: true,
          main: () => <Error />
        }
      ];
    };

    return(
      <Switch>
      {Routes.map((route) => (
        <Route
          key={this.uniqueIndex++}
          path={route.path}
          exact={route.exact}
          children={route.main}
        />
      ))}
      {PrivateRoutes.map((route) => (
        <Route
          key={this.uniqueIndex++}
          path={route.path}
          exact={route.exact}
          children={route.main}
        /> 
      ))}
    </Switch>
    );
  }
};

export default RouteSwitches;