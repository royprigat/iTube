import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import './Home.css';

class Home extends Component {

  render() {
      const { firebase } = this.props;
    return (
      <div>
        <Navbar firebase={firebase}/>
        <Hero firebase={firebase}/>
      </div>
    );
  }
}

export default Home;