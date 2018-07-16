import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

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

interface IProps {
  authToken?: string;
}

interface IState {
  authorized?: boolean
  authToken?: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      authToken: "",
      authorized: false
    }

    this.signIn = this.signIn.bind(this);
  }

  public signIn() {
    alert("Hi");
  }

  public render() {
    const { authorized } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        {
          authorized ?
          <Navbar/> :
          <Login/>
        }
      </MuiThemeProvider>
    );
  }
}

export default App;
