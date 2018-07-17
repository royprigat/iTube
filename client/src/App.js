import React, { Component } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import firebase from "firebase";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyDa40DJrn49u6OxoPAqEKh-ir2568ChjqE",
  authDomain: "itube-210421.firebaseapp.com",
  databaseURL: "https://itube-210421.firebaseio.com",
  projectId: "itube-210421",
  storageBucket: "",
  messagingSenderId: "881516146615"
};

firebase.initializeApp(config);

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

class App extends Component {
  state = {
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.state.isSignedIn ? (
        <Home firebase={firebase} />
        ) : (
        <Login auth={firebase.auth} config={this.uiConfig} />
        )}
      </MuiThemeProvider>
    );
  }
}

export default App;
