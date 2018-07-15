import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import "./App.css";
import Login from "./Components/Login/Login";

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

class App extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
          <Login />
      </MuiThemeProvider>
    );
  }
}

export default App;
