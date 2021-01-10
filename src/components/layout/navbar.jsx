import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import GlobalStyles from "../../Globals.styles";

const Navbar = () => {
  const classes = GlobalStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar className={""}>
        <IconButton>
          <MenuIcon className={classes.color} />
        </IconButton>

        <Link to="/" className={classes.links}>
          <Typography variant="h5">Client Panel</Typography>
        </Link>
        <Link to="/" className={classes.links}>
          <Typography variant="h5">Dashboard</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
