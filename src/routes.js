import {
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Listen from "./pages/listen";

const Routes = [
  {
    path: "/",
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
  }
];

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
  </Switch>
  );
};

export default RouteSwitches;