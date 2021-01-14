/* eslint-disable react-hooks/exhaustive-deps */
import {
  Grid,
  makeStyles,
  withStyles,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
// import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Paper from "@material-ui/core/Paper";
import GlobalStyles from "../../Globals.styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import { fetchClients } from "../../Redux/actions/clientActions";

const Clients = ({ clients, fetchClients }) => {
  const [loading, setLoading] = useState(false);

  // if(clients){
  //   const total = clients.reduce((total, client)=>{
  //     return total+ parseFloat(client.balance.toString());
  //   },0)
  //   return {totalOwned: total}
  // }
  const globalClass = GlobalStyles();
  useEffect(() => {
    fetchClients();
  }, []);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 600,
    },
  });

  // console.log(clients);
  const classes = useStyles();
  if (clients) {
    return (
      <div>
        <Grid container>
          <Grid item xs={6} className={classes.flex}>
            <h2 style={{ textAlign: "left" }}>
              <PeopleIcon /> Clients
            </h2>
          </Grid>
          <Grid item xs={6}>
            {/* <Typography variant="h5" color="secondary">Total Owned: {' '}</Typography>
            <Typography variant="h6" color="primary">$4343</Typography> */}
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Balance</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {clients.map((client) => {
                return (
                  <StyledTableRow key={client.id}>
                    <StyledTableCell component="th" scope="row">
                      {client.firstName} {client.lastName}
                    </StyledTableCell>
                    <StyledTableCell>{client.email}</StyledTableCell>
                    <StyledTableCell>
                      ${parseFloat(client.balance).toFixed(2)}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowRightAltIcon />}
                      >
                        <Link to="/clients" className={globalClass.links}>
                          Details
                        </Link>
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  clients: state.client.clients,
});

export default connect(mapStateToProps, { fetchClients })(Clients);
