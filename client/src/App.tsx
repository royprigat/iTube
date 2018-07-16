import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
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
  authToken?: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.getAuth = this.getAuth.bind(this);
  }

  public getAuth() {
    this.setState({ authToken: "1" })
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/app/home" component={Navbar}/>
                <Redirect from="/" to="/login"/>
            </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
