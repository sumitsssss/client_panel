import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core";


const Navbar = () => {
    const useStyles = makeStyles((theme)=>({
        root:{
            flexGrow: 1,
        },
        links:{
            textDecoration: 'none',
            color: '#fff',
            marginLeft: 45
        },
        color:{
            color: '#f4f4f4',
        }
    }));
    const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton>
          <MenuIcon className={classes.color}/>
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
