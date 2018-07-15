import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: "#ba68c8",
      dark: "#babdbe",
      light: "#ffffff",
      main: "#eceff1"
    },
    secondary: {
      contrastText: "#fafafa",
      dark: "#883997",
      light: "#ee98fb",
      main: "#ba68c8"
    }
  }
});

const styles = {
  paper: {
    padding: 10
  },
  root: {
    flexGrow: 1
  }
};

function App(props: { classes: any; }) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
