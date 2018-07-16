import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import "./Login.css";

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
