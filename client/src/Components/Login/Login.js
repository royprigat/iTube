import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Paper from "@material-ui/core/Paper";
import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "./Login.css";

const Login = ({ auth, config }) =>
  (
    <div className="area">
      <Paper elevation={8} className="form-container">
        <FormControl component="fieldset" className="form">
          <h2>iTube</h2>
          <StyledFirebaseAuth uiConfig={config} firebaseAuth={auth()} className="signInBtns"/>
          <FormHelperText className="credit">
            Made with <span role="img" aria-label="heart">♥️</span> by Roy Prigat
          </FormHelperText>
        </FormControl>
      </Paper>

      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );

export default Login;
