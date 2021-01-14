import React, { useState } from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { connect } from "react-redux";
import { addClinets } from "../../Redux/actions/clientActions";
const AddClients = ({addClinets}) => {
  const initialState = {
    firstName: "",
    lastName: '',
    email: '',
    phone: '',
    balance: ''
  }
  const [formData, setFormData] = useState(initialState);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },

    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: 18
    },
    button: {
      width: "30%",
      padding: "10px 0",
      margin: "30px auto",
      fontSize: "18px",
      fontWeight: "bold"
    },
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Miracle Code Setting old state and new date
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClinets(formData);

    setFormData(initialState);
  };

  const { firstName, lastName, email, phone, balance } = formData;

  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Button
            style={{ textAlign: "left" }}
            startIcon={<ArrowBackIcon />}
            variant="contained"
            color="secondary"
          >
            <Link to="/">Back to Dashboard</Link>
          </Button>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <div className={classes.root}>
          <div>
            <TextField
            
              id="standard-full-width"
              type="text"
              label="First Name"
              style={{ marginTop: 18 }}
              placeholder="Enter your first name"
              fullWidth
              margin="normal"
              name="firstName"
              required
              onChange={handleChange}
              value={firstName}
            />
          </div>

          <div>
            <TextField
              id="standard-full-width"
              type="text"
              label="Last Name"
              style={{ marginTop: 18 }}
              placeholder="Enter your last name"
              fullWidth
              margin="normal"
              required
              name="lastName"
              onChange={handleChange}
              value={lastName}
            />
          </div>
          <div>
            <TextField
              id="standard-full-width"
              type="email"
              label="Email"
              style={{ marginTop: 18 }}
              placeholder="Enter your email"
              fullWidth
              margin="normal"
              required
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <TextField
              type="number"
              id="filled-full-width"
              label="Phone"
              style={{ marginTop: 18 }}
              placeholder="Enter your phone no."
              fullWidth
              margin="normal"
              name="phone"
              onChange={handleChange}
              value={phone}
            />
          </div>
          <div>
            <TextField
              id="filled-full-width"
              type="number"
              label="Balance"
              style={{ marginTop: "18" }}
              placeholder="Enter default balance"
              fullWidth
              margin="normal"
              name="balance"
              onChange={handleChange}
              value={balance}
            />
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};



export default connect(null, {addClinets})(AddClients);
