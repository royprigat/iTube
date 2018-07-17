import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    const { firebase } = this.props;
    return (
      <div className="hero">
        <div className="hero-header">
          <h1>Welcome, {firebase.auth().currentUser.displayName}!</h1>
          <p>Learn something new from your personal video library.</p>
          <p>Add more videos from Youtube.</p>
        </div>
      </div>
    );
  }
}

export default Hero;
