import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

class Home extends Component {
  
  render() {
      const { firebase } = this.props;
    return (
      <div>
        <Navbar firebase={firebase}/>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      </div>
    );
  }
}

export default Home;