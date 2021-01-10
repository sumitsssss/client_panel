import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import GlobalStyles from "../../Globals.styles";

const SideBar = () => {
  const classes = GlobalStyles();

  
  return (
      <Button variant="contained" style={{marginTop: 20}} className={classes.buttonColor} startIcon={<AddIcon style={{color: '#fff'}} />}>
          <Link to="client/add" className={classes.links}>
        New
    </Link>
      </Button>
  );
};

export default SideBar;
