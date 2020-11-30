import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "grey",
    position: "absolute",
    bottom: 0,
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        component={Link} 
        to="/" 
        label="Home" 
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction 
        component={Link} 
        to="/About" 
        label="About" 
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction 
        component={Link} 
        to="/Listen" 
        label="Listen" 
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;