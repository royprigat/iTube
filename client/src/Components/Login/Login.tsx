import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import * as React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="area">
      <Paper elevation={5} className="form-container">
        <FormControl component="fieldset">
          <FormLabel component="legend">iTube</FormLabel>
          <FormGroup>Hello</FormGroup>
          
          <FormHelperText>Made with ♥️ by Roy Prigat</FormHelperText>
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
