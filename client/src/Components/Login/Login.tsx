import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Paper from "@material-ui/core/Paper";
import * as firebase from 'firebase';
import * as React from "react";
import googleIcon from "../../assets/google.svg";
import { config } from "../../auth";
import "./Login.css";

firebase.initializeApp(config);

interface ILoginProps {
  setToken?: any;
  token?: string;
}

function Login(props: ILoginProps) {
  return (
    <div className="area">
      <Paper elevation={8} className="form-container">
        <FormControl component="fieldset" className="form">
          <h2>iTube</h2>
          <Button className="signBtn"><img src={googleIcon} className="google-icon"/><span style={{marginLeft: '20px'}}>Sign in with Google</span></Button>
          <FormHelperText className="credit">
            Made with ♥️ by Roy Prigat
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
}

export default Login;
