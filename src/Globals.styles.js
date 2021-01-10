import { makeStyles } from "@material-ui/core";

const GlobalStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // marginTop: 20,
  },
  links: {
    textDecoration: "none",
    color: "#fff",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  buttonColor: {
    backgroundColor: "#4caf50",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
}));

export default GlobalStyles;
