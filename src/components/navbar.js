import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import HearingIcon from "@material-ui/icons/Hearing";
import PeopleIcon from "@material-ui/icons/People";
import EventIcon from "@material-ui/icons/Event";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#e0e0e0",
    position: "absolute",
    bottom: 0,
  },
});

const NavActions = [
  {
    path: "/home",
    label: "Home",
    icon: <HomeIcon/>
  },
  {
    path: "/about",
    label: "About",
    icon: <InfoIcon/>
  },
  {
    path: "/listen",
    label: "Listen",
    icon: <HearingIcon/>
  },
  {
    path: "/pray",
    label: "Pray",
    icon: <PeopleIcon/>
  },
  {
    path: "/calendar",
    label: "Calendar",
    icon: <EventIcon/>
  },
  {
    path: "/donate",
    label: "Donate",
    icon: <CreditCardIcon/>
  },
  {
    path: "/contact",
    label: "Contact",
    icon: <ContactMailIcon/>
  }
];

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
      {NavActions.map((nav, index) => (
        <BottomNavigationAction
          component={Link}
          key={index}
          to={nav.path}
          label={nav.label}
          icon={nav.icon}
        />
      ))}
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;