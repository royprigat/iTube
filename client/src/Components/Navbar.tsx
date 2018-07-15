import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

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
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
};

function Navbar(props: { classes: any }) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit" className={classes.flex}>
            itube
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Navbar);
