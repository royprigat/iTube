import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import './Navbar.css';

const styles = {
  flex: {
    flexGrow: 1,
    fontSize: 18
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
};

const Navbar = ({ classes, firebase }) => {
  return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit" className={classes.flex}>
            iTube
          </Typography>
          <Button color="inherit" onClick={() => firebase.auth().signOut()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
