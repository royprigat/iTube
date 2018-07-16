import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as firebase from "firebase";
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

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
firebase.initializeApp(config);

interface IProps {
  authToken?: string;
}

interface IState {
  authToken?: string;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      authToken: this.props.authToken
    };

    this.getAuth = this.getAuth.bind(this);
  }

  public getAuth() {
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult()
      .then(result => {
        if (result.credential) {
          this.setState({ authToken: "1" });
        }
      })
      .catch(error => {
        this.setState({ authToken: "1" });
      });
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.state.authToken === "1" ? (
          <Navbar />
        ) : (
          <Login getToken={this.getAuth} token={this.state.authToken} />
        )}
      </MuiThemeProvider>
    );
  }
}

export default App;
