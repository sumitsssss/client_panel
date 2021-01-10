import {
  Grid,
  makeStyles,
  withStyles,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Paper from "@material-ui/core/Paper";
import GlobalStyles from "../../Globals.styles";

const Clients = () => {
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

  const classes = useStyles();
  const clients = [
    {
      id: 9874548,
      firstName: "Nancey",
      lastName: "Cooper",
      email: "nancey@gmail.com",
      phone: 555 - 555 - 5555,
      balance: 30,
    },
  ];
  return (
    <div>
      {clients ? (
        <div>
          <Grid container>
            <Grid item xs={6} className={classes.flex}>
              <h2 style={{textAlign: "left"}}>
                <PeopleIcon /> Clients
              </h2>
            </Grid>
            <Grid item xs={6}></Grid>
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
                {clients.map((client) => (
                  <StyledTableRow key={client.id}>
                    <StyledTableCell component="th" scope="row">
                      {client.firstName} {client.lastName}
                    </StyledTableCell>
                    <StyledTableCell>{client.email}</StyledTableCell>
                    <StyledTableCell>${parseFloat(client.balance).toFixed(2)}</StyledTableCell>
                    <StyledTableCell>
                      <Link to={`/client/${client.id}`} className={GlobalStyles().links}>
                        <Button variant="contained" color="primary" startIcon={<ArrowRightAltIcon />}>
                          Details
                        </Button>
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  );
};

export default Clients;
