import React from "react";
import SideBar from "./Sidebar";
import Clients from "../client/Clients";
import Grid from "@material-ui/core/Grid";
import GlobalStyles from "../../Globals.styles";

const Dashboard = () => {
  const classes = GlobalStyles();
  
  return (
    <Grid container>
      <Grid item xs={10}>
          <Clients />
      </Grid>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
